import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import User1 from 'assets/images/users/user-round.svg';
import { IconLogout, IconSettings } from '@tabler/icons-react';
import { ethers } from 'ethers';
import { Button } from '@mui/material';
import { fCurrency } from 'utils/formatNumber';
// import Web3ConnectSection from '../Web3ConnectSection';
import { connect, disconnect } from 'starknetkit'
import { useAccount, useBalance } from "@starknet-react/core";

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const navigate = useNavigate();

  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(0);
  const [provider, setProvider] = useState(null);
  const [connection, setConnection] = useState(null);
  const [isConnected, setIsConnected] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const anchorRef = useRef(null);

  const handleLogout = async () => {
    console.log('Logout');
    navigate('/logout');
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    console.log("effect",prevOpen.current)
    console.log("effect2",open)
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    console.log("use effect");
    const connectToStarknet = async () => {
      console.log("Connecting");
      const connection = await connect({
        modalMode: 'neverAsk',
        webWalletUrl: 'https://web.argent.xyz'
      });
      console.log("connection", connection.selectedAddress);
      if (connection && connection.wallet.isConnected) {
        console.log("Connected to StarkNet");

        setConnection(connection);
        setProvider(connection.wallet.provider);
        setAddress(connection.wallet.account.address);
        setIsConnected(connection.wallet.isConnected);
      }
    };

    connectToStarknet();
  }, []);

  const disconnectWallet = async () => {
    await disconnect();

    setConnection(null);
    setProvider(null);
    setAddress(null);
    setIsConnected(null);
  };

  const connectWallet = async () => {
    const connection = await connect({
      modalMode: 'alwaysAsk',
      webWalletUrl: 'https://web.argent.xyz'
    });
    console.log("Connecttion found");
    if (connection && connection.wallet.isConnected) {
      console.log("Connected to StarkNet");

      setConnection(connection);
      setProvider(connection.wallet.provider);
      setAddress(connection.wallet.account.address);
      setIsConnected(connection.wallet.isConnected);
    } else {
      console.log("connection lost");
    }
  };

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 4)}...${address.substring(address.length - 3)}`;
  };

  return (
    <>
      {address ? (
        <>
          <Chip
            sx={{
              height: '48px',
              alignItems: 'center',
              borderRadius: '27px',
              transition: 'all .2s ease-in-out',
              borderColor: theme.palette.primary.light,
              backgroundColor: theme.palette.primary.light,
              '&[aria-controls="menu-list-grow"], &:hover': {
                borderColor: theme.palette.primary.main,
                background: `${theme.palette.primary.main}!important`,
                color: theme.palette.primary.light,
                '& svg': {
                  stroke: theme.palette.primary.light
                }
              },
              '& .MuiChip-label': {
                lineHeight: 0
              }
            }}
            icon={
              <Avatar
                sx={{
                  ...theme.typography.mediumAvatar,
                  margin: '8px 0 8px 8px !important',
                  cursor: 'pointer',
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  textAlign: 'center',
                  lineHeight: '48px',
                  fontSize: '1rem'
                }}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                color="inherit"
              >
                {address ? `${address.substring(0, 3)}` : 'N/A'}
              </Avatar>
            }
            label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
            variant="outlined"
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            color="primary"
          />
          <Popper
            placement="bottom-end"
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            popperOptions={{
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 14]
                  }
                }
              ]
            }}
          >
            {({ TransitionProps }) => (
              <Transitions in={open} {...TransitionProps}>
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                      <Box sx={{ p: 2, pb: 0 }}>
                        <Stack>
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <Typography variant="h4">Hi,</Typography>
                            <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                              {formatAddress(address)}
                            </Typography>
                          </Stack>
                        </Stack>
                        <Divider />
                      </Box>
                      <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 250px)', overflowX: 'hidden' }}>
                        <Box sx={{ p: 2, pt: 0 }}>
                          <Divider />
                          <List
                            component="nav"
                            sx={{
                              width: '100%',
                              maxWidth: 350,
                              minWidth: 300,
                              backgroundColor: theme.palette.background.paper,
                              borderRadius: '10px',
                              [theme.breakpoints.down('md')]: {
                                minWidth: '100%'
                              },
                              '& .MuiListItemButton-root': {
                                mt: 0.5
                              }
                            }}
                          >
                            <ListItemButton
                              sx={{ borderRadius: `${customization.borderRadius}px` }}
                              selected={selectedIndex === 4}
                              onClick={disconnectWallet}
                            >
                              <ListItemIcon>
                                <IconLogout stroke={1.5} size="1.3rem" />
                              </ListItemIcon>
                              <ListItemText primary={<Typography variant="body2">Disconnect</Typography>} />
                            </ListItemButton>
                          </List>
                        </Box>
                      </PerfectScrollbar>
                    </MainCard>
                  </ClickAwayListener>
                </Paper>
              </Transitions>
            )}
          </Popper>
        </>
      ) : (
        <Button variant="contained" onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
    </>
  );
};






  // useEffect(() => {
  //   const checkConnection = async () => {
  //     if (window.ethereum) {
  //       try {
  //         const provider = new ethers.BrowserProvider(window.ethereum);
  //         const accounts = await provider.listAccounts();
  //         if (accounts.length > 0) {
  //           const account = accounts[0];
  //           const balance = await provider.getBalance(account);
  //           setAccount(account);
  //           setBalance(ethers.formatEther(balance));
  //           setProvider(provider);
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };

  //   checkConnection();
  // }, []);

  // const connectWallet = async () => {
  //   if (window.ethereum) {
  //     try {
  //       const provider = new ethers.BrowserProvider(window.ethereum);
  //       await provider.send('eth_requestAccounts', []);
  //       const signer = await provider.getSigner();
  //       const account = await signer.getAddress();
  //       const balance = await provider.getBalance(account);
  //       setAccount(account);
  //       setBalance(ethers.formatEther(balance));
  //       setProvider(provider);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } else {
  //     alert('No Ethereum wallet detected. Install MetaMask or any Web3 wallet extension.');
  //   }
  // };

  // const disconnectWallet = () => {
  //   window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });

  //   setAccount(null);
  //   setBalance(null);
  //   setProvider(null);
  // };

export default ProfileSection;
