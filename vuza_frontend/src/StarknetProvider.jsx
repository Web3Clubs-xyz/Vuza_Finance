import React from "react";
import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  braavos,
  useInjectedConnectors,
  voyager
} from "@starknet-react/core";

export function StarknetProvider({ children }) {
  const { connectors } = useInjectedConnectors({
    recommended: [
      braavos(),
    ],
    includeRecommended: "onlyIfNoConnectors",
    order: "random"
  });

  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={publicProvider()}
      connectors={connectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}