"use client";
import React from "react";

import { useAccount } from "@starknet-react/core";
import DisconnectModal from "./disconnectModal";
import ConnectModal from "./connectModal";

export default function ConnectWallet() {
  const { address } = useAccount();

  return (
    <div className="w-full mb-8 h-12 flex items-center">
      {address ? <DisconnectModal/> : <ConnectModal />}
    </div>
  );
}