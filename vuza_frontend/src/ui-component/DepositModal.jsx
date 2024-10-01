import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, Stack } from '@mui/material';
import { ethers } from 'ethers';
import { useActiveAccount, useWalletBalance } from 'thirdweb/react';
import { createThirdwebClient } from 'thirdweb';
import { callSDK } from 'helpers/helpers';
import { LoadingButton } from '@mui/lab';
import { Alert, CircularProgress } from '@mui/material';

const client = createThirdwebClient({ clientId: 'e825e01a1f70e447be2ca8b3361b7cb5' });

const DepositModal = ({ open, handleClose, ytToken, tokenIn }) => {
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
    tokenAddress: '0x5979D7b546E38E414F7E9822514be443A4800529'
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

  const handleDeposit = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess('');

      const destinationAddress = '0x24b0881D44Ddfd6eE63fc10682a99d7538Ec8202'; // Replace with your destination address
      const amountToTransfer = amount; // The amount of wstETH to transfer

      // Step 1: Transfer wstETH from the active account to the destination address
      try {
        const transferTx = {
          to: destinationAddress,
          value: ethers.parseUnits(amountToTransfer.toString(), 18), // Assuming 18 decimals
          gasLimit: 21000 // Adjust gas limit if needed
        };
        const txResponse = await activeAccount.sendTransaction(transferTx);
        console.log('Transfer transaction response:', txResponse);
        // await txResponse.wait(); // Wait for transaction confirmation
      } catch (transferError) {
        console.error('Transfer failed:', transferError);
        setError('Failed to transfer wstETH. Please try again.');
        return; // Exit early if the transfer fails
      }

      // Step 2: Mint tokens from the destination address using the mintPyFromToken function
      let mintResponse;
      try {
        console.log(ytToken)
        mintResponse = await mintPyFromToken(
          amount, // The same amount of tokens to mint
          ytToken,
          tokenIn,
          42161, // Assuming Arbitrum chain ID
          destinationAddress // Mint from the destination address
        );
        console.log('Mint response:', mintResponse);

        console.log('Amount PT & YT Out: ', mintResponse.data.amountOut);
        console.log('Price impact: ', mintResponse.data.priceImpact);
      } catch (mintError) {
        console.error('Minting failed:', mintError);
        setError('Failed to mint tokens. Please try again.');
        return; // Exit early if minting fails
      }

      // Step 3: Transfer vwstETH to the active account after successful minting
      // try {
      //   const vwstEthTransferTx = {
      //     to: activeAccount.address, // Send vwstETH to the active account
      //     value: ethers.utils.parseUnits(mintResponse.data.amountOut.toString(), 18), // Assuming minting returns this amount
      //     gasLimit: 21000 // Adjust gas limit if needed
      //   };
      //   const vwstEthTxResponse = await destinationAddress.sendTransaction(vwstEthTransferTx);
      //   console.log('vwstETH transfer transaction response:', vwstEthTxResponse);
      //   await vwstEthTxResponse.wait(); // Wait for transaction confirmation
      // } catch (vwstEthTransferError) {
      //   console.error('vwstETH transfer failed:', vwstEthTransferError);
      //   setError('Failed to transfer vwstETH to your account. Please try again.');
      //   return; // Exit early if the vwstETH transfer fails
      // }

      // If all steps succeed, show success message
      setSuccess('Transaction successful!');
      setTimeout(() => {
        handleClose();
      }, 2000);

    } catch (err) {
      // Handle generic errors such as user rejecting the transaction
      console.error('Transaction error:', err);

      if (err.code === 4001) {
        // If the user rejected the transaction
        setError('You have rejected the transaction.');
      } else {
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

// Implement the minting function
export async function mintPyFromToken(amountIn, ytToken, tokenIn, CHAIN_ID, receiver) {
  const res = await callSDK(`/v1/sdk/${CHAIN_ID}/mint`, {
    receiver: receiver,
    yt: ytToken,
    slippage: 0.01,
    tokenIn: tokenIn,
    amountIn: ethers.parseUnits(amountIn, 20).toString() // Convert to correct token decimals
  });
  console.log(res);
  return res;
}

export default DepositModal;
