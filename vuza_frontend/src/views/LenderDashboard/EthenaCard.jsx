import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const BlinkingLight = styled(Box)(({ active }) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: active ? 'green' : 'red',
  animation: active ? 'blinking 1s infinite' : 'none',
  '@keyframes blinking': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

const EthenaCard = ({ active }) => {
  return (
    <Card sx={{ margin: '1rem', position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
        <BlinkingLight active={false} />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div">
          sUSDe
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Ethena
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Maturity
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Liquidity
            </Typography>
            <Typography variant="body2" color="text.secondary">
              YT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              sUSDe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              26 Sep 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $82,632,238
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Long Yield APY
            </Typography>
            <Typography variant="body2" color="text.secondary">
              -89%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $0.02
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              PT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Fixed APY
            </Typography>
            <Typography variant="body2" color="text.secondary">
              16.18%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $0.97
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EthenaCard;
