import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Button, LinearProgress, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { fNumber, fPercent } from 'utils/formatNumber';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DepositModal from 'ui-component/DepositModal';
import ConnectWallet from 'ui-component/ConnectWallet';
import { useActiveAccount, useConnect, useWalletBalance } from 'thirdweb/react';
import { useChain } from 'contexts/ChainProvider';
import { createThirdwebClient } from 'thirdweb';

const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.2rem'
}));

const SubHeaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#777'
}));

const ValueTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.1rem'
}));

export default function PoolCard({
  pool,
  isActive,
  id,
  address,
  expiry,
  farmName,
  farmProIcon,
  liquidity,
  underlyingApy,
  impliedApy,
  yt,
  underlyingAsset,
  customData
}) {
  const BlinkingLight = styled(Box)(({ active }) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: active ? 'green' : 'red',
    animation: active ? 'blinking 1s infinite' : 'none',
    '@keyframes blinking': {
      '0%': { opacity: 1 },
      '50%': { opacity: 0 },
      '100%': { opacity: 1 }
    }
  }));

    // Convert the expiry date string to a Date object
  const expiryDate = new Date(expiry);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedExpiry = expiryDate.toLocaleDateString('en-US', options);

  // Calculate remaining days
  const currentDate = new Date();
  const remainingDays = Math.floor((expiryDate - currentDate) / (1000 * 60 * 60 * 24));
  const arbitrum_wsteth_token_address = '0x5979D7b546E38E414F7E9822514be443A4800529';
const base_wsteth_token_address ='0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452';

  const client = createThirdwebClient({ clientId: import.meta.env.VITE_APP_THIRDWEBCLIENTID });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const activeAccount = useActiveAccount();
  console.log("active account")
  console.log(activeAccount)
  const { selectedChain } = useChain();

  const { data: wstethData, } = useWalletBalance({
    chain: selectedChain == 'arbitrum' ?  42161 : 8453,
    address: activeAccount?.address,
    client: client,
    tokenAddress: selectedChain == 'arbitrum' ? arbitrum_wsteth_token_address : base_wsteth_token_address
  });


  return (
    <Card sx={{ backgroundColor: '#DBFFF6' }}>
   <CardHeader
        avatar={<BlinkingLight active={`${isActive}`} />}
        action={
          <IconButton aria-label="info">
            <InfoIcon />
          </IconButton>
        }
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <HeaderTypography>{farmName}</HeaderTypography>
            <Box component="img" src={farmProIcon} alt="farm icon" sx={{ width: 24, height: 24 }} />
          </Stack>
        }
        subheader={`Maturity: ${formattedExpiry}`}
      />

  
      <CardContent>
         {/* Progress Bar */}
        <Box sx={{ width: '100%', paddingY: '10px' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" color="secondary.dark" sx={{ marginBottom: '5px' }}>
          Total Liquidity ({`$${fNumber(liquidity.usd)}`})
          </Typography>

          {/* <Typography variant="body2" color="secondary.dark" sx={{ marginBottom: '5px' }}>
            Target ({progress_balance})
          </Typography> */}
          </Stack>
        
          {/* <LinearProgress variant="determinate" value={progressPercentage} sx={{
            height: 10,
            borderRadius: 5,
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#4caf50', // Change this to your desired color
            },
            '& .MuiLinearProgress-bar1Buffer': {
              backgroundColor: '#ff9800', // Change this to your desired color for buffer
            },
            '& .MuiLinearProgress-dashed': {
              borderColor: '#ff5722', // Change this to your desired color for dashed background
            },
          }} /> */}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: '10px' }}>
              <Typography variant="body2" sx={{ color: '#777', fontWeight: 300 }}>
                Remaining Days
              </Typography>
              <ValueTypography>{remainingDays}</ValueTypography>
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: '10px' }}>
              <Typography variant="body2" sx={{ color: '#777', fontWeight: 300 }}>
                TVL
              </Typography>
              <ValueTypography>{customData.tvl}</ValueTypography>
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: '10px' }}>
              <Typography variant="body2" sx={{ color: '#777', fontWeight: 300 }}>
                {pool === 'lender' ? 'Fixed wstETH' : 'Fixed Yield of Deposits'}
              </Typography>
              <ValueTypography>{customData.fyd}</ValueTypography>
            </Stack>
          </Grid>
          </Grid>
        {/* <Grid item xs={12} md={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: '10px' }}>
            <Typography variant="body2" sx={{ color: '#777', fontWeight: 300 }}>
              Remaining Days
            </Typography>
            <ValueTypography>{remainingDays}</ValueTypography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: '10px' }}>
            <Typography variant="body2" sx={{ color: '#777', fontWeight: 300 }}>
               TVL
            </Typography>
            <ValueTypography>{impliedApy}</ValueTypography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: '10px' }}>
            <Typography variant="body2" sx={{ color: '#777', fontWeight: 300 }}>
              {pool=='lender'? 'Fixed wstETH' : 'Fixed Yield of Deposits'}
            </Typography>
            <ValueTypography>{underlyingApy}</ValueTypography>
          </Stack>
        </Grid> */}

        <hr />

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>
              Underlying Yield
            </Typography>
            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: '20px' }}>
              {fPercent(underlyingApy*100)}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>
              Lending APR
            </Typography>
            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: '20px' }}>
              {fPercent(impliedApy*100)}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>
              <b>VUZA</b> Multiplier
            </Typography>
            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: '20px' }}>
              x14 
            </Typography>
          </Grid>
        </Grid>

        {/* Floating button */}
        {/* Connect Wallet or Deposit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px' }}>
          {activeAccount ?
           <>
           <Button onClick={handleOpen} variant="contained" color="primary">
             Deposit
           </Button>
           <DepositModal open={open} handleClose={handleClose} market_id={id} market_name={farmName} market_maturity={expiry} market_address={address} ytToken={yt.address} tokenIn={underlyingAsset.address} wstethData={wstethData} />
           </> : <ConnectWallet/>}
           
        
        </Box>
      </CardContent>
    </Card>
  );
}


// curl -X 'GET' \
//   'https://api-v2.pendle.finance/core/v1/sdk/42161/mint?receiver=0x24b0881D44Ddfd6eE63fc10682a99d7538Ec8202&slippage=1&enableAggregator=false&yt=0xC8D9369809e48d03FF7B69D7979b174e2D34874C&tokenIn=0x80c12D5b6Cc494632Bf11b03F09436c8B61Cc5Df&amountIn=10000000000000000' \
//   -H 'accept: application/json'