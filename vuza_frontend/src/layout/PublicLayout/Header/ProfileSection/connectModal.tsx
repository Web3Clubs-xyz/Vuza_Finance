"use client";
import React from "react";

import { useConnect, Connector } from "@starknet-react/core";
import { Button, Dialog, DialogContent } from "@mui/material";

export default function ConnectModal() {
  const { connect, connectors } = useConnect();
  return (
    <div className="w-full flex justify-end">
    <div className="flex flex-col gap-4">
            {connectors.map((connector: Connector) => (
              <Button
                key={connector.id}
                onClick={() => connect({ connector })}
                disabled={!connector.available()}
              >
                Connect {connector.name}
              </Button>
            ))}
          </div>
    </div>
  );
}