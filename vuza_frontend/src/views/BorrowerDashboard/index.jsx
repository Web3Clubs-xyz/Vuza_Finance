import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, FormControl, IconButton, InputLabel, Menu, MenuItem, Modal, Select, Tab, TextField, useMediaQuery, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { LoadingButton, TabContext, TabList, TabPanel } from '@mui/lab';
import { AddCircleOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { baseGet, basePatch, basePost } from 'utils/apiClient';
import { useMutation, useQuery } from 'react-query';
import { Bounce, toast } from 'react-toastify';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { fDate } from 'utils/formatTime';
import { fCurrency } from 'utils/formatNumber';
// import WithdrawModal from 'ui-component/withdrawModal';

const BorrowerDashboard = () => {
  const [value, setValue] = useState('1');
  const [isLoading, setLoading] = useState(false);
  const [isRepayLoading, setRepayLoading] = useState(false);
  const theme = useTheme();

  const user = JSON.parse(localStorage.getItem('user'))

  const [approvedRows, setApprovedRows] = useState([]);
  const [pendingRows, setPendingRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const [orgSetting, setOrgSetting] = useState({});

  const [analytics,setAnalytics] = useState([]);

  const walletWithdrawal= useMutation((data) => basePost(`/v1/wallet_withdraw/${user.organization_id}`, data));
  const loanRepayment= useMutation((data) => basePatch(`/v1/loans/repayment/${selectedRow.id}/`, data));


  const [modalOpen, setModalOpen] = useState(false);

  const handleWithdrawClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const [modalRepayOpen, setRepayModalOpen] = useState(false);

  const handleRepayClick = () => {
    setRepayModalOpen(true);
  };

  const handleRepayModalClose = () => {
    setRepayModalOpen(false);
  };



  const handleWithdrawSubmit = (data) => {
    console.log('Withdraw data:', data);
    // Handle the withdraw data (e.g., send to server)
    setLoading(true)
    walletWithdrawal.mutate(data , {
      onSuccess: (response) => {
        // Handle success, e.g., show a success message or update the UI
        console.log('Dispatchment successful:', response);
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
            // setSubmitting(false);
            // navigate('/login');
            setLoading(false)
            location.reload()
          }
          });
      },
      onError: (error) => {
        // Handle error, e.g., show an error message
        console.error('Dispatchment failed:', error);
        toast.error(error.message, {
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
            // setSubmitting(false);
            // navigate('/login');
            setLoading(false)
            location.reload()
            
          }
          });
      }
    });
  };


  const handleRepaySubmit = (data) => {
    console.log('Repay data:', data);
    data.borrower_name = user.organization_name;
    // Handle the withdraw data (e.g., send to server)
    setRepayLoading(true)
    toast.success("Loan is being repayd Kindly be patient", {
      position: "top-right",
      autoClose: 59000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      onClose: () => {
        // setSubmitting(false);
        setRepayLoading(false)
      }
    });
    loanRepayment.mutate(data , {
      onSuccess: (response) => {
        // Handle success, e.g., show a success message or update the UI
        console.log('Dispatchment successful:', response);
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
            // setSubmitting(false);
            // navigate('/login');
            setRepayLoading(false)
            location.reload()
          }
          });
      },
      onError: (error) => {
        // Handle error, e.g., show an error message
        console.error('Dispatchment failed:', error);
        toast.error(error.message, {
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
            // setSubmitting(false);
            // navigate('/login');
            setRepayLoading(false)
            location.reload()
            
          }
          });
      }
    });
  };

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
  const handleEditClick = (guid) => {
    // navigate(`/institutions/${guid}/edit`)
  }


  // const handleRepaymentSubmit = () => {
  //   let guid = selectedRow.guid
  //   setShowAmountModal(false);

  //   // Define the data you want to send in the POST request
  //   const payload = {
  //     // Add your payload properties here
  //     repayment_amount:repayedamount
  //   };
    

  //   toast.success("Loan is being repayd Kindly be patient", {
  //     position: "top-right",
  //     autoClose: 59000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     transition: Bounce,
  //     onClose: () => {
  //       // setSubmitting(false);
  //     }
  //     });
  //     loanRepayment.mutate({ guid, payload }, {
  //     onSuccess: (response) => {
  //       // Handle success, e.g., show a success message or update the UI
  //       console.log('Approval successful:', response);
  //       toast.success(response.message, {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //         onClose: () => {
  //           // setSubmitting(false);
  //           // navigate('/login');
  //           location.reload()
  //         }
  //         });
  //     },
  //     onError: (error) => {
  //       // Handle error, e.g., show an error message
  //       console.error('Approval failed:', error);
  //       toast.success(error.message, {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //         onClose: () => {
  //           // setSubmitting(false);
  //           // navigate('/login');
  //         }
  //         });
  //     }
  //   });
  // };


  const columns = [
    { field: 'reference', headerName: 'Reference', width: 150 },
    { field: 'requested_amount', headerName: 'Requested Amount', width: 150 ,valueFormatter: (params) => fCurrency(params) },
    { field: 'loan_interest', headerName: 'Loan Interest', width: 120,valueFormatter: (params) => `${params}%` },
    { field: 'repayment_amount', headerName: 'Repayment Amount', width: 150,valueFormatter: (params) => fCurrency(params)  },
    { field: 'repayment_due_date', headerName: 'Due Date', width: 120, valueFormatter: (params) => fDate(params) },
    { field: 'remaining_amount', headerName: 'Balance', width: 100,valueFormatter: (params) => fCurrency(params) },
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
            {(selectedRow?.status === 'approved' || selectedRow?.status === 'Partial') && (
              <MenuItem onClick={() => handleRepayClick(true)}>
                Repay Loan
              </MenuItem>
            )}
            {/* {selectedRow?.status != 'approved' ? null  : || selectedRow?.status == 'Partial'  ? selectedRow?.remaining_amount == 0 <MenuItem  onClick={() => {handleRepayClick(true)}}>Repay Loan</MenuItem> } */}
            
          </Menu>
        </>
      ),
    }
  ];

  useQuery(['borrower_settings'], () => baseGet(`/v1/organization_settings/by_org/${user.organization_id}`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setOrgSetting(data.data);
      setLoading(false)
    },
  });

  useQuery(['borrower_analytics'], () => baseGet(`/v1/organization/analytics/by_org/${user.organization_id}`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      console.log(data.data)
      setAnalytics(data.data);
      setLoading(false)
    },
  });

  useQuery(['borrower_approved_loans'], () => baseGet(`/v1/loans/by_org/${user.organization_id}?status=approved`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setApprovedRows(data.data);
      setLoading(false)
    },
  });

  useQuery(['borrower_pending_loans'], () => baseGet(`/v1/loans/by_org/${user.organization_id}?status=submitted`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setPendingRows(data.data);
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
      {/* Right section - coming on top on small screens */}
      <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
        <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              My Wallet Balance
            </Typography>
            <Typography variant="h3" color="primary" gutterBottom>
              USD {fCurrency(orgSetting?.wallet_balance)}
            </Typography>
            <br />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Wallet Payment Pointer
            </Typography>
            <Typography variant="h4" color="secondary" gutterBottom>
              {orgSetting?.payment_pointer}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <LoadingButton variant="contained" color="secondary" size="large" sx={{ color: "white" }} loading={isLoading} onClick={handleWithdrawClick}>
                Withdraw
              </LoadingButton>
              <WithdrawModal open={modalOpen} onClose={handleModalClose} onSubmit={handleWithdrawSubmit} />
              <RepayModal open={modalRepayOpen} onClose={handleRepayModalClose} onSubmit={handleRepaySubmit} />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Left section */}
      <Grid item xs={12} md={9} order={{ xs: 2, md: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total Borrowed
                </Typography>
                <Typography variant="h1" color="primary">
                  USD {fCurrency(analytics?.total_borrowed)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Total Repaid
                </Typography>
                <Typography variant="h1" color="primary">
                  USD {fCurrency(analytics?.total_repaid)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    My Loans
                  </Typography>
                  <Link to={`/loans/create`} style={{ textDecoration: 'none' }}>
                    <LoadingButton variant="contained" color="primary" size="large" sx={{ color: "white" }}>
                      <AddCircleOutlined sx={{ mr: 1 }} /> Make Loan Application
                    </LoadingButton>
                  </Link>
                
                </Box>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                      <TabList onChange={handleChange} aria-label="loan status tabs">
                        <Tab label="Approved" value="1" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }} />
                        <Tab label="Pending Approval" value="2" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }} />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <DataGrid
                        rows={approvedRows}
                        columns={columns}
                        loading={isRepayLoading}
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
                  </TabContext>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      {/* <Modal open={showAmountModal} onClose={() => setShowAmountModal(false)}>
        <div
          onClick={() => setShowAmountModal(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '400px',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Repayment Amount"
                  type="number"
                  variant="outlined"
                  value={repayedamount}
                  onChange={(e) => setRepayedAmount(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={() => handleRepaymentSubmit()}>
                  Send Amount
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Modal> */}
    </Grid>
  );
};


