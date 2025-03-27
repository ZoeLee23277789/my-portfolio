import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "home" },
    { label: "About", path: "about" },
    { label: "Projects", path: "projects" },
    { label: "Education", path: "education-research" },
    { label: "Contact", path: "contact" }
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#9F8F89", boxShadow: "none", borderBottom: "0.1px solid #ddd" }}>
      <Toolbar sx={{ justifyContent: "space-between", height: { xs: "70px", md: "90px" }, maxWidth: "1200px" }}>

        {/* 左側 LOGO，點擊可回首頁 */}
        <Typography
          variant="h4"
          sx={{ color: "white", cursor: "pointer", fontFamily: "'Sofia', sans-serif", textDecoration: "none" }}
          component={Link}
          to="/home"
        >
          JOU YI
        </Typography>

        {/* 桌面版選單置中，行動版隱藏 */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={`/${item.path}`}
              sx={{
                color: "black",
                mx: 1,
                fontWeight: activeSection === item.path ? "bold" : "normal",
                borderBottom: activeSection === item.path ? "5px solid #FFFFF0" : "none",
                fontSize: { xs: "10px", md: "20px" },
                paddingX: { xs: "8px", md: "12px" }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* 右側社群媒體圖標 */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <IconButton href="https://www.linkedin.com/in/jou-yilee" target="_blank" sx={{ color: "white" }}>
            <LinkedInIcon sx={{ fontSize: "40px" }} />
          </IconButton>
          <IconButton href="https://github.com/ZoeLee23277789" target="_blank" sx={{ color: "white" }}>
            <GitHubIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        </Box>

        {/* 漢堡選單（行動版） */}
        <IconButton sx={{ display: { xs: "block", md: "none" }, color: "black" }} onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        {/* 行動版側邊選單 */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 200, backgroundColor: "white", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <List>
              {navItems.map((item) => (
                <ListItem 
                  button 
                  key={item.path} 
                  component={Link} 
                  to={`/${item.path}`} 
                  onClick={handleDrawerToggle}
                  sx={{ textAlign: "center", paddingY: 2 }}
                >
                  <ListItemText 
                    primary={item.label} 
                    sx={{
                      color: activeSection === item.path ? "#00BFFF" : "black",
                      textAlign: "center",
                      fontWeight: activeSection === item.path ? "bold" : "normal"
                    }} 
                  />
                </ListItem>
              ))}
            </List>

            {/* 🔹 社群圖示區塊 */}
            <Box sx={{ display: "flex", justifyContent: "center", pb: 3, gap: 2 }}>
              <IconButton href="https://www.linkedin.com/in/jou-yilee" target="_blank" sx={{ color: "#0e76a8" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/ZoeLee23277789" target="_blank" sx={{ color: "black" }}>
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
