import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, Stack } from '@mui/material';
import { ethers } from 'ethers';
import { useActiveAccount, useWalletBalance } from 'thirdweb/react';
import {
  createThirdwebClient,
  estimateGas,
  fromGwei,
  getContract,
  getGasPrice,
  prepareContractCall,
  readContract,
  resolveMethod,
  sendAndConfirmTransaction,
  sendTransaction,
  simulateTransaction,
  toEther,
  toUnits,
  toWei
} from 'thirdweb';
import { callSDK } from 'helpers/helpers';
import { LoadingButton } from '@mui/lab';
import { Alert, CircularProgress } from '@mui/material';
import { basePost } from 'utils/apiClient';
import { useMutation } from 'react-query';
import vuzaControllerCore_ABI from 'helpers/abi/vuzaControllerCore.json';
import marketyt_ABI from 'helpers/abi/marketYT.json';
import wstETH_ABI from 'helpers/abi/wsteth.json';
import { arbitrum } from 'thirdweb/chains';
import { allowance, approve } from 'thirdweb/extensions/erc20';
import { ethers6Adapter } from 'thirdweb/adapters/ethers6';

const client = createThirdwebClient({ clientId: import.meta.env.VITE_APP_THIRDWEBCLIENTID });

const vuza_principal_token_address = '0xe95E6b2ad2d3bE626C149f55E7C694745d0043Ad';
const vuza_core_contract = '0x6d98a4A1cc3322C8D6Cc2AB878eAB7F025f4ec6a';//main
const destination_vuza_address = '0xc17Dd79Fa1883f1BF0935ce76cC3850C81309d89';
const circle_usdc_token_address = '0xaf88d065e77c8cC2239327C5EDb3A432268e5831';
const arbitrum_wsteth_token_address = '0x5979D7b546E38E414F7E9822514be443A4800529';
const pendle_router_v4 = '0x888888888889758F76e7103c6CbF23ABbF58F946';
const market_yt_token_address = '0xC8D9369809e48d03FF7B69D7979b174e2D34874C';
// const circle_destination_vuza_address =

