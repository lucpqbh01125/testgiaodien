import React, { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import "@/styles/Sidebar.css";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openKhoaHoc, setOpenKhoaHoc] = useState(false);
  const [openXemThem, setOpenXemThem] = useState(false);
  const [openNgoaiNgu, setOpenNgoaiNgu] = useState(false);

  const submenuData = {
    khoaHoc: [
      { label: "Khóa K12" },
      {
        label: "Khóa Ngoại Ngữ",
      },
      { label: "Khóa Kỹ năng sống" },
    ],
    xemThem: ["Syllabus", "Bộ môn", "Sinh viên"],
  };

  return (
    <Box className={`sidebar-container sidebar ${collapsed ? "collapsed" : ""}`}>
      <Box className="sidebar-wrapper">
        <Box className="sidebar-header">
          <Box className="sidebar-title">
            <img src="src/assets/logo.png" alt="Logo" />
            <Typography variant="h6">Foxgo</Typography>
          </Box>
          <ChevronLeftIcon
            className={`sidebar-icon ${collapsed ? "rotate" : ""}`}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Box>
      </Box>

      <Box className="sidebar">
        <Box className="sidebar-menu">
          <Box className="sidebar-menu-item">
            <img src="src/assets/trangchu.png" alt="" />
            <Link to="/login" className="sidebar-link">
              <Typography variant="body1">Trang chủ</Typography>
            </Link>
          </Box>

          <Box className="sidebar-form-menu">
            <Box className="sidebar-menu-item">
              <img src="src/assets/nhiemvu.png" alt="" />
              <Typography variant="body1">Nhiệm vụ</Typography>
            </Box>
          </Box>

          <Box className="sidebar-form-menu">
            <Box className="sidebar-menu-item">
              <img src="src/assets/baigiang.png" alt="" />
              <Typography variant="body1">Bài giảng</Typography>
            </Box>
          </Box>

          <Box className="sidebar-form-menu">
            <Box className="sidebar-menu-item">
              <img src="src/assets/onluyen.png" alt="" />
              <Typography variant="body1">Ôn luyện</Typography>
            </Box>
          </Box>

          <Box className="sidebar-form-menu">
            <Box className="sidebar-menu-item">
              <img src="src/assets/danhgia.png" alt="" />
              <Typography variant="body1">Đánh giá</Typography>
            </Box>
          </Box>

          <Box className="sidebar-form-menu">
            <Box className="sidebar-menu-item" onClick={() => setOpenKhoaHoc(!openKhoaHoc)}>
              <img src="src/assets/khoahoc.png" alt="" />
              <Typography variant="body1">Khóa học</Typography>
              <ExpandMoreIcon className={`sidebar-icon ${openKhoaHoc ? "rotate" : ""}`} />
            </Box>

            <Collapse in={openKhoaHoc} timeout="auto" unmountOnExit>
              <Box className="sidebar-submenu">
                {submenuData.khoaHoc.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {!item.children ? (
                      <Typography variant="body2">{item.label}</Typography>
                    ) : (
                      <Box>
                        <Box
                          className="sidebar-submenu-item"
                          onClick={() => setOpenNgoaiNgu(!openNgoaiNgu)}

                        >
                          <Typography variant="body2">{item.label}</Typography>
                          <ExpandMoreIcon
                            className={`sidebar-icon ${openNgoaiNgu ? "rotate" : ""}`}
                          />
                        </Box>

                        <Collapse in={openNgoaiNgu} timeout="auto" unmountOnExit>
                          <Box className="sidebar-submenu">
                            {item.children.map((child, i) => (
                              <Typography variant="body2" key={i}>
                                {child}
                              </Typography>
                            ))}
                          </Box>
                        </Collapse>
                      </Box>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Collapse>
          </Box>

          <Box className="sidebar-form-menu">
            <Box className="sidebar-menu-item" onClick={() => setOpenXemThem(!openXemThem)}>
              <img src="src/assets/xemthem.png" alt="" />
              <Typography variant="body1">Xem thêm</Typography>
              <ExpandMoreIcon className={`sidebar-icon ${openXemThem ? "rotate" : ""}`} />
            </Box>

            <Collapse in={openXemThem} timeout="auto" unmountOnExit>
              <Box className="sidebar-submenu">
                {submenuData.xemThem.map((item, idx) => (
                  <Typography variant="body2" key={idx}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Collapse>
          </Box>
        </Box>

        <Box className="sidebar-menu-submenu">
          <Box className="sidebar-menu-item">
            <img src="src/assets/trogiup.png" alt="" />
            <Typography variant="body1">Trợ giúp</Typography>
          </Box>
          <Box className="sidebar-menu-item">
            <img src="src/assets/caidat.png" alt="" />
            <Typography variant="body1">Cài đặt</Typography>
          </Box>
          <Box className="sidebar-menu-item">
            <img src="src/assets/dangxuat.png" alt="" />
            <Link to="/login" className="sidebar-link">
              <Typography variant="body1">Đăng xuất</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
