import React, { useState } from "react";
import { Box, Typography, Divider, LinearProgress } from "@mui/material";
import "@/styles/Rank.css";

function Rank() {
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [showAllRank, setShowAllRank] = useState(false);

  const dataRank = [
    {
      id: 1,
      name: "MD",
      role: "Người dùng",
      img: "src/assets/lua.png",
      score: 360,
      progress: 85, 
    },
    {
      id: 2,
      name: "Anna",
      role: "Người dùng",
      img: "src/assets/da.png",
      score: 295,
      progress: 60,
    },
    {
      id: 3,
      name: "Linh",
      role: "Người dùng",
      img: "src/assets/lua.png",
      score: 270,
      progress: 45,
    },
  ];

  const dataTasks = [
    {
      id: 1,
      title: "Hoàn thành bài học",
      img: "src/assets/lua.png",
      done: 10,
      total: 20,
    },
    {
      id: 2,
      title: "Kiếm thêm 20 vàng",
      img: "src/assets/da.png",
      done: 12,
      total: 20,
    },
    {
      id: 3,
      title: "Đọc 5 câu chuyện",
      img: "src/assets/lua.png",
      done: 3,
      total: 5,
    },
    {
      id: 4,
      title: "Hoàn thành quiz",
      img: "src/assets/da.png",
      done: 8,
      total: 10,
    },
    {
      id: 5,
      title: "Luyện tập 30 phút",
      img: "src/assets/lua.png",
      done: 25,
      total: 30,
    },
  ];

  const handleToggleTasks = () => {
    setShowAllTasks(!showAllTasks);
  };

  const handleToggleRank = () => {
    setShowAllRank(!showAllRank);
  };

  const displayedTasks = showAllTasks ? dataTasks : dataTasks.slice(0, 2);
  const displayedRank = showAllRank ? dataRank : dataRank.slice(0, 3);

  return (
    <Box className="rank-container">
      <Box className="rank-header">
        <Box className="rank-header-content">
          <Typography variant="h5">Bảng xếp hạng</Typography>
          <Typography 
            variant="h6" 
            className="see-all"
            onClick={handleToggleRank}
          >
            {showAllRank ? "Thu gọn" : "Xem tất cả"}
          </Typography>
        </Box>

        <Box className="rank-content">
          {displayedRank.map((user) => (
            <Box key={user.id} className="rank-item">
              <Box className="rank-item-header">
                <Box className="rank-item-header-user">
                  <Typography variant="body1">{user.name}</Typography>
                </Box>
                <Typography variant="body1">{user.role}</Typography>
                <Box className="rank-item-header-user-info">
                  <img src={user.img} alt={user.name} />
                  <Typography variant="body2">{user.score}</Typography>
                </Box>
              </Box>

              <Box className="rank-tanggiam">
                <LinearProgress
                  variant="determinate"
                  value={user.progress}
                  className="linear"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider className="rank-divider"></Divider>
      <Box className="rank-task">
        <Box className="rank-header-content">
          <Typography variant="h5">Nhiệm vụ hằng ngày</Typography>
          <Typography 
            variant="h6" 
            className="see-all"
            onClick={handleToggleTasks}
          >
            {showAllTasks ? "Thu gọn" : "Xem tất cả"}
          </Typography>
        </Box>

        <Box className="rank-task-content">
          {displayedTasks.map((task) => {
            const percent = (task.done / task.total) * 100;
            return (
              <Box key={task.id} className="rank-task-item">
                <img src={task.img} alt={task.title} />
                <Box className="rank-task-info">
                  <Typography variant="body1">{task.title}</Typography>
                  <Box className="rank-task-progress">
                    <LinearProgress
                      variant="determinate"
                      value={percent}
                      className="linear"
                    />
                    <Typography variant="body2">
                      {task.done}/{task.total}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Rank;
