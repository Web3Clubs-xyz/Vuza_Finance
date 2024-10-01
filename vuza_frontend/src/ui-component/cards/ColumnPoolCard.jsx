import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Stack, Grid } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

export default function ColumnPoolCard({ title, description, loanTerm, interest, liquidity, repaidLoans, activeSaccos }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', padding: 2,backgroundColor: "#DBFFF6" }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Avatar sx={{ bgcolor: 'white' }} aria-label="logo">
          CF
        </Avatar>
        <Box sx={{ marginLeft: 4 }}>
          <Typography variant="h6" fontWeight={800} fontSize={20}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }} fontSize={14}>
            {description}
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ marginLeft: 4 }}>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="body2" color="text.secondary" fontWeight={300} lineHeight={3}>
              Loan Term
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={600}>
              {loanTerm}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="body2" color="text.secondary" fontWeight={300} lineHeight={3}>
              USDC Interest
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={600}>
              {interest}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="body2" color="text.secondary" fontWeight={300} lineHeight={3}>
              Liquidity
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={600}>
              {liquidity}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="body2" color="text.secondary" fontWeight={300} lineHeight={3}>
              Repaid Loans
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={600}>
              {repaidLoans}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="body2" color="text.secondary" fontWeight={300} lineHeight={3}>
              Active SACCOS
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={600}>
              {activeSaccos}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
