import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import '@/styles/CarTime.css';
import '@/assets/images/time.png';
import Progress from  "@/components/Progress"
import {useBarTime} from "@/JS/useBarTime"

export default function CardTime() {
  const today = 3.33;
  const yesterday = 3.00;

  const { change, color, rotation } = useBarTime(today, yesterday);
  return (
    <Box className="time-card">
      <Box className="time-above">
        <Box className="semiTime-inside">
        <Box className="time-inside">
          <Box style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center' }}>
              <Box style={{width:"30px", height: "30px", top: "5px", left: "5.5px", position: "absolute"}}>
               <img
                  src="src/assets/images/time.png"
                   style={{width: "24px", height:"24px", top: "8px", left: "8.5px"}}
                 ></img>
                 </Box>
          </Box>



          <Typography
            style={{
              width: '207px',
              fontWeight: 900,
              height: '30px',
              color: '#595959',
              lineHeight: '30px',
              fontFamily: 'Inter',
              fontSize: '40px',
            }}
          >
            3h21m
          </Typography>
          <Typography style={{width: "197px", color: "#696969", lineHeight: "30px", fontSize: "20px", height: "30px", fonFamily: "Metropolis", fontWeight:600, }}>Thời gian học (ngày)</Typography>
        </Box>
        <Typography style={{fontWeight: 500, lineHeight:"20px", color:"#858C95", width: "290px", height: "20px",fontSize: "14px",}}>Chăm chỉ học tập mỗi ngày nào</Typography>
        </Box>
         
              <Box className="bar-time">
          <span
            className="material-symbols-outlined"
            style={{
              width:"11,67px",
              heigth:"11.98px",
              fontSize:"22px",
              color,
              transform: rotation,
              transition: "transform 0.25s ease, color 0.25s ease",
            }}
          >
            arrow_upward
          </span>

          <Typography
            style={{
              color,
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            {Math.round(change).toFixed(1)}% so với hôm qua
          </Typography>
            </Box>
         
      </Box>
      <Divider></Divider>
      <Box className="time-below">
        <Box style={{width: "73px", height: "24px"}}>
            <Typography variant="body1" component="p" style={{
            width: "326.67px",
            height: "24px",
            fontWeight: "700px",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
            gap:"12px",
            color: "#AFAFAF",
            }}>TỔNG THỜI GIAN TRONG TUẦN: </Typography>
        </Box>
        <Box className="progress-bar-time">
        <Progress
        current={2}
        total={2.2}
        barColor="#AB67D5"
        label="12h 37m/14h"
        labelStyle={{color:"#AFAFAF",width: "65px", height:"20px", fontWeight: 500, fontSize: "15px" , lineHeight:"20px"
        }}/>
        </Box>
      </Box>
    </Box>
  );
}
