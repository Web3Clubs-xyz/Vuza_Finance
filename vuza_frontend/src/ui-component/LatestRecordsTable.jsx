import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
import { Button } from '@mui/material';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';


// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const LatestRecordsTable = ({ isLoading ,columns,rows,title}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/verification/new');
  };

  // const handleViewClick = (id) => {
  //   navigate('/verification/view')
  // }

  // const [value, setValue] = React.useState('today');
  // const theme = useTheme();

  // const { primary } = theme.palette.text;
  // const divider = theme.palette.divider;
  // const grey500 = theme.palette.grey[500];

  // const primary200 = theme.palette.primary[200];
  // const primaryDark = theme.palette.primary.dark;
  // const secondaryMain = theme.palette.secondary.main;
  // const secondaryLight = theme.palette.secondary.light;

  // React.useEffect(() => {
  //   const newChartData = {
  //     ...chartData.options,
  //     colors: [primary200, primaryDark, secondaryMain, secondaryLight],
  //     xaxis: {
  //       labels: {
  //         style: {
  //           colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
  //         }
  //       }
  //     },
  //     yaxis: {
  //       labels: {
  //         style: {
  //           colors: [primary]
  //         }
  //       }
  //     },
  //     grid: { borderColor: divider },
  //     tooltip: { theme: 'light' },
  //     legend: { labels: { colors: grey500 } }
  //   };

  //   // do not load chart when loading
  //   if (!isLoading) {
  //     ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
  //   }
  // }, [primary200, primaryDark, secondaryMain, secondaryLight, primary, divider, isLoading, grey500]);
  
  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard title={title || ""}>
          <Grid container spacing={gridSpacing}>
            <Grid
              item
              xs={12}
              sx={{
                '& .apexcharts-menu.apexcharts-menu-open': {
                  bgcolor: 'background.paper'
                }
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                disableDensitySelector
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                slots={{ toolbar: GridToolbar }}
                slotProps={{ toolbar: { csvOptions: { allColumns: true },showQuickFilter: true, } }}
              />
              {/* <Chart {...chartData} /> */}
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

LatestRecordsTable.propTypes = {
  isLoading: PropTypes.bool,
  columns: PropTypes.array,
  rows: PropTypes.array
};

export default LatestRecordsTable;
