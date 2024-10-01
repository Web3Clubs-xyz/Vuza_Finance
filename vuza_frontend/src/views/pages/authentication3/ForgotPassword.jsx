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
import AuthForgotPassword from '../authentication/auth-forms/AuthForgotPassword';
import { red } from '@mui/material/colors';

// ================================|| AUTH3 - ForgotPassword ||================================ //

const ForgotPassword = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh',background:"#121c3a" }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)'}}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={4} alignItems="center" justifyContent="left">
                  <Grid item xs={12}>
                    <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems="left" justifyContent="left">
                    <Logo/>
                      <Grid item sx={{marginTop:"30px"}}>
                        <Stack alignItems="left" justifyContent="left" spacing={1}>
                          <Typography gutterBottom variant={downMD ? 'h3' : 'h2'} sx={{fontSize:"20px",fontWeight:"400"}}>
                          Sorry to hear you lost your password  🔒
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={{ xs: 'center', md: 'inherit' }}>
                          Enter your email to reset Password
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthForgotPassword />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Typography component={Link} to="/login" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                        Back to login
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default ForgotPassword;
