import PropTypes from 'prop-types';
// @mui
import { Typography, Stack } from '@mui/material';
// components
// import Logo from '../../components/logo';
// import Image from '../../components/image';
//
import { StyledRoot, StyledSectionBg, StyledSection, StyledContent } from './styles';
import { padding } from '@mui/system';

// ----------------------------------------------------------------------

LoginLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  illustration: PropTypes.string,
};

export default function LoginLayout({ children, illustration, title }) {
  return (
    <StyledRoot>

      <StyledContent>
        <Stack sx={{ width: 1 }}> {children} </Stack>
      </StyledContent>

      <StyledSection style={{ backgroundImage: `url(${illustration || '/assets/background/background2.png'})`, backgroundSize:'cover' ,padding:'100px 100px 0px  80px'}}>
      {/* 'xs' | 'sm' | 'md' | 'lg' | 'xl', */}
        <Typography variant="h2" sx={{   textAlign: 'left', color:'white', fontWeight:100,fontSize:"64.23px", display:{ xs: "none",sm:"none", md: "none",lg:"block",xl:"block" } }}>
          {title || 'Unlock the Power of'}
        </Typography>
        <Typography variant="h3" sx={{ mb: 5,  textAlign: 'left', color:'white', fontWeight:800,fontSize:"64.23px",display:{ xs: "none",sm:"none", md: "none",lg:"block",xl:"block" }}}>
          {title || 'Financial Inclusion'}
        </Typography>
        <Typography variant="p" sx={{ mb: 10,  textAlign: 'left',color:'white', fontWeight:200,fontSize:"18.30px",lineHeight:"29.37px",display:{ xs: "none",sm:"none", md: "none",lg:"block",xl:"block" } }}>
          {title || 'At Vuza Finance, we bridge the gap between DAOs and SACCOS, facilitating the lending of USDC to regulated SACCOS. By connecting these entities, we strive to provide affordable loans to small and informal businesses, fostering economic growth and prosperity across Africa.'}
        </Typography>


      </StyledSection>

    </StyledRoot>
  );
}