import { Link } from 'react-router-dom';

// material-ui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../authentication/auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import LoginLayout from 'layout/login/LoginLayout';
import { lineHeight } from '@mui/system';

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <LoginLayout>
       <Stack spacing={5} sx={{ mb: 5, position: 'relative' }}>
       <Logo />
       <Typography variant="h4" sx={{fontSize:'24.35px',fontWeight:'500',paddingTop:'6px', lineHeight:"18.17px"}}>Hello, Welcome back 👋🏻</Typography>

        <br />

      </Stack>

      <AuthLogin />
      <Grid item xs={12} sx={{paddingTop:"50px"}}>
        <Grid item container direction="column" alignItems="center" xs={12}>
          <Typography component={Link} to="/register" variant="subtitle1" sx={{ textDecoration: 'none' }}>
          Do not have an account yet? <u>Request here!</u>
          </Typography>
        </Grid>
      </Grid>
        
    </LoginLayout>
 
  );
};

export default Login;