const DepositModal = ({ open, handleClose, market_id, market_name, market_maturity, market_address, ytToken, tokenIn }) => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [ytBalance, setYtBalance]=useState(0);
  const activeAccount = useActiveAccount();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [stepcomplete,setStepComplete] = useState(0)

  const { data: wstethData } = useWalletBalance({
    chain: 42161,
    address: activeAccount?.address,
    client: client,
    tokenAddress: arbitrum_wsteth_token_address
  });
  console.log("wsteth",wstethData)

  const { data: ytData, } = useWalletBalance({
    chain: 42161,
    address: activeAccount?.address,
    client: client,
    tokenAddress: market_yt_token_address
  });

  console.log("YT balance",ytData)


  useEffect(() => {
    const fetchBalance = async () => {
      if (wstethData?.displayValue) {
        try {
          const numericValue = typeof wstethData.displayValue === 'string' ? parseFloat(wstethData.displayValue) : wstethData.displayValue;
          setBalance(!isNaN(numericValue) ? numericValue.toFixed(6) : 'N/A');
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
  }, [wstethData,stepcomplete]);

  useEffect(() => {
    const fetchBalance = async () => {
      if (ytData?.displayValue) {
        try {
          const numericValue = typeof ytData.displayValue === 'string' ? parseFloat(ytData.displayValue) : ytData.displayValue;
          setYtBalance(!isNaN(numericValue) ? numericValue.toFixed(6) : 'N/A');
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
  }, [ytData,stepcomplete]);

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    if (Number(inputValue) <= balance) {
      setAmount(inputValue);
    }
  };

  const supplierDepositsMutation = useMutation((data) => basePost('/v1/supplier/deposit/', data), {
    onSuccess: (data) => {
      console.log('Deposit successful:', data);
      return true;
    },
    onError: (error) => {
      console.error('Error calling supplier deposit mutation:', error);
      return false;
    }
  });

  const handleDeposit = async () => {
    // DEPOSIT PROCESS:
    // @dev If you need to convert to readable format Ethers
    // @dev const PT_YT_OUT = ethers.formatUnits(pt_yt_out_value, 20);
    try {
      setLoading(true);
      setError('');
      setSuccess('');

      console.log('DEPOSITER INITIAL AMOUNT', amount);

      const pt_yt_out_value = await mintPyFromToken(amount, ytToken, tokenIn, 42161, destination_vuza_address);
      console.log(pt_yt_out_value);
   
      const signer = await ethers6Adapter.signer.toEthers({ client: client, chain: arbitrum, account: activeAccount });
      const wstETHContract = new ethers.Contract(arbitrum_wsteth_token_address, wstETH_ABI, signer);
      const approvalTx = await wstETHContract.approve(vuza_core_contract, toWei(amount));

      //   // Set a timeout of 1 minute (60,000 milliseconds) before checking the allowance
      await new Promise(resolve => setTimeout(resolve, 30000));



      const supplier_deposit_response = await supplierDeposit(
        destination_vuza_address,
        amount,
        activeAccount.address,
        ytToken,
        pt_yt_out_value.contractCallParams[3],
        activeAccount,
        pt_yt_out_value.data.amountOut
      );
      console.log(supplier_deposit_response);

      setStepComplete(1)

      await new Promise(resolve => setTimeout(resolve, 30000));
      setStepComplete(2)
      console.log("Moving to swapping")
      console.log(ethers.parseUnits(amount, 18))
      const yt_token_out_value = await swapYtToToken(ytBalance, ytToken, circle_usdc_token_address, 42161, destination_vuza_address,market_address);
      console.log(yt_token_out_value);


      const swap_usd = await supplierSwapUsdc(
        destination_vuza_address,
        ytBalance,
        market_address,
        activeAccount,
        yt_token_out_value.contractCallParams[3],
        yt_token_out_value.contractCallParams[4],
        market_yt_token_address
      )
      console.log(swap_usd);
      setStepComplete(3)


      // 5. Call Supplier Deposit Mutation API
      // add the value of YT in USD
      // const apiResponse = await supplierDepositsMutation.mutateAsync({
      //   market_id: market_id,
      //   market_address: market_address,
      //   market_name: market_name,
      //   market_maturity: market_maturity,
      //   supplier_wallet: activeAccount?.address,
      //   pt_minted: pt_yt_out_value.data.amountOut,
      //   yt_minted: pt_yt_out_value.data.amountOut,
      //   wsteth_deposited: amount,
      //   vwsteth_minted: pt_yt_out_value.data.amountOut
      // });
      // console.log('API Response:', apiResponse);

      // If successful, show success alert
      setSuccess('Transaction successful!');
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err) {
      // Handle errors such as user rejecting the transaction
      console.error('Transaction error:', err);

      // Set a user-friendly error message
      if (err.code === 4001) {
        // If the user rejected the transaction
        setError('You have rejected the transaction');
      } else {
        // Other types of errors
        setError('An error occurred while processing the transaction. Please try again.');
      }
    } finally {
      // Hide loading spinner and close modal
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          padding: 4,
          width: 400,
          margin: 'auto',
          marginTop: '20%',
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 24
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Deposit wstETH
        </Typography>

        {loading && <CircularProgress />}

        {error && (
          <Alert severity="error" onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" onClose={() => setSuccess('')}>
            {success}
          </Alert>
        )}

        <Typography variant="body2" color="textSecondary">
          Current Balance: {balance} wstETH
        </Typography>
        <TextField label="Amount" type="number" value={amount} onChange={handleAmountChange} fullWidth margin="normal" variant="outlined" />
        <Stack direction="row" justifyContent="space-between">
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <LoadingButton loading={loading} onClick={handleDeposit} variant="contained" color="primary" disabled={!amount}>
            {loading ? 'Processing...' : 'Deposit'}
          </LoadingButton>
        </Stack>
      </Box>
    </Modal>
  );
};

async function test1() {
  throw new Error('1) Failed to sell YT on Pendle.');
}

async function test2() {
  throw new Error('2) Failed to sell YT on Pendle.');
}

async function test3() {
  throw new Error('3) Failed to sell YT on Pendle.');
}

function transformTokenInput(apiOutput) {
  return {
    ...apiOutput,
    swapData: {
      ...apiOutput.swapData,
      extCalldata: ethers.toUtf8Bytes(apiOutput.swapData.extCalldata) // Use zero bytes if empty
    }
  };
}

function transformTokenOutput(apiOutput) {
  return {
    ...apiOutput,
    swapData: {
      ...apiOutput.swapData,
      extCalldata: ethers.toUtf8Bytes(apiOutput.swapData.extCalldata) // Use zero bytes if empty
    }
  };
}
async function supplierDeposit(
  destination_vuza_address,
  amount,
  activeAccount,
  ytTokenAddress,
  tokenInput,
  connectedWallet,
  minPYout
) {
  try {
    try {
      if (
        !ethers.isAddress(destination_vuza_address) ||
        !ethers.isAddress(activeAccount) ||
        !ethers.isAddress(ytTokenAddress)
      ) {
        throw new Error('Invalid Ethereum address provided');
      }

      console.log('Transaction Prepared');
      // var updated_amount = ethers.parseUnits(amount, 18); // uint256 amount (converted to Wei)
      // console.log(updated_amount);

      // Connect to the VuzaControllerCore contract
      const signer = await ethers6Adapter.signer.toEthers({ client: client, chain: arbitrum, account: connectedWallet });
      const vuzaControllerContract = new ethers.Contract(vuza_core_contract, vuzaControllerCore_ABI, signer);

      // Call the contract function getCallerAddress
      // console.log(await vuzaControllerContract.checkAllowance(activeAccount));
      // console.log(await vuzaControllerContract.hasSufficientAllowance(activeAccount,toWei(amount)));
      // console.log(await vuzaControllerContract.hasSufficientBalance(activeAccount,toWei(amount)))
      // console.log(await vuzaControllerContract.checkApprovals(activeAccount,vuza_core_contract))
      // console.log(await vuzaControllerContract.isPendleRouterApproved(activeAccount))
      // console.log(await vuzaControllerContract.extra(toWei(amount)))

      // console.log(transformTokenInput(tokenInput));
      // console.log("Transaction prepared let's simulate");
      const tx = await vuzaControllerContract.deposit(
        destination_vuza_address.toLowerCase(), // address destination_vuza_address
        toWei(amount), // uint256 amount (converted to Wei)
        ytTokenAddress.toLowerCase(),// address ytTokenAddress
        transformTokenInput(tokenInput),
        minPYout
      );
      console.log('Transaction Hash:', tx);

      // Wait for the transaction to be confirmed
      const receipt = await tx.wait();
      console.log('Transaction confirmed in block:', receipt);
      const event = receipt.events?.find(event => event.event === 'MintedPY');
      console.log(event)
      setStepComplete(5)

      // Access the outputs
      // const ptOut = receipt.args.netPyOut.toString();
      // const vptTokenOut = receipt.events[0].args.vptTokenOut.toString();

      // console.log(`ptOut: ${ptOut}`);
      return true;
    } catch (error) {
      console.error('Transaction error: ', error);
      throw error; // Throw error to handle it later if necessary
    }
  } catch (error) {
    console.error('Error transferring vwstETH:', error);
    throw new Error('Failed to transfer vwstETH.');
  }
}

async function supplierSwapUsdc(
  destination_vuza_address,
  amount,
  marketAddress,
  connectedWallet,
  tokenOutput,
  limitOrderData,
  market_yt_address
) {
  try {
    try {

      console.log('Swap Transaction Prepared');
      // var updated_amount = ethers.parseUnits(amount, 18); // uint256 amount (converted to Wei)
      // console.log(updated_amount);

      // Connect to the VuzaControllerCore contract
      const signer = await ethers6Adapter.signer.toEthers({ client: client, chain: arbitrum, account: connectedWallet });
      const vuzaControllerContract = new ethers.Contract(vuza_core_contract, vuzaControllerCore_ABI, signer);

      const marketYTContract = new ethers.Contract(market_yt_token_address, marketyt_ABI, signer);
      const approvalYTx = await marketYTContract.approve(pendle_router_v4, ethers.parseUnits(amount, 18));


      const tx = await vuzaControllerContract.swapUSDC(
        destination_vuza_address.toLowerCase(), // address destination_vuza_address
        ethers.parseUnits(amount, 18), // uint256 amount (converted to Wei)
        marketAddress.toLowerCase(),             // address marketAddress
        transformTokenOutput(tokenOutput),
        limitOrderData,
        market_yt_address.toLowerCase()
      );
      console.log('Swap Transaction Hash:', tx);

      // Wait for the transaction to be confirmed
      const receipt = await tx.wait();
      console.log('Swap Transaction confirmed in block:', receipt);
      const event = receipt.events?.find(event => event.event === 'MintedPY');
      console.log(event)

      // Access the outputs
      // const ptOut = receipt.args.netPyOut.toString();
      // const vptTokenOut = receipt.events[0].args.vptTokenOut.toString();

      // console.log(`ptOut: ${ptOut}`);
      return true;
    } catch (error) {
      console.error('Swap Transaction error: ', error);
      throw error; // Throw error to handle it later if necessary
    }
  } catch (error) {
    console.error('Swap Error transferring vwstETH:', error);
    throw new Error('Swap Failed to transfer vwstETH.');
  }
}
// Implement the minting function 0.0000001
// async function sendWstETH(destinationAddress, amount, activeAccount) {
//   try {
//     var inputAmount = await getMultiplyCount(amount);
//     const tx = await activeAccount.sendTransaction({
//       to: destinationAddress,
//       value: inputAmount // Use appropriate decimals
//     });
//     return tx;
//   } catch (error) {
//     console.error('Error sending wstETH:', error);
//     throw new Error('Failed to send wstETH.');
//   }
// }

async function mintPyFromToken(amountIn, ytToken, tokenIn, CHAIN_ID, receiver) {
  try {
    // Call the SDK to get the transaction details
    const res = await callSDK(`/v1/sdk/${CHAIN_ID}/mint`, {
      receiver: receiver,
      yt: ytToken,
      slippage: 0.01,
      tokenIn: tokenIn,
      enableAggregator: true,
      amountIn: toWei(amountIn) // Convert to correct token decimals
    });
    console.log(res);
    console.log('Amount PT & YT Out: ', res.data.amountOut);
    console.log('Price impact: ', res.data.priceImpact);

    console.log(res.tx);

    return res;
  } catch (error) {
    // Capture the error and log relevant details
    console.error('Minting transaction error:', error);
    console.error('Transaction failed:', error.message);
    // You can return the error or rethrow it for further handling
    throw new Error('Minting transaction failed');
  }
}

async function swapYtToToken(amount, ytToken, tokenOut, CHAIN_ID, destination_vuza_address,MARKET_ADDRESS) {
  try {
    // Call the SDK to get the transaction details
    const res = await callSDK(`/v1/sdk/${CHAIN_ID}/markets/${MARKET_ADDRESS}/swap`, {
      receiver: destination_vuza_address,
      slippage: 0.01,
      tokenIn: ytToken,
      tokenOut: tokenOut,
      enableAggregator: true,
      amountIn: ethers.parseUnits(amount, 18)
  });
    console.log(res);
    console.log('Amount Token Out: ', res.data.amountOut);
    console.log('Price impact: ', res.data.priceImpact);

    console.log(res.tx);

    return res;
  } catch (error) {
    // Capture the error and log relevant details
    console.error('Minting transaction error:', error);
    console.error('Transaction failed:', error.message);
    // You can return the error or rethrow it for further handling
    throw new Error('Minting transaction failed');
  }
}

// async function transferVwstETH(vwstETHAmount, activeAccount) {
//   try {
//     const signer = await getSigner();
//     var inputAmount = await getMultiplyCount(vwstETHAmount);
//     const vwstETHContract = new ethers.Contract(vuza_principal_token_address, vuzaControllerCore_ABI, signer);
//     console.log(vwstETHContract);

//     try {
//       // Send the transfer transaction
//       const txResponse = await vwstETHContract.transfer(activeAccount, inputAmount, {
//         gasLimit: 10000000 // You can also specify a custom gas limit here
//       });

//       console.log('Transaction Hash: ', txResponse);

//       // Wait for transaction confirmation
//       const receipt = await txResponse.wait();
//       console.log('Transaction confirmed in block: ', receipt);

//       return receipt; // Return the transaction receipt if needed
//     } catch (error) {
//       console.error('Transaction error: ', error);
//       throw error; // Throw error to handle it later if necessary
//     }
//   } catch (error) {
//     console.error('Error transferring vwstETH:', error);
//     throw new Error('Failed to transfer vwstETH.');
//   }
// }

// async function sellYTOnPendle(ytAmount, RECEIVER_ADDRESS, YT_ADDRESS, CHAIN_ID, MARKET_ADDRESS) {
//   try {
//     // Swap 1 YT to usdc in wstETH market with 1% slippage
//     const res = await callSDK(`/v1/sdk/${CHAIN_ID}/markets/${MARKET_ADDRESS}/swap`, {
//       receiver: RECEIVER_ADDRESS,
//       slippage: 0.01,
//       tokenIn: YT_ADDRESS,
//       tokenOut: circle_usdc_token_address,
//       enableAggregator: true,
//       amountIn: ytAmount
//     });
//     console.log(res);

//     // Send tx
//     const signer = await getSigner();
//     const txResponse = await signer.sendTransaction(res.tx);
//     console.log('Swapping transaction response:', txResponse);

//     await txResponse.wait();

//     return true;
//   } catch (error) {
//     console.error('Error selling YT on Pendle:', error);
//     throw new Error('Failed to sell YT on Pendle.');
//   }
// }

async function getMultiplyCount(amount) {
  // Convert to string to count decimals
  const amountStr = amount.toString();

  // Split by the decimal point
  const parts = amountStr.split('.');

  // If there is a decimal part, count the number of digits
  const decimalCount = parts.length > 1 ? parts[1].length : 0;

  // Determine MULTIPLYCOUNT
  const MULTIPLYCOUNT = 18 - decimalCount; // Adjust based on token's decimal requirements

  // Return parsed unit as a string
  return ethers.parseUnits(amount, MULTIPLYCOUNT).toString();
}
export default DepositModal;
