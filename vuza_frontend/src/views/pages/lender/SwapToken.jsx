// material-ui imports
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { createThirdwebClient } from 'thirdweb';
import { ethers5Adapter } from 'thirdweb/adapters/ethers5';
import { arbitrum } from 'thirdweb/chains';
import { useActiveAccount } from 'thirdweb/react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SWAP TOKEN PAGE ||============================== //

const client = createThirdwebClient({
  clientId: import.meta.env.VITE_APP_THIRDWEBCLIENTID, // Using environment variable for client ID
});

const SwapToken = () => {
  const activeAccount = useActiveAccount(); // Retrieve active account
  const [singleProvider, setProvider] = useState(null); // State to store provider

  useEffect(() => {
    const getProvider = async () => {
      if (activeAccount) {
        const providerInstance = await ethers5Adapter.provider.toEthers({
          client: client,
          chain: arbitrum, // Ensuring Arbitrum chain
          account: activeAccount, // Pass the active account
        });
        // console.log(providerInstance)

        setProvider(providerInstance); // Set provider after fetching it
      }
    };

    getProvider(); // Call async function inside useEffect
  }, [activeAccount]); // Re-run when activeAccount changes
  

console.log(singleProvider && "Hey")

useEffect(() => {
  window.Browser = {
  T: () => {}
  }
}, [singleProvider])


  return (
    <MainCard title= {singleProvider? "Swap Your Token to Arbitrum wstETH" : "Kindly connect your wallet to proceed"}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        sx={{ minHeight: '400px' }} // Ensure proper height for centering
      >
        {singleProvider && (
          // <SwapWidget tokenList={"https://ipfs.io/ipns/tokens.uniswap.org"}
          // />
          <iframe
          src="https://app.uniswap.org/#/swap?theme=light&chain=arbitrum&outputCurrency=0x5979D7b546E38E414F7E9822514be443A4800529"
          height="660px"
          width="100%"
          style={{border:"none"}}
        />
        )}
      </Box>
    </MainCard>
  );
};

export default SwapToken;
