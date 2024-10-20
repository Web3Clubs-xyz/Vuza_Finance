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
import VPTToken_ABI from 'helpers/abi/vuzaPrincipalToken.json';
import { arbitrum, base } from 'thirdweb/chains';
import { allowance, approve } from 'thirdweb/extensions/erc20';
import { ethers5Adapter } from 'thirdweb/adapters/ethers5';
import { useChain } from 'contexts/ChainProvider';
import { Wormhole } from '@wormhole-foundation/sdk';


const client = createThirdwebClient({ clientId: import.meta.env.VITE_APP_THIRDWEBCLIENTID });

const vuza_principal_token_address = '0xe95E6b2ad2d3bE626C149f55E7C694745d0043Ad';
// 0xFB923B1d28B9B4409bD231924FDe6037015E302B old
const vuza_core_contract = '0x2ad68D4f2671275cCB31a53C96c4dFdB18d76F9a';//main
const destination_vuza_address = '0xc17Dd79Fa1883f1BF0935ce76cC3850C81309d89';
const circle_usdc_token_address = '0xaf88d065e77c8cC2239327C5EDb3A432268e5831';
const arbitrum_wsteth_token_address = '0x5979D7b546E38E414F7E9822514be443A4800529';
// const base_wsteth_token_address ='0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452';
const pendle_router_v4 = '0x888888888889758F76e7103c6CbF23ABbF58F946';
const market_yt_token_address = '0xC8D9369809e48d03FF7B69D7979b174e2D34874C';
// const circle_destination_vuza_address =

