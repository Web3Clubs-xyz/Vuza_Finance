import React from 'react';
import { Bounce, toast } from 'react-toastify';
import { createThirdwebClient, defineChain } from 'thirdweb';
import { ConnectButton, useConnect, useDisconnect } from 'thirdweb/react';
import { createWallet, inAppWallet } from 'thirdweb/wallets';
// import { arbitrum } from 'thirdweb/chains';

const client = createThirdwebClient({ clientId: import.meta.env.VITE_APP_THIRDWEBCLIENTID });

const ConnectWallet = () => {
  const arbitrumOne = defineChain({
    id: 42161,
    rpc: "https://arb1.arbitrum.io/rpc"
  })

  const showConnectionSuccess = () => {
    toast.success('Success! Wallet Connected', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      // pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
      onClose: () => {}
    });
  };

  const showConnectionDisconnet = () => {
    toast.success('Success! Wallet Disconnected', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      // pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
      onClose: () => {}
    });
  };
  return (
    <div>
      <ConnectButton
        connectModal={{
          title: 'Connect to Vuza Finance',
          titleIcon: 'https://vuza.finance/images/vuza_logo.png'
        }}
        connectButton={{
          label: 'Connect Wallet'
        }}
        client={client}
        wallets={[createWallet('io.metamask')]}
        showAllWallets={false}
        chain={arbitrumOne}
        onConnect={showConnectionSuccess}
        onDisconnect={showConnectionDisconnet}
      />
    </div>
  );
};

export default ConnectWallet;
