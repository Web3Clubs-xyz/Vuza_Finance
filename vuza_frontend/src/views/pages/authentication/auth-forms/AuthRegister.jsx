import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third party
import * as Yup from 'yup';
import {  Formik } from 'formik';

// project imports
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { MenuItem, Select } from '@mui/material';
import { baseGet, basePost } from 'utils/apiClient';
import { useMutation, useQuery } from 'react-query';
import { Bounce, ToastContainer, toast } from 'react-toastify';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const AuthRegister = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  // const [organizationTypes, setorganizationTypes] = useState([]);
  const [checked, setChecked] = useState(true);


  const registerOrganization = useMutation((data) => basePost('/v1/organizations/create/', data));

  // useQuery('institution_types', () => baseGet(`/v1/organization_type/all/`), {
  //   refetchOnWindowFocus: false,
  //   onSuccess: (data) => {
  //     setorganizationTypes(data.data);
  //   },
  // });


  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>

        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
       
      </Grid>

      <Formik
        initialValues={{
          name: '',
          // organization_type_id: '',
          country: '',
          state: '',
          industry: '',
          contact_person_names: '',
          contact_person_phone_number: '',
          contact_person_email_address:''
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required('Name is required'),
          // organization_type_id: Yup.string().required('Organization Type is required'),
          country: Yup.string().required('Country is required'),
          state: Yup.string().max(255).required('State is required'),
          // industry: Yup.string().required('Industry is required'),
          contact_person_names: Yup.string().max(255).required('Contact  Names are required'),
          contact_person_phone_number: Yup.string().max(15).required('Contact  Phone Number is required'),
          contact_person_email_address: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        })}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          setSubmitting(true);
          // handle form submission
          values.is_test=false 
          values.created_by = 'self'
          values.created_by = 'self'
          // setTimeout(() => {
            registerOrganization.mutate(values, {
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
                    setSubmitting(false);
                    navigate('/login');
                  }
                  });
              },
              onError: (error) => {
                console.log(error.message)
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
                    setSubmitting(false);
                  }
                  });
                  
              },
            });
          // }, 200);
          
        
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              {/* <Grid item xs={12} sm={12}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Organization Type</InputLabel>
                  <Select
                    name="organization_type_id"
                    value={values.organization_type_id || ''}
                    onBlur={handleBlur}
                    onChange={handleChange} 
                  >
                    {organizationTypes.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.organization_type_id && errors.organization_type_id && (
                    <FormHelperText error>{errors.organization_type_id}</FormHelperText>
                  )}
                </FormControl>
              </Grid> */}
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Organization Name"
                  margin="normal"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  // sx={{ ...theme.typography.customInput }}
                />
                {touched.name && errors.name && (
                  <FormHelperText error>{errors.name}</FormHelperText>
                )}
              </Grid>
            </Grid>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Country</InputLabel>
                  <Select
                    name="country"
                    value={values.country}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    <MenuItem value="Kenya">Kenya</MenuItem>
                    <MenuItem value="Rwanda">Rwanda</MenuItem>
                    <MenuItem value="Uganda">Uganda</MenuItem>
                    <MenuItem value="Zambia">Zambia</MenuItem>
                    <MenuItem value="Zimbambwe">Zimbambwe</MenuItem>
                  </Select>
                  {touched.country && errors.country && (
                    <FormHelperText error>{errors.country}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="State/County"
                  margin="normal"
                  name="state"
                  value={values.state}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.state && errors.state && (
                  <FormHelperText error>{errors.state}</FormHelperText>
                )}
              </Grid>
            </Grid>
            {/* <Grid item xs={12} sm={6}> */}
              {/* <FormControl fullWidth margin="normal">
                <InputLabel>Industry</InputLabel>
                <Select
                  name="industry"
                  value={values.industry}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <MenuItem value="Real Estate">Real Estate</MenuItem>
                  <MenuItem value="Police">Police</MenuItem>
                  {/* Add more industries as needed 
                </Select>
                {touched.industry && errors.industry && (
                  <FormHelperText error>{errors.industry}</FormHelperText>
                )}
              </FormControl> */}
            {/* </Grid> */}
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contact Names"
                  margin="normal"
                  name="contact_person_names"
                  value={values.contact_person_names}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.contact_person_names && errors.contact_person_names && (
                  <FormHelperText error>{errors.contact_person_names}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={Boolean(touched.primary_email_address && errors.primary_email_address)} >
                  {/* <InputLabel>Email Address</InputLabel> */}
                  <TextField
                    fullWidth
                    label="Contact Email Address"
                    margin="normal"
                    id="contact_person_email_address"
                    name="contact_person_email_address"
                    value={values.primary_email_address}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.contact_person_email_address && errors.contact_person_email_address && (
                    <FormHelperText error>{errors.contact_person_email_address}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
              <TextField
                fullWidth
                label="Contact Phone Number"
                margin="normal"
                name="contact_person_phone_number"
                value={values.contact_person_phone_number}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.contact_person_phone_number && errors.contact_person_phone_number && (
                <FormHelperText error>{errors.contact_person_phone_number}</FormHelperText>
              )}
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                  }
                  label={
                    <Typography variant="subtitle1">
                      I Agree with the &nbsp;
                      <Typography variant="subtitle1" component={Link} to="#">
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting}  sx={{
                  borderRadius: '20px', 
               
                  color:'white'      
                }} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Submit Request
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
