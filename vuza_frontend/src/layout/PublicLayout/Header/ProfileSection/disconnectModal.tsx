"use client";
import React from "react";

import { useAccount, useDisconnect } from "@starknet-react/core";
import { Button, Dialog } from "@mui/material";

export default function DisconnectModal() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const addressShort = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : null;

  return (
    <div className="w-full flex justify-end">
      <div className="flex flex-col gap-4">
            <Button onClick={() => disconnect()}>Disconnect</Button>
          </div>
    </div>
  );
}