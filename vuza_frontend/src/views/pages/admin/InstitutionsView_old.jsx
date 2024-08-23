// material-ui
import { Avatar, Box, Breadcrumbs, Button, CardHeader, Grid, Stack, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useLocation, useParams } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LatestRecordsTable from 'ui-component/LatestRecordsTable';
import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';


// // ==============================|| SAMPLE PAGE ||============================== //

const InstitutionsView = ({}) => {
    const [isLoading, setLoading] = useState(false);
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const { pathname } = useLocation();
  
    const { guid = '' } = useParams();
  // const breadcrumbs = [
  //   <Link  key="1" href="/"  sx={{}}>
  //     Loans
  //   </Link>,
  //   <Typography key="3" sx={{fontWeight:"800",color:"secondary.dark"}}>
  //     Compound Finance Pool
  //   </Typography>
  // ];

  return (
    <>
    <TabContext value={value}>
      <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', borderRight: 0 }}>
          <TabList
            variant="scrollable"
            onChange={handleChange}
            aria-label="Tabs"
            orientation="vertical"
            sx={{ minWidth: 200 }}
          >
            <Tab
              label="SACCO information"
              value="1"
              sx={{
                color: 'secondary.dark',
                '&.Mui-selected': {
                  color: 'white',
                  backgroundColor: 'secondary.light'
                }
              }}
            />
            <Tab
              label="Vuza Report"
              value="2"
              sx={{
                color: 'secondary.dark',
                '&.Mui-selected': {
                  color: 'white',
                  backgroundColor: 'secondary.light'
                }
              }}
            />
          </TabList>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <TabPanel value="1">
            <MainCard title="">
              <Grid container spacing={9}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>SACCO Name</Typography>
                      <Typography>Ufanisi SACCO</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Email Address</Typography>
                      <Typography>info@ufanisi.com</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Phone Number</Typography>
                      <Typography>+254 715 804 742</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                
                <Grid item xs={12}>
                  <Typography variant='h4' sx={{marginTop:"10px"}}>Contact Person</Typography>
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Name</Typography>
                      <Typography>John Doe</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Email Address</Typography>
                      <Typography>john,doe@ufanisi.com</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Phone Number</Typography>
                      <Typography>+254 715 804 742</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Physical Address</Typography>
                      <Typography>John Doe</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Registration Date</Typography>
                      <Typography>4th July, 2012</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Registration Certificate</Typography>
                      <Typography>document</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Type of SACCO</Typography>
                      <Typography>Real estate</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Typography>Financial Statement - Last 3 Years</Typography>
                      <Typography>document</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </MainCard>
          </TabPanel>
          <TabPanel value="2" sx={{ width: '100%' }}>
            {/* EZA Report Content */}
          </TabPanel>
        </Box>
      </Box>
    </TabContext>

    </>
  );
};
export default InstitutionsView;
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
