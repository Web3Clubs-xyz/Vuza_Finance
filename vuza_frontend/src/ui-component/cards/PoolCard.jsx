import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Button, LinearProgress, Stack } from '@mui/material';
import { styled } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton'; // Import LoadingButton
import { fNumber } from 'utils/formatNumber';

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
  action,
  is_active,
  guid,
  title,
  maturity,
  tvl,
  fixed_yield,
  remaining_days,
  underlying_yield,
  lending_yield,
  vuza_boost,
  progress_balance
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

   // Convert tvl and progress_balance to numbers for calculation
   const tvlValue = parseFloat(tvl.replace(/[^0-9.-]+/g, '')); // Remove non-numeric characters
   console.log(tvlValue)
   const progressValue = parseFloat(progress_balance.replace(/[^0-9.-]+/g, '')); // Remove non-numeric characters
   console.log(progressValue)
   
   // Calculate the progress percentage
   const progressPercentage = (tvlValue / progressValue) * 100;


  return (
    <Card sx={{ backgroundColor: '#DBFFF6' }}>
      <CardHeader
        action={<BlinkingLight active={is_active} />}
        title={title}
        titleTypographyProps={{ fontWeight: 800 }}
        subheader={`Maturity in  ${maturity}`}
      />

  
      <CardContent>
         {/* Progress Bar */}
        <Box sx={{ width: '100%', paddingY: '10px' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" color="secondary.dark" sx={{ marginBottom: '5px' }}>
          Deposited ({`${fNumber(progressPercentage)}%`})
          </Typography>

          <Typography variant="body2" color="secondary.dark" sx={{ marginBottom: '5px' }}>
            Target ({progress_balance})
          </Typography>
          </Stack>
        
          <LinearProgress variant="determinate" value={progressPercentage} sx={{
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
          }} />
        </Box>
        <Grid item xs={12} md={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: '10px' }}>
            <Typography variant="body2" sx={{ color: '#777', fontWeight: 300 }}>
              Remaining Days
            </Typography>
            <ValueTypography>{remaining_days}</ValueTypography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: '10px' }}>
            <Typography variant="body2" sx={{ color: '#777', fontWeight: 300 }}>
               TVL
            </Typography>
            <ValueTypography>{tvl}</ValueTypography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingBottom: '10px' }}>
            <Typography variant="body2" sx={{ color: '#777', fontWeight: 300 }}>
              {pool=='lender'? 'Fixed wstETH' : 'Fixed Yield of Deposits'}
            </Typography>
            <ValueTypography>{fixed_yield}</ValueTypography>
          </Stack>
        </Grid>

        <hr />

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>
              Underlying Yield
            </Typography>
            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: '20px' }}>
              {underlying_yield}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>
              Lending APR
            </Typography>
            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: '20px' }}>
              {lending_yield}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>
              <b>VUZA</b> Multiplier
            </Typography>
            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: '20px' }}>
              x{vuza_boost} 
            </Typography>
          </Grid>
        </Grid>

        {/* Floating button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px' }}>
          <LoadingButton
            variant="contained"
            color="primary"
            loading={false} // Set this to true if you want to show loading state
          >
            {action}
          </LoadingButton>
        </Box>
      </CardContent>
    </Card>
  );
}
