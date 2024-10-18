import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Tooltip } from '@mui/material';
import ArbitrumLogo from 'ui-component/ArbitrumLogo';
import BaseLogo from 'ui-component/BaseLogo';
import { useChain } from 'contexts/ChainProvider';

const ProfileSection = () => {
  const {selectedChain, setSelectedChain } = useChain();

  const handleChainChange = (event) => {
    const chain = event.target.value;
    setSelectedChain(chain);
  };

  return (
    <FormControl variant="outlined" sx={{ width: '200px', borderRadius: '27px', marginRight:'10px' }}>
      <InputLabel id="chain-select-label">Select Chain</InputLabel>
      <Select
        labelId="chain-select-label"
        value={selectedChain}
        onChange={handleChainChange}
        label="Select Chain"
        sx={{
          height: '48px',
          borderRadius: '27px',
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        <MenuItem value="arbitrum" sx={{ display: 'flex', alignItems: 'center', padding: '8px 16px' }}>
          <ArbitrumLogo sx={{ marginRight: '8px' }} />
          <span>Arbitrum</span>
        </MenuItem>
        {/* <MenuItem value="base" sx={{ display: 'flex', alignItems: 'center', padding: '8px 16px' }}>
          <BaseLogo sx={{ marginRight: '8px' }} />
          <span>Base</span>
        </MenuItem> */}
      </Select>
    </FormControl>
  );
};

export default ProfileSection;
