import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ethers } from 'ethers';
import { connect, disconnect } from 'starknetkit'

const Web3ConnectSection = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectEthereumWallet = async () => {
    if (window.ethereum) {
      try {
        const connectToStarknet = async () => {

          const connection = await connect({ 
       
              modalMode: "neverAsk", webWalletUrl: "https://web.argent.xyz" 
        
          }); 
       
          if(connection && connection.isConnected){
       
            setConnection(connection);
       
            setProvider(connection.account);
       
            setAddress(connection.selectedAddress);
       
          }
       
        };
       
        connectToStarknet();
      
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('No Ethereum wallet detected. Install MetaMask or any Web3 wallet extension.');
    }
  };
  const disconnectWallet = async() => {

    await disconnect();
 
    setConnection(undefined);
 
    setProvider(undefined);
 
    setAddress('');
 }


 const connectWallet = async() => {

  const connection = await connect({ 
  
      modalMode: "neverAsk", webWalletUrl: "https://web.argent.xyz" 
  
  });
  
   if(connection && connection.isConnected){
  
       setConnection(connection);
  
       setProvider(connection.account);
  
       setAddress(connection.selectedAddress);
  
   }
  
  }
  // const connectStarknetWallet = async (walletProvider) => {
  //   try {
  //     const starknet = walletProvider();
  //     await starknet.enable();
  //     const account = starknet.selectedAddress;
  //     const balance = await starknet.provider.getBalance(account);
  //     setAccount(account);
  //     setBalance(ethers.utils.formatEther(balance));
  //     setProvider(starknet);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <Box
      sx={{
        ml: 2,
        mr: 3,
        [theme.breakpoints.down('md')]: {
          mr: 2,
        },
      }}
    >
      <Button variant="contained" onClick={connectEthereumWallet}>
        {account ? `Connected: ${account}` : 'Connect Ethereum Wallet'}
      </Button>
      <Button variant="contained" onClick={() => connectStarknetWallet(getStarknet)}>
        {account ? `Connected: ${account}` : 'Connect Argent Wallet'}
      </Button>
      <Button variant="contained" onClick={() => connectStarknetWallet(getBraavos)}>
        {account ? `Connected: ${account}` : 'Connect Braavos Wallet'}
      </Button>
      {account && (
        <Box mt={2}>
          <div>Account: {account}</div>
          <div>Balance: {balance} ETH</div>
        </Box>
      )}
    </Box>
  );
};

export default Web3ConnectSection;
