// material-ui
import { Avatar, Breadcrumbs, Button, CardHeader, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LatestRecordsTable from 'ui-component/LatestRecordsTable';
import { useState } from 'react';


// // ==============================|| SAMPLE PAGE ||============================== //

const LoansView = ({}) => {
    const [isLoading, setLoading] = useState(false);
  const breadcrumbs = [
    <Link  key="1" href="/"  sx={{}}>
      Loans
    </Link>,
    <Typography key="3" sx={{fontWeight:"800",color:"secondary.dark"}}>
      Compound Finance Pool
    </Typography>
  ];

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Breadcrumbs sx={{paddingLeft:"10px",paddingBottom:"20px", paddingTop:"20px"}} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <div>
        <Button
              variant="contained"
              sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: 'secondary.main' } }}
          >
          Loan repayment
        </Button>
        <Button
              variant="contained"
              sx={{ backgroundColor: 'secondary.dark', color: '#fff',marginLeft:"20px", '&:hover': { backgroundColor: 'secondary.main' } }}
          >
          + Create Invoice
        </Button>
        </div>
       
      </Stack>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={8}>
            <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <MainCard title="Loan Details">
                    {/* <Typography variant="body2">
                    Financial Overview
                    </Typography> */}
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={3}>
                            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>Outstanding Principal</Typography>
                            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: "20px" }}>$ 1.2M</Typography>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>Interest Amount</Typography>
                            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: "20px" }}>$ 50.0M</Typography>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>Repayments</Typography>
                            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: "20px" }}>5</Typography>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>USDC Interest</Typography>
                            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: "20px" }}>2.3%</Typography>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Typography variant="body2" color="secondary.dark" sx={{ lineHeight: 3, fontWeight: 300 }}>Loan Status</Typography>
                            <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600, fontSize: "20px" }}>Approved</Typography>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12}>
                {/* <MainCard title="Loans Granted Distrxibution"> */}
                 <LatestRecordsTable isLoading={isLoading} columns={[]} rows={[]}  title="Loan Payments"/>
                {/* </MainCard> */}
            </Grid>

            {/* <Grid item lg={12} md={12} sm={12} xs={12}>
                <MainCard title="Repayments">
                </MainCard>
            </Grid> */}

            </Grid>
        </Grid>
        <Grid item xs={4}>
            <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <MainCard title="Portfolio Details">
                   

                    <Stack direction="row" alignItems="center" spacing={2} sx={{paddingBottom:"20px"}}>
                        <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label="logo">
                            CF
                        </Avatar>
                        <Typography variant="body2" sx={{fontWeight:800}}>
                            Compound Finance Pool
                    </Typography>
                    </Stack>
               
                    <Typography variant="body2">
                    At Vuza Finance, we bridge the gap between DAOs and  SACCOS, facilitating the lending of USDC to regulated  SACCOS. By connecting these entities, we strive to provide affordable loans to small and informal businesses, fostering economic growth. 

                    At Vuza Finance, we bridge the gap between DAOs and  SACCOS, facilitating the lending of USDC to regulated  SACCOS. By connecting these entities, we strive to provide affordable loans to small and informal businesses, fostering economic growth. 
                    </Typography>
                </MainCard>
            </Grid>

            {/* <Grid item lg={12} md={12} sm={12} xs={12}>
                <MainCard title="Financial Overview">
                </MainCard>
            </Grid> */}
    

            </Grid>
        </Grid>
      </Grid>
      
    </>
  );
};
export default LoansView;
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
