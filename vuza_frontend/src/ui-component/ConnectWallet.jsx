import React from 'react';
import { createThirdwebClient } from "thirdweb";
import { ConnectButton, useConnect, useDisconnect } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";

const client = createThirdwebClient({ clientId: process.env.THIRDWEBCLIENTID });

const ConnectWallet = () => {
    const { connect, isConnecting, wallet, error } = useConnect();
    const { disconnect } = useDisconnect(); // Use the disconnect hook

    const wallets = [
        createWallet("io.metamask"),
      ];
    return (
        <div>
           
        <ConnectButton connectModal={{
            title:"Connect to Vuza",
            titleIcon:'http://localhost:5000/src/assets/images/vuza_logo.png'
        }} connectButton={{
            
                label: "Connect Wallet",
            }}  client={client} wallets={wallets} />
          
        </div>
    );
};

export default ConnectWallet;