const DepositModal = ({ open, handleClose, market_id, market_name, market_maturity, market_address, ytToken, tokenIn,wstethData }) => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [ytBalance, setYtBalance]=useState(0);
  const activeAccount = useActiveAccount();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [stepcomplete,setStepComplete] = useState(0)
  const { selectedChain } = useChain();



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
  }, [wstethData]);


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

  const handleArbitrumDeposit = async () => {
    // DEPOSIT PROCESS:
    // @dev If you need to convert to readable format Ethers
    try {
      setLoading(true);
      setError('');
      setSuccess('');
      

      console.log('DEPOSITER INITIAL AMOUNT', amount);
      // const t =  await InteractCore(activeAccount)
      // console.log(t)
      if(amount < 0.001){
        setError("Amount must be at least 0.001.");
        return;
      }


      const pt_yt_out_value = await mintPyFromToken(amount, ytToken, tokenIn, 42161, destination_vuza_address);
      console.log(pt_yt_out_value);
   
      const signer = await ethers5Adapter.signer.toEthers({ client: client, chain: arbitrum, account: activeAccount });
      const wstETHContract = new ethers.Contract(arbitrum_wsteth_token_address, wstETH_ABI, signer);
      const approvalTx = await wstETHContract.approve(vuza_core_contract, toWei(amount));

        // Set a timeout of 1 minute (60,000 milliseconds) before checking the allowance
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
      console.log(pt_yt_out_value.data.amountOut)
      console.log(supplier_deposit_response);

      setSuccess('Deposit Accepted, Proceeding to Swapping!');

      await new Promise(resolve => setTimeout(resolve, 30000));
  
      console.log("Moving to swapping")
      console.log(ethers.utils.parseUnits(amount, 18))
      const yt_token_out_value = await swapYtToToken(toEther(pt_yt_out_value.data.amountOut), ytToken, circle_usdc_token_address, 42161, destination_vuza_address,market_address);
      console.log(yt_token_out_value);


      const swap_usd = await supplierSwapUsdc(
        destination_vuza_address,
        toEther(pt_yt_out_value.data.amountOut),
        market_address,
        activeAccount,
        yt_token_out_value.contractCallParams[3],
        yt_token_out_value.contractCallParams[4],
        market_yt_token_address
      )
      console.log(swap_usd);


      setSuccess('Swapping Acccepted, Proceeding to Rewarding you!');
      await new Promise(resolve => setTimeout(resolve, 30000));
  

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

      // await transferVPTTokens(activeAccount?.address,pt_yt_out_value.data.amountOut,activeAccount);
      setSuccess('You have received VuzaPT token, You will use this to withdraw your profit');



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

  const handleBaseDeposit = async () => {
    // DEPOSIT PROCESS:
    // @dev If you need to convert to readable format Ethers
    try {
      setLoading(true);
      setError('');
      setSuccess('');

      // If successful, show success alert
      setSuccess('Bridging Complete.. Proceeding!');
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err) {
      // Handle errors such as user rejecting the transaction
      console.error('Transaction error:', err);

      // Set a user-friendly error message
      if (err.code === 4001) {
        // If the user rejected the transaction
        setError('You have rejected the bridging transaction');
      } else {
        // Other types of errors
        setError('An error occurred while processing the bridging transaction. Please try again.');
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
          <LoadingButton loading={loading} onClick={selectedChain=='arbitrum' ? handleArbitrumDeposit : handleBaseDeposit} variant="contained" color="primary" disabled={!amount}>
            {loading ? 'Processing...' : 'Deposit'}
          </LoadingButton>
        </Stack>
      </Box>
    </Modal>
  );
};


function transformTokenInput(apiOutput) {
  return {
    ...apiOutput,
    swapData: {
      ...apiOutput.swapData,
      extCalldata: ethers.toUtf8Bytes(apiOutput.swapData.extCalldata) // Use zero bytes if empty
    }
  };
}

async function InteractCore(activeAccount){
  const signer = await ethers5Adapter.signer.toEthers({ client: client, chain: arbitrum, account: activeAccount });
  const vuzaControllerContract = new ethers.Contract(vuza_core_contract, vuzaControllerCore_ABI, signer);

  const tx = await vuzaControllerContract.getContractVPTTokenBalance();
  console.log('Transaction Hash:', tx);

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
      // var updated_amount = ethers.utils.parseUnits(amount, 18); // uint256 amount (converted to Wei)
      // console.log(updated_amount);

      // Connect to the VuzaControllerCore contract
      const signer = await ethers5Adapter.signer.toEthers({ client: client, chain: arbitrum, account: connectedWallet });
      const vuzaControllerContract = new ethers.Contract(vuza_core_contract, vuzaControllerCore_ABI, signer);


      const tx = await vuzaControllerContract.deposit(
        destination_vuza_address.toLowerCase(), // address destination_vuza_address
        toWei(amount), // uint256 amount (converted to Wei)
        ytTokenAddress.toLowerCase(),// address ytTokenAddress
        transformTokenInput(tokenInput),
        minPYout
      );
      console.log('Transaction Hash:', tx.wait());

      // // Wait for the transaction to be confirmed
      // const receipt = await tx.wait();
      // console.log('Transaction confirmed in block:', receipt);
      const wstethbalance = await vuzaControllerContract.getContractWstETHBalance();
      console.log("wstethbalance of contract")
      console.log(wstethbalance)



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
      console.log(amount);
      console.log(ethers.utils.parseUnits(amount, 18))
      console.log(toWei(amount))
      // var updated_amount = ethers.utils.parseUnits(amount, 18); // uint256 amount (converted to Wei)
      // console.log(updated_amount);

      // Connect to the VuzaControllerCore contract
      const signer = await ethers5Adapter.signer.toEthers({ client: client, chain: arbitrum, account: connectedWallet });
      const vuzaControllerContract = new ethers.Contract(vuza_core_contract, vuzaControllerCore_ABI, signer);

      const marketYTContract = new ethers.Contract(market_yt_token_address, marketyt_ABI, signer);
      const approvalYTx = await marketYTContract.approve(pendle_router_v4, ethers.utils.parseUnits(amount, 18));

      await new Promise(resolve => setTimeout(resolve, 30000));

      const tx = await vuzaControllerContract.swapUSDC(
        destination_vuza_address.toLowerCase(), // address destination_vuza_address
        ethers.utils.parseUnits(amount, 18), // uint256 amount (converted to Wei)
        marketAddress.toLowerCase(),             // address marketAddress
        tokenOutput,
        limitOrderData,
        market_yt_address.toLowerCase()
      );
      console.log('Swap Transaction Hash:', tx);

      // Wait for the transaction to be confirmed
      const receipt = await tx.wait();
      console.log('Swap Transaction confirmed in block:', receipt);
      // const event = receipt.events?.find(event => event.event === 'MintedPY');
      // console.log(event)

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

async function transferVPTTokens(recipient, amount,activeAccount) {
  try {
      // Convert amount to the correct number of decimals (assuming 18 decimals like ERC-20)
      const decimals = 18; // Typically 18 for ERC20 tokens
      const amountInWei = ethers.utils.parseUnits(amount.toString(), decimals);

      // Send transaction
      const signer = await ethers5Adapter.signer.toEthers({ client: client, chain: arbitrum, account: activeAccount });
      const vuzaPrincipalTokenContract = new ethers.Contract(vuza_principal_token_address, VPTToken_ABI, signer);
      const tx = await vuzaPrincipalTokenContract.transfer(recipient, amountInWei);
      
      console.log('Transaction submitted:', tx.hash);

      // Wait for transaction to be mined
      const receipt = await tx.wait();
      console.log('Transaction confirmed:', receipt);

  } catch (error) {
      console.error('Error transferring tokens:', error);
  }
}

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
      amountIn: ethers.utils.parseUnits(amount, 18)
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
  return ethers.utils.parseUnits(amount, MULTIPLYCOUNT).toString();
}
export default DepositModal;
