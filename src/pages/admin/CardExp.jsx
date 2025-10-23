import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import '@/styles/CardExp.css';
import '@/assets/images/flash.png';
import Progress from  "@/components/Progress"

export default function CardExp({current = 13, total = 20}) {
  return (
    <Box className="card-exp">
      <Box className="exp-above">
        <Box className="semi-inside">
        <Box className="exp-inside">
          <Box style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center' }}>
              <Box style={{width:"23.48px", height: "32px", top: "4px", left: "8.76px", position: "absolute"}}>
                <img src="src/assets/images/flash.png"
                 style={{width: "22.92px", height:"30.4px", top: "0.8px", left: "0.34px"}}
                ></img>
                </Box>
          </Box>
          <Typography
            style={{
              width: '290px',
              fontWeight: 900,
              height: '30px',
              color: '#262626',
              lineHeight: '30px',
              fontFamily: 'Inter',
              fontSize: '40px',
            }}
          >
            11
          </Typography>
          <Typography style={{width: "290px", color: "#5e5e5e", lineHeight: "30px", fontSize: "20px", height: "30px", fontFamily: "Metropolis", fontWeight:600, }}>Tổng kinh nghiệm (XP)</Typography>
        </Box>
        <Typography style={{fontWeight: 500, lineHeight:"20px", color:"#6E6E6E", width: "290px", height: "20px",fontSize: "14px",}}> Hoàn thành mục tiêu hàng ngày để thêm XP</Typography>
        </Box>
          <Box className="cal-exp">
            <Box className="bar">
            <Typography style={{color: "#D9AA00", fontSize: "14px", fontWeight: 700, lineHeight: "22px", width:"60px", heigth: "22px" }}>Hôm nay</Typography>
            <Typography style={{color: "#D9AA00", fontSize: "14px", fontWeight: 700, lineHeight: "22px",  width:"48px", heigth: "22px"}}>+ {current} XP</Typography>
            </Box>
          </Box>
      </Box>
      <Divider></Divider>
      <Box className="exp-below">
        <Box style={{width: "73px", height: "24px"}}>
            <Typography variant="body1" component="p" style={{
            width: "73px",
            height: "24px",
            fontWeight: "700px",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
            color: "#AFAFAF"
            }}>LEVEL 01</Typography>
        </Box>
        <Box className="progress-bar">
        <Progress
        current={current}
        total={total}
        formatLabel={(current, total) => `${current}/${total} XP`}
        labelStyle={{color:"#AFAFAF",width: "65px", height:"20px", fontWeight: 500, fontSize: "15px" , lineHeight:"20px"
        }}/>
        </Box>
      </Box>
    </Box>
  );
}