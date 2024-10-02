import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ColumnPoolCard from 'ui-component/cards/ColumnPoolCard';
import PoolCard from 'ui-component/cards/PoolCard';
import axios from 'axios';
import { baseGet } from 'utils/apiClient';

const LenderDashboard = () => {
  const [value, setValue] = useState('1');
  const [poolData, setPoolData] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));


  
  // Fetch data when the component mounts
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://api-v2.pendle.finance/core/v1/42161/markets?order_by=name%3A1&skip=0&limit=10&sy=0x80c12D5b6Cc494632Bf11b03F09436c8B61Cc5Df&is_active=true');
  //       console.log(response.data)

  //       const market_custom_data = baseGet('/api/v1//market/data/:address')
        
  //       setPoolData(response.data.results); // Adjust according to the actual response structure
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect runs only once

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch markets data
        const response = await axios.get(
          'https://api-v2.pendle.finance/core/v1/42161/markets?order_by=name%3A1&skip=0&limit=10&sy=0x80c12D5b6Cc494632Bf11b03F09436c8B61Cc5Df&is_active=true'
        );
        

        // Fetch additional custom data for each market
        const markets = response.data.results;
        const marketsWithCustomData = await Promise.all(markets.map(async (market) => {
          const customDataResponse = await baseGet(`/v1/market/data/${market.address}`); // Replace with actual API URL and use market.address
          return { ...market, customData: customDataResponse.data[0] }; // Combine market data with custom data
        }));

        console.log(marketsWithCustomData)

        setPoolData(marketsWithCustomData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <Grid container spacing={3} sx={{ marginTop: '20px' }}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
          <Typography variant="h2">Markets</Typography>
          <Box>
            <IconButton onClick={() => toggleViewMode('grid')}>
              <ViewModuleIcon color={viewMode === 'grid' ? 'primary' : 'inherit'} />
            </IconButton>
            {/* <IconButton onClick={() => toggleViewMode('list')}>
              <ViewListIcon color={viewMode === 'list' ? 'primary' : 'inherit'} />
            </IconButton> */}
          </Box>
        </Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Supply Pool" value="1" />
              {/* Other tabs can be added here */}
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ paddingLeft: '0' }}>
            {viewMode === 'grid' || !isLargeScreen ? (
              <Grid container spacing={3}>
                {/* NOTES 
                TVL -> Total Value Locked
                Fixed Yield of Deposits -> Total value of YT locked
                
                */}
                {poolData.map((card) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={card.id}>
                    <PoolCard {...card} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid container spacing={3}>
                {poolData.map((card) => (
                  <Grid item xs={12} sm={6} md={6} lg={12} key={card.id}>
                    <ColumnPoolCard {...card} />
                  </Grid>
                ))}
              </Grid>
            )}
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  );
};

export default LenderDashboard;
