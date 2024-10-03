import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, Stack } from '@mui/material';
import { ethers } from 'ethers';
import { useActiveAccount, useWalletBalance } from 'thirdweb/react';
import { createThirdwebClient } from 'thirdweb';
import { callSDK, getSigner } from 'helpers/helpers';
import { LoadingButton } from '@mui/lab';
import { Alert, CircularProgress } from '@mui/material';
import { basePost } from 'utils/apiClient';
import { useMutation } from 'react-query';
import vwstETH_ABI from 'helpers/abi/vwsteth.json';

const client = createThirdwebClient({ clientId: process.env.THIRDWEBCLIENTID });

const vuza_vwstETH_address = '0x74d7D65fBE5027375041Ee2360Fd18c0feB74570'
const destination_address = '0x24b0881D44Ddfd6eE63fc10682a99d7538Ec8202'
const circle_usdc_address = '0xaf88d065e77c8cC2239327C5EDb3A432268e5831'
const arbitrum_wsteth_address = '0x5979D7b546E38E414F7E9822514be443A4800529'
// const circle_destination_address = 

const DepositModal = ({ open, handleClose, market_id,market_name,market_maturity,market_address,ytToken,tokenIn }) => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const activeAccount = useActiveAccount();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');



  const { data } = useWalletBalance({
    chain: 42161,
    address: activeAccount?.address,
    client: client,
    tokenAddress: arbitrum_wsteth_address,
  });

  useEffect(() => {
    const fetchBalance = async () => {
      if (data?.displayValue) {
        try {
          const numericValue = typeof data.displayValue === 'string' ? parseFloat(data.displayValue) : data.displayValue;
          setBalance(!isNaN(numericValue) ? numericValue.toFixed(6) : 'N/A');
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
  }, [data]);

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    if (Number(inputValue) <= balance) {
      setAmount(inputValue);
    }
  };

  const supplierDepositsMutation = useMutation((data) => basePost('/v1/supplier/deposit/', data), {
    onSuccess: (data) => {
      console.log('Deposit successful:', data);
      return true
    },
    onError: (error) => {
      console.error('Error calling supplier deposit mutation:', error);
      return false
    },
  });


  
  const handleDeposit = async () => {
    // DEPOSIT PROCESS:
    // @dev If you need to convert to readable format Ethers
    // @dev const PT_YT_OUT = ethers.formatUnits(pt_yt_out_value, 20);
    try {
      setLoading(true);
      setError('');
      setSuccess('');
    
      console.log("DEPOSITER INITIAL AMOUNT",amount)


      //  1. Send wstETH
      const wstETHReceipt = await sendWstETH(destination_address, amount, activeAccount);
      console.log('wstETH transaction receipt:', wstETHReceipt);

      // 2. Mint PT and YT Tokens
      const pt_yt_out_value = await mintPyFromToken(amount, ytToken, tokenIn,42161,destination_address);
      console.log("TO SAVE PT YT",pt_yt_out_value,PT_YT_OUT)

      // 3. Transfer vwstETH to the active account
      const vwstETHReceipt = await transferVwstETH(pt_yt_out_value, activeAccount?.address);
      console.log('vwstETH transfer receipt:', vwstETHReceipt);

      // 4. Call Supplier Deposit Mutation API
      const apiResponse = await supplierDepositsMutation.mutateAsync({
        market_id:market_id,
        market_address:market_address,
        market_name:market_name,
        market_maturity:market_maturity,
        supplier_wallet: activeAccount?.address,
        pt_minted: pt_yt_out_value,
        yt_minted: pt_yt_out_value,
        wsteth_deposited: amount,
        vwsteth_minted: pt_yt_out_value});
      console.log('API Response:', apiResponse);

      // 5. Sell YT on Pendle 
      const pendleResponse = await sellYTOnPendle(
        pt_yt_out_value,
        destination_address,
        ytToken,
        42161,
        market_address
      );
      console.log('Pendle transaction receipt:', pendleResponse);

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
          boxShadow: 24,
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
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Stack direction="row" justifyContent="space-between">
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <LoadingButton loading={loading} onClick={handleDeposit} variant="contained"  color="primary" disabled={!amount}>
            {loading ? 'Processing...' : 'Deposit'}
          </LoadingButton>
        </Stack>
      </Box>
    </Modal>
  );
};

async function test1(){
  throw new Error('1) Failed to sell YT on Pendle.');
}

async function test2(){
  throw new Error('2) Failed to sell YT on Pendle.');
}

async function test3(){
  throw new Error('3) Failed to sell YT on Pendle.');
}


// Implement the minting function 0.0000001
async function sendWstETH(destinationAddress, amount, activeAccount) {
  try {
    var inputAmount = await getMultiplyCount(amount);
    const tx = await activeAccount.sendTransaction({
      to: destinationAddress,
      value: inputAmount, // Use appropriate decimals
    });
    return tx;
  } catch (error) {
    console.error('Error sending wstETH:', error);
    throw new Error('Failed to send wstETH.');
  }
}

async function mintPyFromToken(amountIn, ytToken, tokenIn,CHAIN_ID,receiver) {
  try {
    // Call the SDK to get the transaction details
    var inputAmount = await getMultiplyCount(amount);
    const res = await callSDK(`/v1/sdk/${CHAIN_ID}/mint`, {
        receiver: receiver,
        yt: ytToken,
        slippage: 0.01,
        tokenIn: tokenIn,
        amountIn: inputAmount, // Convert to correct token decimals
    });
    console.log('Amount PT & YT Out: ', res.data.amountOut);
    console.log('Price impact: ', res.data.priceImpact);

    console.log(res.tx)

    // Send the transaction
    const signer = await getSigner();
    const txResponse = await signer.sendTransaction(res.tx);
    console.log('Minting transaction response:', txResponse);

    await txResponse.wait();

    return res.data.amountOut;
} catch (error) {
    // Capture the error and log relevant details
    console.error('Minting transaction error:', error);
    console.error('Transaction failed:', error.message);
    // You can return the error or rethrow it for further handling
    throw new Error('Minting transaction failed');
}
}

async function transferVwstETH(vwstETHAmount, activeAccount) {
  try {
    const signer = await getSigner();
    var inputAmount = await getMultiplyCount(vwstETHAmount);
    const vwstETHContract = new ethers.Contract(vuza_vwstETH_address, vwstETH_ABI, signer);
    console.log(vwstETHContract)
    
    try {
      // Send the transfer transaction
      const txResponse = await vwstETHContract.transfer(activeAccount, inputAmount, {
          gasLimit: 10000000, // You can also specify a custom gas limit here
      });

      console.log("Transaction Hash: ", txResponse);

      // Wait for transaction confirmation
      const receipt = await txResponse.wait();
      console.log("Transaction confirmed in block: ", receipt);
      
      return receipt; // Return the transaction receipt if needed
  } catch (error) {
      console.error("Transaction error: ", error);
      throw error; // Throw error to handle it later if necessary
  }
  } catch (error) {
    console.error('Error transferring vwstETH:', error);
    throw new Error('Failed to transfer vwstETH.');
  }
}
 
async function sellYTOnPendle(ytAmount,RECEIVER_ADDRESS,YT_ADDRESS,CHAIN_ID, MARKET_ADDRESS) {
  try {
    // Swap 1 YT to usdc in wstETH market with 1% slippage
    const res = await callSDK(`/v1/sdk/${CHAIN_ID}/markets/${MARKET_ADDRESS}/swap`, {
          receiver: RECEIVER_ADDRESS,
          slippage: 0.01,
          tokenIn: YT_ADDRESS,
          tokenOut: circle_usdc_address,
          enableAggregator:true,
          amountIn:ytAmount
      });
      console.log(res)

  // Send tx
    const signer = await getSigner();
    const txResponse = await signer.sendTransaction(res.tx);
    console.log('Swapping transaction response:', txResponse);

    await txResponse.wait();

    return true
  } catch (error) {
    console.error('Error selling YT on Pendle:', error);
    throw new Error('Failed to sell YT on Pendle.');
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
  return ethers.parseUnits(amount, MULTIPLYCOUNT).toString();
}
export default DepositModal;
