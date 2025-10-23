import { useState } from 'react';
import {
  CardContent,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import '@/styles/ChartAverage.css';

const dataWeek1 = [
  { name: 'Thứ 2', diem: 9 },
  { name: 'Thứ 3', diem: 9 },
  { name: 'Thứ 4', diem: 8 },
  { name: 'Thứ 5', diem: 8 },
  { name: 'Thứ 6', diem: 7 },
  { name: 'Thứ 7', diem: 7 },
  { name: 'Chủ nhật', diem: 6 },
];

const dataWeek2 = [
  { name: 'Thứ 2', diem: 6 },
  { name: 'Thứ 3', diem: 7 },
  { name: 'Thứ 4', diem: 8 },
  { name: 'Thứ 5', diem: 9 },
  { name: 'Thứ 6', diem: 8 },
  { name: 'Thứ 7', diem: 7 },
  { name: 'Chủ nhật', diem: 10 },
];

const RoundedTopBar = (props) => {
  const { x, y, width, height, fill, value } = props;
  const radius = 10;
  const isMax = value === 10;


  const path = `
    M${x},${y + height}
    L${x},${y + radius}
    Q${x},${y} ${x + radius},${y}
    L${x + width - radius},${y}
    Q${x + width},${y} ${x + width},${y + radius}
    L${x + width},${y + height}
    Z
  `;

  return <path d={path} fill={fill} style={{ transform: isMax ? 'translateY(1px)' : 'none' }} />;
};
export default function BieuDoDiem() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState('Tuần');
  const [chartData, setChartData] = useState(dataWeek1);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelectWeek = (week) => {
    setSelectedWeek(week);
    setChartData(week === 'Tuần 2' ? dataWeek2 : dataWeek1);
    handleClose();
  };

  return (
    <CardContent className="chart-container">
      {/* Header */}
      <Box className="chart-header">
        <Typography variant="h6" className="chart-title">
          Điểm trung bình
        </Typography>

        <Box className="chart-week-selector" onClick={handleOpen}>
          <Typography variant="body2" className="chart-week-text">
            {selectedWeek}
          </Typography>
          <IconButton className="chart-week-icon">
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => handleSelectWeek('Tuần 1')}>
            Tuần 1
          </MenuItem>
          <MenuItem onClick={() => handleSelectWeek('Tuần 2')}>
            Tuần 2
          </MenuItem>
        </Menu>
      </Box>

      {/* Chart */}
      <Box className="chart-content">
        <ResponsiveContainer width="100%" height={222}>
          <BarChart data={chartData}>
            <XAxis tickLine={false} dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 10]}
              tick={{ fontSize: 12 }}
              ticks={[0, 5, 10]}
            />

            <Bar
              dataKey="diem"
              fill="#FA9300"
              barSize={61.57}
              shape={<RoundedTopBar  />}
              background={{ fill: '#E6E6E6', radius: [10, 10, 0, 0] }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Box className="chart-footer-container">
        <Box className="chart-footer"></Box>
        <Typography variant="body1">Điểm</Typography>
      </Box>
    </CardContent>
  );
}
