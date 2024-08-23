// material-ui
import { IconButton, Menu, MenuItem, Avatar, Breadcrumbs, Button, CardHeader, Grid, Stack, Modal, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LatestRecordsTable from 'ui-component/LatestRecordsTable';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { baseGet, basePatch, basePost } from 'utils/apiClient';
import { Bounce, toast } from 'react-toastify';
import { fDate } from 'utils/formatTime';
import { fCurrency } from 'utils/formatNumber';

// // ==============================|| SAMPLE PAGE ||============================== //

const Loans = ({}) => {
  const [isLoading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [repayedamount, setRepayedAmount] = useState('');

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
      pauseOnHover: true,
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


  const loanRepayment= useMutation((data) => basePatch(`/v1/loans/repayment/${data.guid}/`, data.payload));

  const handleRepaymentSubmit = () => {
    let guid = selectedRow.guid
    setShowAmountModal(false);

    // Define the data you want to send in the POST request
    const payload = {
      // Add your payload properties here
      repayment_amount:repayedamount
    };
    

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
      }
      });
      loanRepayment.mutate({ guid, payload }, {
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
            // setSubmitting(false);
            // navigate('/login');
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
            // setSubmitting(false);
            // navigate('/login');
          }
          });
      }
    });
  };

  // const handleRepayment= (guid) => {
  //   setShowAmountModal(true);
  //   handleLoanRepayment(guid)

  // }
  const user = JSON.parse(localStorage.getItem("user"))
  const columns = [
    { field: 'dao_name', headerName: 'DAO Pool', width: 180 },
    { field: 'loan_interest', headerName: 'USDC Interest', width: 150 }, 
    { field: 'requested_amount', headerName: 'Requested Amount', width: 150,valueFormatter: (params) => fCurrency(params)  },
    { field: 'remaining_amount', headerName: 'Balance', width: 150,valueFormatter: (params) => fCurrency(params)  },
    { field: 'request_date', headerName: 'Request Date ', width: 150 , valueFormatter: (params) => fDate(params)},
    { field: 'repayment_due_date', headerName: 'Repayment Date', width: 150, valueFormatter: (params) => fDate(params) },
    { field: 'approval_date', headerName: 'Approval Date', width: 150, valueFormatter: (params) => fDate(params) },

    { field: 'status', headerName: 'Status', width: 150 },
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
            {user.organization_id == 1 ? selectedRow?.status == 'approved' ? null : <MenuItem  onClick={() => handleAdminApproval(selectedRow?.guid)}>Admin Approval</MenuItem> : null }
            {user.organization_id == 1 ? null : selectedRow?.status != 'approved' ? null : <MenuItem  onClick={() => {setShowAmountModal(true)}}>Loan Repayment</MenuItem>  }
            
          </Menu>
        </>
      ),
    }
  ];

  useQuery(['all_loans'], () => baseGet(`/v1/loans/all`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setRows(data.data);
      setLoading(false)
    },
  });

  const breadcrumbs = [
    <Typography key="3" sx={{ fontWeight: '800', color: 'secondary.dark' }}>
      Loans
    </Typography>
  ];

  return (
    <>
      <Typography variant="h2">Loans</Typography>
      <Grid item lg={12} md={12} sm={12} xs={12}>
  <LatestRecordsTable isLoading={isLoading} columns={columns} rows={rows} title='' />

  <Modal open={showAmountModal} onClose={() => setShowAmountModal(false)}>
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
              label="Amount"
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
  </Modal>
</Grid>


  
    </>
  );
};
export default Loans;
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
