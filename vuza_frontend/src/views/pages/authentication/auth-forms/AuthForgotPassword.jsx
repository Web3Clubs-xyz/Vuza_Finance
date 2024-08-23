import { useState,useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';
// import { JWTContext } from 'contexts/JWTContext';
import { useMutation } from 'react-query';
import { basePost } from 'utils/apiClient';
import { Bounce, toast } from 'react-toastify';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthForgotPassword = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const forgotpasswordMutation = useMutation((data) => basePost('/auth/password_reset/', data));


  return (
    <>

      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        })}
        onSubmit={(values,{ setSubmitting, setErrors }) => {
          setSubmitting(true);
          // handle form submission
          setTimeout(() => {
            forgotpasswordMutation.mutate(values, {
              onSuccess: (data) => {
                toast.success("Token sent to the entered email", {
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
 
                    navigate('/reset-password')

                    
                  }
                  }); 
              },
              onError: (error) => {
                toast.success("Token sent to the entered email", {
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
                    navigate('/reset-password')
                  }
                  });
                  
              },
              
            });
          }, 200);

       
      
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">Email Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

    
      
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" sx={{color:"white",fontWeight:"200px", borderRadius: '20px', 
                   }} color='secondary'>
                  RESET
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthForgotPassword;
