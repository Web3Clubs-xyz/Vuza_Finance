import React, { createContext, useContext, useState } from 'react';

const ChainContext = createContext();

export const ChainProvider = ({ children }) => {
  const [selectedChain, setSelectedChain] = useState('arbitrum');

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      {children}
    </ChainContext.Provider>
  );
};

export const useChain = () => {
  return useContext(ChainContext);
};
