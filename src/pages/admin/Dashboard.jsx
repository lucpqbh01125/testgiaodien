import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import '@/styles/Dashboard.css';
import ChartNhen from '@/pages/admin/Chartnhen';
import ChartAverage from '@/pages/admin/ChartAverage';
import Ads from '@/pages/admin/Ads';
import Header from '@/pages/admin/Header';
import Sidebar from '@/pages/admin/Sidebar';
import Rank from '@/pages/admin/Rank';
import CardExp from '@/pages/admin/CardExp';
import CardTime from '@/pages/admin/CardTime';
import CardStreak from '@/pages/admin/CardStreak';

function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Box className="dashboard-container">
      <Box className={`sidebar-section ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <Sidebar 
          collapsed={sidebarCollapsed} 
          setCollapsed={setSidebarCollapsed} 
        />
      </Box>
      <Box className={`main-section ${sidebarCollapsed ? 'expanded' : ''}`}>
        <Box className="header-sections">
          <Header />
        </Box>

        <Box className="cards-section">
          <Box className="card-item-section">
            <Box className="card-item-content">
              <Box className="card-items">
                <CardStreak />
              </Box>
              <Box className="card-items">
                <CardExp />
              </Box>
              <Box className="card-items">
                <CardTime />
              </Box>
            </Box>

            <Box className="card-item-chart">
              <Box className="card-average-chart">
                <ChartAverage />
              </Box>
              <Box className="card-nhen-chart">
                <ChartNhen />
              </Box>
            </Box>
          </Box>
          <Box className="card-ads">
            <Box className="rank-section">
              <Rank />
            </Box>

            <Box className="ads-section">
              <Ads />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
