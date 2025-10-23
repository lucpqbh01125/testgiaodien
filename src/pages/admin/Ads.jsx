import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import '@/styles/Ads.css';

function Ads() {
  const adsData = "src/assets/quangcao.png";
  const [adsImage, setAdsImage] = useState(adsData);

  const removeImage = () => setAdsImage(null);

  return (
    <Box className="ads-container">
      {adsImage ? (
        <>
          <img src={adsImage} alt="Quảng cáo" />
          <Typography variant="body1" size="small" onClick={removeImage}>
            Gỡ Quảng cáo
          </Typography>
        </>
      ) : (
        <Typography variant="body1">Không có quảng cáo hiển thị</Typography>
      )}
    </Box>
  );
}

export default Ads;
