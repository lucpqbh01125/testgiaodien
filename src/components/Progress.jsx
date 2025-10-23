import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ProgressBar({
  current = 0,
  total = 1,
  label, 
  formatLabel,
  barColor = "#FFC800",
  bgColor = "#E5E5E5",
  labelStyle = {},
}) {
  const percent = Math.min((current / total) * 100, 100);

  const displayLabel =
    label ??
    (typeof formatLabel === 'function'
      ? formatLabel(current, total, percent)
      : `${current}/${total}`);

  return (
    <Box
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Box
        style={{
          flex: 1,
          height: '14px',
          backgroundColor: bgColor,
          borderRadius: '7px',
          overflow: 'hidden',
        }}
      >
        <Box
          style={{
            width: `${percent}%`,
            height: '100%',
            backgroundColor: barColor,
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </Box>

      <Typography
        variant="body2"
        style={{
          fontWeight: 500,
          color: '#333',
          minWidth: 'fit-content',
          ...labelStyle,
        }}
      >
        {displayLabel}
      </Typography>
    </Box>
  );
}
