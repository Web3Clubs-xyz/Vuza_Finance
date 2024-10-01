// material-ui
import { Box, Breadcrumbs, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Grid, Stack, TextField, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';

// project imports
import { useState } from 'react';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useMutation, useQuery } from 'react-query';
import { baseGet, basePost } from 'utils/apiClient';
import { Bounce, toast } from 'react-toastify';

// ==============================|| LOAN APPLICATION PAGE ||============================== //

const LoansCreate = () => {
  const [isLoading, setLoading] = useState(false);
  const registerLoan = useMutation((data) => basePost('/v1/loans/create/', data));
  const { pathname } = useLocation();
  const { guid = '' } = useParams();
  const [loanTerms, setloanTerms] = useState({});


  // const loanTerms = {
  //   interestRate: "14%",
  //   returnPeriod: "6-12 months"
  // };

  useQuery(['loan_terms'], () => baseGet(`/v1/loan_terms`), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setloanTerms(data.data);
      setLoading(false)
    },
  });

  const breadcrumbs = [
    <Typography key="3" sx={{ fontWeight: '800', color: 'secondary.dark' }}>
      Create Loan Application
    </Typography>
  ];

  return (
    <>
      <Stack spacing={2} alignItems="center" mb={4}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Loan Application
        </Typography>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <Grid container direction="row" justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={10} md={8}>
          {/* Loan Terms Section */}
          <Box sx={{ mb: 4, p: 3, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6" sx={{ fontWeight: '600', mb: 2 }}>
              Loan Terms
            </Typography>
            <Typography><strong>Interest Rate:</strong> {loanTerms?.loan_interest}%</Typography>
            <Typography><strong>Return Period:</strong> {loanTerms?.repayment_duration} Months</Typography>
          </Box>

          <Formik
            initialValues={{
              requested_amount: '',
              // loan_interest: '',
              // payback_period: '',
            }}
            validationSchema={Yup.object().shape({
              requested_amount: Yup.number().required('Loan Amount is required').positive('Amount must be positive').min(5, 'Minimum amount is $5'),
              // loan_interest: Yup.number().required('Interest is required').min(0, 'Interest must be non-negative'),
              // payback_period: Yup.string().required('Period is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              values.loan_terms_id = loanTerms?.id;
              values.borrower_id = JSON.parse(localStorage.getItem('user')).organization_id;
              registerLoan.mutate(values, {
                onSuccess: (data) => {
                  toast.success(data.message, {
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
                      setSubmitting(false)
                      location.reload()
                    }
                  });
                },
                onError: (error) => {
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
                    onClose: () => setSubmitting(false),
                  });
                },
              });
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      label="Loan Amount (in USD)"
                      margin="normal"
                      name="requested_amount"
                      value={values.requested_amount}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="number"
                      inputProps={{ min: 5 }}
                      variant="outlined"
                      helperText={touched.requested_amount && errors.requested_amount}
                      error={touched.requested_amount && Boolean(errors.requested_amount)}
                    />
                  </Grid>
                     <Grid item xs={12} sm={12}>  
                     <FormControlLabel
                          control={
                            <Checkbox checked={true} name="checked" color="primary" />
                          }
                          label={
                            <Typography variant="subtitle1">
                              I Agree with the Loan Terms
                            </Typography>
                          }
                        />
                      {/* <TextField
                        fullWidth
                        label="Payback Period"
                        margin="normal"
                        name="payback_period"
                        value={values.payback_period}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        variant="outlined"
                        helperText={touched.payback_period && errors.payback_period}
                        error={touched.payback_period && Boolean(errors.payback_period)}
                      /> */}
                   </Grid>
                </Grid>
            
                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Box sx={{ mt: 2 }}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      sx={{
                        borderRadius: '20px',
                        color: 'white',
                      }}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="secondary"
                    >
                      Submit Request
                    </Button>
                  </AnimateButton>
                </Box>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
};

export default LoansCreate;
