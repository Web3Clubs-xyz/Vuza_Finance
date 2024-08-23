// material-ui
import { Avatar, Box, Breadcrumbs, Button, Card, CardContent, CardHeader, Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LatestRecordsTable from 'ui-component/LatestRecordsTable';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { baseGet } from 'utils/apiClient';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { fDate } from 'utils/formatTime';

// // ==============================|| SAMPLE PAGE ||============================== //

const Institutions = ({}) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget); // Set anchorEl to current target
    setSelectedRow(row);
    // You can also store the current row in state if needed
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu by resetting anchorEl
  };

  const handleViewClick = (guid) => {
    navigate(`/institutions/${guid}/view`)
  }
  const handleEditClick = (guid) => {
    navigate(`/institutions/${guid}/edit`)
  }

  const columns = [
    { field: 'name', headerName: 'Institution Name', width: 250 },
    { field: 'country', headerName: 'Country', width: 100 }, 
    { field: 'payment_pointer', headerName: 'Payment Pointer', width: 350 },
    { field: 'contact_person_names', headerName: 'Contact Person ', width: 150 },
    // { field: 'contact_person_phone_number', headerName: 'Contact Phone', width: 150 },
    { field: 'created_at', headerName: 'Date Created', width: 150,valueFormatter: (params) => fDate(params) },
    { field: 'is_approved', headerName: 'Status', width: 150,renderCell: (params) => (
        params.value ? 'Approved' : 'Not Approved'
    ), },
    // { field: 'status', headerName: 'Status', width: 100},
    {
      field: 'actions',
      headerName: 'Actions',
      disableExport: true,
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton
            aria-controls="menu"
            aria-haspopup="true"
            onClick={(event) => handleMenuClick(event, params.row)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            sx={{width:'200px'}}
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem  onClick={() => handleViewClick(selectedRow?.guid)}>View</MenuItem>
            <MenuItem  onClick={() => handleEditClick(selectedRow?.guid)}>Edit</MenuItem>
          </Menu>
        </>
      ),
    }
  ];

  // const institution_guid = JSON.parse(localStorage.getItem('user')).institution.guid 
  useQuery(['all_organizations'], () => baseGet(`/v1/organizations/all`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setRows(data.data);
      setLoading(false)
    },
  });

  return (
    <>
    <Box sx={{ px: 2, pt: 5 }}>
      <Typography variant="h2">All Institutions ({rows.length})</Typography>
      <br/>
      <Grid item xs={12}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>

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
                  slotProps={{ toolbar: { csvOptions: { allColumns: true }, showQuickFilter: true } }}
                  autoHeight
                />
              </CardContent>
            </Card>
          </Grid>
    </Box>
   
    </>
  );
};
export default Institutions;
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
