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
    tokenAddress: '0x5979D7b546E38E414F7E9822514be443A4800529',
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
    // Call the minting function
    try {
      setLoading(true);
      setError('');
      setSuccess('');
    
      const res = await mintPyFromToken(amount, ytToken, tokenIn,42161,activeAccount?.address);
      console.log('Amount PT & YT Out: ', res.data.amountOut);
      console.log('Price impact: ', res.data.priceImpact);

      // Handle sending transaction
      
      // Handle sending transaction
      const txResponse = await activeAccount.sendTransaction(res.tx);
      console.log('Transaction response:', txResponse);

      // If successful, show success alert
      setSuccess('Transaction successful!');

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

// Implement the minting function
export async function mintPyFromToken(amountIn, ytToken, tokenIn,CHAIN_ID,receiver) {
  const res = await callSDK(`/v1/sdk/${CHAIN_ID}/mint`, {
    receiver: receiver,
    yt: ytToken,
    slippage: 0.01,
    tokenIn: tokenIn,
    amountIn: ethers.parseUnits(amountIn, 20).toString(), // Convert to correct token decimals
  });
  console.log(res)
  return res;
}

export default DepositModal;