const WithdrawModal = ({ open, onClose, onSubmit }) => {
  const [withdrawMethod, setWithdrawMethod] = useState('mpesa'); // Set MPESA as default
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');

  const handleSubmit = () => {
    const data = { withdrawMethod, amount, phoneNumber, bankName, bankAccountNumber };
    onSubmit(data);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          p: 4,
          boxShadow: 24
        }}
      >
        <Typography variant="h3" mb={2}>
          Withdraw
        </Typography>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="withdraw-method-label">Withdraw Method</InputLabel>
          <Select
            labelId="withdraw-method-label"
            value={withdrawMethod}
            onChange={(e) => setWithdrawMethod(e.target.value)}
            label="Withdraw Method"
          >
            <MenuItem value="mpesa">MPESA</MenuItem>
            <MenuItem value="bank">Bank</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Amount (in USD)" variant="outlined" fullWidth margin="normal" value={amount} onChange={(e) => setAmount(e.target.value)} />
        {withdrawMethod === 'mpesa' && (
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        )}
        {withdrawMethod === 'bank' && (
          <>
            <TextField
              label="Bank Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
            <TextField
              label="Bank Account Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={bankAccountNumber}
              onChange={(e) => setBankAccountNumber(e.target.value)}
            />
          </>
        )}
        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};


