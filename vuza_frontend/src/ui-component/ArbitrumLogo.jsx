import React, { useEffect, useState } from 'react';

const ArbitrumLogo = () => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/arbitrum');
        const data = await response.json();
        
        setLogoUrl(data.image.small); // Getting the small logo
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    };

    fetchLogo();
  }, []);

  return (
    <div>
      {logoUrl ? (
        <img src={logoUrl} style={{ marginRight: 8, width: 24, height: 24 }}  alt="Arbitrum Logo" />
      ) : (
        <p>Loading logo...</p>
      )}
    </div>
  );
};

export default ArbitrumLogo;
