import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


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
import { JWTContext } from 'contexts/JWTContext';
import { useMutation } from 'react-query';
import { basePatch, basePost } from 'utils/apiClient';
import { Bounce, toast } from 'react-toastify';
import { makeStyles } from '@mui/styles';
import { Modal, TextField } from '@mui/material';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = ({ ...others }) => {
  const theme = useTheme();
  const useStyles = makeStyles((tim) => ({
    modal: {
      position: 'absolute',
      width: 470,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      borderRadius: theme.shape.borderRadius,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    modalTitle: {
      marginBottom: theme.spacing(2),
    },
    modalContent: {
      marginBottom: theme.spacing(2),
    },
  }));
  const navigate = useNavigate();
  const { setToken } = useContext(JWTContext);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [userData, setUserData] = useState()

  const loginMutation = useMutation((data) => basePost('/v1/auth/login/', data));

  const updateUserMutation = useMutation((data) => basePatch(`/v1/users/update/${userData.user.guid}/`, data));

  const [checked, setChecked] = useState(true);


  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const classes = useStyles();

const handlePasswordSubmit = () => {
    let values = {}
    values.is_first_time_login = false
    values.password = newPassword
    updateUserMutation.mutate(values, {
      onSuccess: (data) => {
        toast.success("Success! Your Dashboard is being prepared", {
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
            setShowPasswordModal(false);
            localStorage.setItem('user', JSON.stringify(userData.user));
            if(userData.user.organization_type_id == 1){
              //this is admin
              navigate('/admin/dashboard');
              navigate(0)
            }else if(userData.user.organization_type_id == 2){
              // this is a borrower
              navigate('/dashboard/borrower');
              navigate(0)
            }else if(userData.user.organization_type_id == 3){
              // this is a lender
              navigate('/dashboard/lender');
              navigate(0)
            }else{
              alert("Your role is undefined")
              localStorage.clear()
            }

            
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
          onClose: () => {
            setSubmitting(false);
          }
          });
          
      },
      
    });

  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Formik 
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={(values,{ setSubmitting, setErrors }) => {
          setSubmitting(true);
          // handle form submission
          setTimeout(() => {
            loginMutation.mutate(values, {
              onSuccess: (response) => {
                setUserData(response.data)
                localStorage.setItem('token',response.data.access);
                setToken(response.data.access);

                if(response.data.user.is_first_time_login ==true){

                  setShowPasswordModal(true);

                }else{
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
                        setSubmitting(false);
                        
                      
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        if(response.data.user.organization_type_id == 1){
                          //this is admin
                          navigate('/admin/dashboard');
                          navigate(0)
                        }else if(response.data.user.organization_type_id == 2){
                          // this is a borrower
                          navigate('/dashboard/borrower');
                          navigate(0)
                        }else if(response.data.user.organization_type_id == 3){
                          // this is a lender
                          navigate('/dashboard/lender');
                          navigate(0)
                        }else{
                          alert("Your role is undefined")
                          localStorage.clear()
                        }


                      }
                    }); 
                }
                
              },
              onError: (error) => {
                console.log(error)
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
          }, 200);

       
      
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others} style={{lineHeight: 4}}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address / Username"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            <Typography  component={Link} to="/forgot-password" variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
              Forgot Password?
            </Typography>
       
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0}>
            <FormControlLabel
              control={
                <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
              }
              label="Remember me"
            />

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting}  sx={{
                  borderRadius: '20px', 
                  width: '200px', 
                  color:'white'      
                }} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Log In
                </Button>
              </AnimateButton>
            </Box>
          </Stack>
      
           {/* Password Modal */}
           <Modal open={showPasswordModal} onClose={() => setShowPasswordModal(false)}>
              <div className={classes.modal}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="New Password"
                      type="password"
                      variant="outlined"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => handlePasswordSubmit()}>
                      Set Password
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Modal>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
