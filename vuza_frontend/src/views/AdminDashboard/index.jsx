import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, IconButton, Menu, MenuItem, Tab, useMediaQuery, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { LoadingButton, TabContext, TabList, TabPanel } from '@mui/lab';
import { useMutation, useQuery } from 'react-query';
import { baseGet, basePatch } from 'utils/apiClient';
import { Bounce, toast } from 'react-toastify';
import { fDate } from 'utils/formatTime';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { fCurrency } from 'utils/formatNumber';

const AdminDashboard = () => {
  const [value, setValue] = useState('1');
  const [isLoading, setLoading] = useState(true);
  const theme = useTheme();

  const [rejectedRows, setRejectedRows] = useState([]);
  const [approvedRows, setApprovedRows] = useState([]);
  const [pendingRows, setPendingRows] = useState([]);

  const [adminAnalytics,setAdminAnalytics] = useState([]);

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
    // navigate(`/institutions/${guid}/view`)
  }

  const loanApprovalAdmin = useMutation((data) => basePatch(`/v1/loans/admin_approve/${data.guid}/`, data.payload));

  const handleAdminApproval = (guid) => {
    console.log(guid);

    // Define the data you want to send in the POST request
    const payload = {
      // Add your payload properties here
   
    };

    toast.success("Loan is being disbursed Kindly be patient", {
      position: "top-right",
      autoClose: 59000,
      hideProgressBar: false,
      closeOnClick: true,
      // pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      onClose: () => {
      }
      });
    loanApprovalAdmin.mutate({ guid, payload }, {
      onSuccess: (response) => {
        // Handle success, e.g., show a success message or update the UI
        console.log('Approval successful:', response);
        toast.success(response.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          onClose: () => {
            location.reload()
          }
          });
      },
      onError: (error) => {
        // Handle error, e.g., show an error message
        console.error('Approval failed:', error);
        toast.success(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          onClose: () => {
          }
          });
      }
    });
  };

  const columns = [
    { field: 'borrower_name', headerName: 'Borrower', width: 180 },
    { field: 'loan_interest', headerName: 'Loan Interest', width: 150, valueFormatter: (params) => `${params}%` }, 
    { field: 'requested_amount', headerName: 'Requested Amount', width: 150,valueFormatter: (params) => fCurrency(params) },
    { field: 'repayment_amount', headerName: 'Repayment Amount', width: 170,valueFormatter: (params) => fCurrency(params) },
    { field: 'remaining_amount', headerName: 'Calculated Balance', width: 150,valueFormatter: (params) => fCurrency(params) },
    { field: 'request_date', headerName: 'Request Date ', width: 150 , valueFormatter: (params) => fDate(params)},
    { field: 'repayment_due_date', headerName: 'Repayment Date', width: 150, valueFormatter: (params) => fDate(params) },
    // { field: 'approval_date', headerName: 'Approval Date', width: 150, valueFormatter: (params) => fDate(params) },
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
            {selectedRow?.status == 'approved' ? null : <MenuItem  onClick={() => handleAdminApproval(selectedRow?.guid)}>Admin Approval</MenuItem>}
            
          </Menu>
        </>
      ),
    }
  ];

  useQuery(['rejected_loans'], () => baseGet(`/v1/loans/?status=rejected`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setRejectedRows(data.data);
      setLoading(false)
    },
  });

  useQuery(['approved_loans'], () => baseGet(`/v1/loans/?status=approved`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setApprovedRows(data.data);
      setLoading(false)
    },
  });

  useQuery(['pending_loans'], () => baseGet(`/v1/loans/?status=submitted`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setPendingRows(data.data);
      setLoading(false)
    },
  });

  useQuery(['admin_analytics'], () => baseGet(`/v1/admin/analytics`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setAdminAnalytics(data.data);
      setLoading(false)
    },
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3} sx={{ marginTop: '20px' }}>

      {/* Left section */}
      <Grid item xs={12} md={12} order={{ xs: 2, md: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total Borrowed
                </Typography>
                <Typography variant="h1" color="primary">
                  USD {fCurrency(adminAnalytics?.total_borrowed)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total Repayed
                </Typography>
                <Typography variant="h1" color="primary">
                USD {fCurrency(adminAnalytics?.total_repaid)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total on Dispatch Pool
                </Typography>
                <Typography variant="h1" color="primary">
                  USD {fCurrency(adminAnalytics?.total_dispatch_pool)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={3}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total on Repayment Pool
                </Typography>
                <Typography variant="h1" color="primary">
                  USD 0
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}

          {/* <Grid item xs={12} sm={3}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total Locked on Guarantor Pool 
                </Typography>
                <Typography variant="h1" color="primary">
                  USD 0
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
          {/* <Grid item xs={12} sm={3}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total Locked Yields  
                </Typography>
                <Typography variant="h1" color="primary">
                  USD 0
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}

          {/* <Grid item xs={12} sm={3}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total Locked on Lender Pool
                </Typography>
                <Typography variant="h1" color="primary">
                  USD 0
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total Borrowers
                </Typography>
                <Typography variant="h1" color="primary">
                  USD 0
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}
      

          <Grid item xs={12}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    All Loans
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                      <TabList onChange={handleChange} aria-label="loan status tabs">
                        <Tab label="Pending" value="1" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }} />
                        <Tab label="Approved" value="2" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }} />
                        <Tab label="Rejected" value="3" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }} />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <DataGrid
                        rows={pendingRows}
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
                    </TabPanel>
                    <TabPanel value="2">
                      <DataGrid
                        rows={approvedRows}
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
                    </TabPanel>
                    <TabPanel value="3">
                      <DataGrid
                        rows={rejectedRows}
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

                    </TabPanel>
                  </TabContext>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