const RepayModal = ({ open, onClose, onSubmit }) => {
  const [withdrawMethod, setWithdrawMethod] = useState('mpesa'); // Set MPESA as default
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');

  const handleSubmit = () => {
    const data = { withdrawMethod, amount, phoneNumber, bankName, bankAccountNumber };
    onSubmit(data);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          p: 4,
          boxShadow: 24
        }}
      >
        <Typography variant="h3" mb={2}>
          Repay
        </Typography>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="withdraw-method-label">Withdraw Method</InputLabel>
          <Select
            labelId="withdraw-method-label"
            value={withdrawMethod}
            onChange={(e) => setWithdrawMethod(e.target.value)}
            label="Withdraw Method"
          >
            <MenuItem value="mpesa">MPESA</MenuItem>
            <MenuItem value="bank">Bank</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Amount (in USD)" variant="outlined" fullWidth margin="normal" value={amount} onChange={(e) => setAmount(e.target.value)} />
        {withdrawMethod === 'mpesa' && (
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        )}
        {withdrawMethod === 'bank' && (
          <>
            <TextField
              label="Bank Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
            <TextField
              label="Bank Account Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={bankAccountNumber}
              onChange={(e) => setBankAccountNumber(e.target.value)}
            />
          </>
        )}
        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BorrowerDashboard;
