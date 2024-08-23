import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';

import { gridSpacing } from 'store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import PoolCard from 'ui-component/cards/PoolCard';
import { Box, Button, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ColumnPoolCard from 'ui-component/cards/ColumnPoolCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    setLoading(false);
  }, []);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'grid' ? 'list' : 'grid'));
  };


  const poolCards = [
    { guid: 1, title: 'Vuza Finance Pool', interest: '4.56%', liquidity: '$4.5M', repaidLoans: '$2.6M', activeSaccos: 10, loanTerm:"Open Ended" },
    { guid: 2, title: 'Aave Pool', interest: '5.25%', liquidity: '$3.2M', repaidLoans: '$1.8M', activeSaccos: 7, loanTerm:"Open Ended" },
    // { guid: 3, title: 'Aave Pool', interest: '5.25%', liquidity: '$3.2M', repaidLoans: '$1.8M', activeSaccos: 7 , loanTerm:"Open Ended"},
    // { guid: 4, title: 'Aave Pool', interest: '5.25%', liquidity: '$3.2M', repaidLoans: '$1.8M', activeSaccos: 7, loanTerm:"Open Ended" },
    // { guid: 5, title: 'Aave Pool', interest: '5.25%', liquidity: '$3.2M', repaidLoans: '$1.8M', activeSaccos: 7 , loanTerm:"Open Ended"},
    // { guid: 6, title: 'Aave Pool', interest: '5.25%', liquidity: '$3.2M', repaidLoans: '$1.8M', activeSaccos: 7, loanTerm:"Open Ended" }
    // Add more pool card data as needed
  ];

  return (
    <Grid container spacing={gridSpacing} sx={{ marginTop: '10px' }}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} title="Total Number of pools" value="524" />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} title="Active Loans" value="132" />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} title="Repaid Loans" value="$ 85.9M" />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} title="Active SACCOS" value="450" />
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} title="Value of Loans Dibursed" value="$ 30M" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} x={{ width: '100%' }}>
        <Grid container x={{ width: '100%' }}>
          <Grid item sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
              <Typography variant="h2" sx={{ paddingBottom: '20px' }}>
                Pools
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
                    label="All"
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
                    label="Open"
                    value="2"
                    sx={{
                      color: 'secondary.dark',
                      '&.Mui-selected': {
                        color: 'white',
                        backgroundColor: 'secondary.dark'
                      }
                    }}
                  />
                  <Tab
                    label="Closed"
                    value="3"
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
              <TabPanel value="1" sx={{ width: '100%' }}>
                {viewMode === 'grid' || !isLargeScreen  ? (
                  <>
                    <Grid container spacing={3}>
                      {poolCards.map((card) => (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={card.id}>
                          <PoolCard {...card} />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                ) : (
                  <>
                  <Grid container spacing={3}>
                      {poolCards.map((card) => (
                        <Grid item xs={12} sm={6} md={6} lg={12} key={card.id}>
                          <ColumnPoolCard {...card} />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </TabPanel>
              <TabPanel value="2" sx={{ width: '100%' }}></TabPanel>
              <TabPanel value="3" sx={{ width: '100%' }}></TabPanel>
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
    </Grid>
  );
};

export default Dashboard;
