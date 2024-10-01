// material-ui
import { Avatar, Box, Breadcrumbs, Button, Card, CardContent, CardHeader, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LatestRecordsTable from 'ui-component/LatestRecordsTable';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


// // ==============================|| SAMPLE PAGE ||============================== //

const LenderPoolView = ({}) => {
    const [isLoading, setLoading] = useState(false);
    const { guid = '' } = useParams();
    const user = JSON.parse(localStorage.getItem("user"))
      const breadcrumbs = [

        <Link  key="1" href="/"  sx={{}}>
          Pools
        </Link>,
        <Typography key="3" sx={{fontWeight:"800",color:"secondary.dark"}}>
          Lender Pool
        </Typography>
      ];

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Breadcrumbs sx={{paddingLeft:"10px",paddingBottom:"20px", paddingTop:"20px"}} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Grid container spacing={3} sx={{ marginTop: '20px' }}>
      {/* Right section - coming on top on small screens */}
      <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
        <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              My Stake
            </Typography>
            <Typography variant="h3" color="primary" gutterBottom>
              USD 10,000
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <LoadingButton variant="contained" color="primary" size="large" sx={{ color: "white" }}>
                Deposit
              </LoadingButton>
              <LoadingButton variant="contained" color="secondary" size="large" sx={{ color: "white" }}>
                Withdraw
              </LoadingButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Left section */}
      <Grid item xs={12} md={9} order={{ xs: 2, md: 1 }}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      APR
                    </Typography>
                    <Typography variant="body2">5.0%</Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      Yield
                    </Typography>
                    <Typography variant="body2">USD 1,200</Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      Deposited
                    </Typography>
                    <Typography variant="body2">USD 50,000</Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      TVL
                    </Typography>
                    <Typography variant="body2">USD 55,000</Typography>
                  </Grid>
                </Grid>
               
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Transactions
                  </Typography>
                </Box>
                <DataGrid
                  rows={[]}
                  columns={[]}
                  disableDensitySelector
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  slots={{ toolbar: GridToolbar }}
                  slotProps={{ toolbar: { csvOptions: { allColumns: true }, showQuickFilter: true } }}
                  autoHeight
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
      
    </>
  );
};
export default LenderPoolView;
// const PoolView = () => (
// const breadcrumbs = [
//     <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
//       MUI
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="inherit"
//       href="/material-ui/getting-started/installation/"
//       onClick={handleClick}
//     >
//       Core
//     </Link>,
//     <Typography key="3" color="text.primary">
//       Breadcrumb
//     </Typography>,
//   ];
//   <Stack spacing={2}>
//     <Breadcrumbs separator="›" aria-label="breadcrumb">
//       {breadcrumbs}
//     </Breadcrumbs>
//     <Breadcrumbs separator="-" aria-label="breadcrumb">
//       {breadcrumbs}
//     </Breadcrumbs>
//     <Breadcrumbs
//       separator={<NavigateNextIcon fontSize="small" />}
//       aria-label="breadcrumb"
//     >
//       {breadcrumbs}
//     </Breadcrumbs>
//   </Stack>
//   <MainCard title="Sample Card">
//     <Typography variant="body2">
//       Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
//       minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
//       in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
//       descent molls anim id est labours.
//     </Typography>
//   </MainCard>
// );

// export default PoolView;
