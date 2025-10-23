import React from "react";
import { Box, Typography } from "@mui/material";
import "@/styles/Header.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  return (
    <Box className="header-container">
      <Box className="header-wrapper">
        <Box className="header-left">
          <Box className="header-logo">
            <img src="src/assets/lua.png" alt="" />
            <Typography variant="h4" className="login-title">
              10
            </Typography>
          </Box>
          <Box className="header-logo">
            <img src="src/assets/da.png" alt="" />
            <Typography variant="h4" className="login-title">
              10
            </Typography>
          </Box>
        </Box>
        <Box className="header-right">
          <Box className="header-right-logo">
            <img src="src/assets/chuong.png" alt="" />
            <img className="img-tv" src="src/assets/covn.png" alt="" />
          </Box>
          <Box className="header-right-user">
            <Box className="header-icon-img"></Box>
            <ExpandMoreIcon className="sidebar-icon" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
