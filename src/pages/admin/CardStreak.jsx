import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import '@/styles/CardStreak.css';
import '@/assets/images/fire.png';
const days = [
  { label: "T2", done: true },
  { label: "T3", done: true },
  { label: "T4", done: true },
  { label: "T5", done: true },
  { label: "T6", done: true },
  { label: "T7", done: false },
  { label: "CN", done: false },
];
export default function CardStreak() {
  return (
    <Box className="card-wrapper">
      <Box className="card-above">
        <Box className="card-streak">
          <Box style={{ width: '40px', height: '40px',justifyContent:"center",display:"flex" }}>
            <Box style={{width:"26.67px", height: "32px", top: "4px", left: "7.17px", position:"absolute" }}>
            <img
              src="src/assets/images/fire.png"
              style={{width: "24.53px", height:"29.47px", top: "1.47px", left: "1.07px",}}
            ></img>
            </Box>
          </Box>
          <Typography
            style={{ width: '326px', fontWeight: 900, height: '30px', color: "#262626", lineHeight: "30px", fontFamily: 'Inter', fontSize: '40px' }}
          >11</Typography>
          <Typography style={{width: "327px", color: "#5e5e5e", lineHeight: "30px", fontSize: "20px", height: "30px", fonFamily: "Metropolis", fontWeight:700, }}>Chuỗi liên tục</Typography>
        </Box>
        <Typography style={{fontWeight: 500, lineHeight:"20px", color:"#6E6E6E", width: "327px", height: "20px", fontFamily: "Inter",fontSize: "14px",}}> Đăng nhập hàng ngày để xây dựng chuỗi</Typography>
      </Box>
      <Divider className="line"></Divider>
      <Box className="card-below">
      
        <Box className="label-day">
          {days.map((d, i) => (
          <Typography key={i} 
          style={{ 
          width: "48px",
          height: "24px",
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "24px",
          textAlign: "center",
          textTransform: "uppercase",
          color: d.done ? "#FA9300" : "#6E6E6E"
          }}
          >{d.label}
           </Typography>
         ))}
        </Box>
        <Box
          className="circle-day">
          {days.map((d, i) => (
            <Box
              key={i}
              style={{
                width: "48px",
                height: "32px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: d.done ? "#FA9300" : "#E6E6E6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {d.done && (
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: "white",
                      fontSize: "24px",
                      fontWeight: 500,
                    }}
                  >
                    check
                  </span>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
