import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import router from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { ToastContainer } from 'react-toastify';
import { ThirdwebProvider } from 'thirdweb/react';
import { ChainProvider } from 'contexts/ChainProvider';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <ThirdwebProvider>
      <ChainProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={themes(customization)}>
            <CssBaseline />
            <NavigationScroll>
              <ToastContainer />

              <RouterProvider router={router} />
            </NavigationScroll>
          </ThemeProvider>
        </StyledEngineProvider>
      </ChainProvider>
    </ThirdwebProvider>
  );
};
// e825e01a1f70e447be2ca8b3361b7cb5
// mTpx3e4BJncT8-bIRbf8OvUbd5aKlzAWBlP2HHcKLVj7_n7QkVqQ_drKcTLQ7OrNLKz3qxa4YeU24x-l6qdCbw
export default App;
