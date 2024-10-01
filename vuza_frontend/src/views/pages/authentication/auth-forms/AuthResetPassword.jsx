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

const AuthResetPassword = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const resetpasswordMutation = useMutation((data) => basePost('/auth/password_reset/confirm/', data));


  return (
    <>

      <Formik
        initialValues={{
          password: '',
          token :''
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().required('New Password is required'),
          token: Yup.string().required('Token is required'),
        })}
        onSubmit={(values,{ setSubmitting, setErrors }) => {
          setSubmitting(true);
          // handle form submission
          setTimeout(() => {
            resetpasswordMutation.mutate(values, {
              onSuccess: (data) => {
                toast.success("Success! Password changed", {
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
 
                    navigate('/login')

                    
                  }
                  }); 
              },
              onError: (error) => {
                toast.error(`${error.password[0]} ${error.password[1]}` , {
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
          }, 200);

       
      
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>

            <FormControl fullWidth error={Boolean(touched.token && errors.token)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-token-login">Enter Token</InputLabel>
              <OutlinedInput
                id="outlined-adornment-token-login"
                type="token"
                name="token"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Token "
                inputProps={{}}
              />
              {touched.token && errors.token && (
                <FormHelperText error id="standard-weight-helper-text-token-login">
                  {errors.token}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">New Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                label="password Address"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
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
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary" sx={{color:'white',fontWeight:"200px", borderRadius: '20px', 
                 }}>
                  Reset Password
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthResetPassword;
