import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import EthenaCard from './EthenaCard';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ColumnPoolCard from 'ui-component/cards/ColumnPoolCard';
import PoolCard from 'ui-component/cards/PoolCard';

const LenderDashboard = () => {
  const [value, setValue] = useState('1');
  const [isLoading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const poolCards = [
    { guid: 1,pool:'guarantor',action:'Deposit', is_active:"true",title: 'July 2024 - January 2025', maturity:'6 months' ,tvl: '$50M', remaining_days: '180 days',fixed_yield:'$1.25M', underlying_yield: '3%', lending_yield: '11.2%', vuza_boost:"36",progress_balance:"$60M" },
    { guid: 2,pool:'guarantor', action:'Deposit',is_active:"true",title: 'October 2024 - October 2025', maturity:'12 months' ,tvl: '$70M', remaining_days: '360 days', fixed_yield:'$1M',underlying_yield: '3%', lending_yield: '11.2%', vuza_boost:"72",progress_balance:"$100M" },
  ];

  const lenderCards = [
    { guid: 4,pool:'lender',action:'Fix', is_active:"true",title: 'July 2024 - January 2025', maturity:'6 months' ,tvl: '$1.25M', remaining_days: '180 days', fixed_yield:'$41,666,666.67M',underlying_yield: '3%', lending_yield: '1.4%', vuza_boost:"12",progress_balance:"$1.5M" },
    { guid: 3,pool:'lender',action:'Fix', is_active:"true",title: 'October 2024 - October 2025', maturity:'12 months' ,tvl: '$1M', remaining_days: '360 days',fixed_yield:'$33,333,333.33M', underlying_yield: '3%', lending_yield: '1.4%', vuza_boost:"24",progress_balance:"$2.1M" },
  ];

  return (
    <Grid container spacing={3} sx={{ marginTop: '20px' }}>
      {/* Right section - coming on top on small screens */}
      {/* <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
        <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              My Total Earnings
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              USD 100,000
            </Typography>
            <br/>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Guarantor Pool
            </Typography>
            <Typography variant="h4" color="secondary" gutterBottom>
              USD 100,000
            </Typography>
            <br/>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Lender Pool
            </Typography>
            <Typography variant="h4" color="secondary" gutterBottom>
              USD 100,000
            </Typography>
          </CardContent>
        </Card>
      </Grid> */}

      {/* Left section */}
      <Grid item xs={12} md={12} order={{ xs: 2, md: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Supply Pools TVL
                </Typography>
                <Typography variant="h2" color="primary">
                  USD 120,000,000
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Lending Pools TVL
                </Typography>
                <Typography variant="h2" color="primary">
                  USD 2,250,000
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} x={{ width: '100%' }}>
        <Grid container x={{ width: '100%' }}>
          <Grid item sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
              <Typography variant="h2" sx={{ paddingBottom: '20px' }}>
                Markets
              </Typography>
              <Box>
                <IconButton onClick={() => toggleViewMode('grid')}>
                  <ViewModuleIcon color={viewMode === 'grid' ? 'primary' : 'inherit'} />
                </IconButton>
                <IconButton onClick={() => toggleViewMode('list')}>
                  <ViewListIcon color={viewMode === 'list' ? 'primary' : 'inherit'} />
                </IconButton>
              </Box>
            </Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                <TabList onChange={handleChange} aria-label="Tabs" indicatorColor="secondary.dark">
                  <Tab
                    label={
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 'bold', display: 'block' }}
                        >
                          Supply Pool 
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ display: 'block',color:'white',textTransform: 'none' }}
                        >
                          Deposit wstETH & Lend future yield now
                        </Typography>
                      </Box>
                    }
                    
                    value="1"
                    sx={{
                      color: 'secondary.dark',
                      '&.Mui-selected': {
                        color: 'white',
                        backgroundColor: 'secondary.dark'
                      }
                    }}
                  />
                  <Tab
                    label={
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 'bold', display: 'block' }}
                      >
                        Lending Pool
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ display: 'block',color:'white',textTransform: 'none' }}
                      >
                        Buy & Fix Future Yield against deposited wstETH
                      </Typography>
                    </Box>
                    }
                    value="2"
                    sx={{
                      color: 'secondary.dark',
                      '&.Mui-selected': {
                        color: 'white',
                        backgroundColor: 'secondary.dark'
                      }
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ width: '100%',paddingLeft:'0' }}>
                {viewMode === 'grid' || !isLargeScreen  ? (
                  <>
                    <Grid container spacing={3} key={1}>
                      {poolCards.map((card) => (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={card.guid}>
                          <PoolCard {...card} />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                ) : (
                  <>
                  <Grid container spacing={3}>
                      {poolCards.map((card) => (
                        <Grid item xs={12} sm={6} md={6} lg={12} key={card.guid}>
                          <ColumnPoolCard {...card} />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </TabPanel>
              <TabPanel value="2" sx={{ width: '100%',paddingLeft:'0' }}>
                {viewMode === 'grid' || !isLargeScreen  ? (
                    <>
                      <Grid container spacing={3}>
                        {lenderCards.map((card) => (
                          <Grid item xs={12} sm={6} md={6} lg={4} key={card.guid}>
                            <PoolCard {...card} />
                          </Grid>
                        ))}
                      </Grid>
                    </>
                  ) : (
                    <>
                    <Grid container spacing={3}>
                        {lenderCards.map((card) => (
                          <Grid item xs={12} sm={6} md={6} lg={12} key={card.guid}>
                            <ColumnPoolCard {...card} />
                          </Grid>
                        ))}
                      </Grid>
                    </>
                  )}
              
              </TabPanel>
            </TabContext>
            {/* <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>

        <Stack direction="row" alignItems="center" spacing={3}>
          <PoolCard/>
          <PoolCard/>
          <PoolCard/>
          <PoolCard/>
        </Stack> */}
          </Grid>

          {/* <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid> */}
        </Grid>
      </Grid>
          
          {/* <Grid item xs={12}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Guarantor Pool
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
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
                <Box sx={{ textAlign: 'right', mt: 2 }}>
                  <Link to={`/pool/${1}/guarantor`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="primary">
                      View
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Lender Pool
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
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
                <Box sx={{ textAlign: 'right', mt: 2 }}>
                  <Link to={`/pool/${1}/lender`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="primary">
                      View
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LenderDashboard;
