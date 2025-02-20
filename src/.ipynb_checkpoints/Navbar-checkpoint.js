import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Education", path: "/education-research" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#9F8F89", boxShadow: "none", borderBottom: "0.1px solid #ddd" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* 左側 LOGO，點擊可回首頁 */}
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: "bold", cursor: "pointer", fontFamily: "Didot" }}
          component={Link}
          to="/home"
        >
          JOU-YI
        </Typography>

        {/* 桌面版選單置中，行動版隱藏 */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: "black",
                mx: 1,
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                borderBottom: location.pathname === item.path ? "5px solid #FFFFF0" : "none",
                fontSize: "20px"  // ✅ 這裡改變文字大小 
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        {/* 右側社群媒體圖標 */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <IconButton href="https://www.linkedin.com/in/jou-yilee" target="_blank" sx={{ color: "white" }}>
            <LinkedInIcon sx={{ fontSize: "60px" }}/>
          </IconButton>
          <IconButton href="https://github.com/ZoeLee23277789" target="_blank" sx={{ color: "white" }}>
            <GitHubIcon sx={{ fontSize: "60px" }}/>
          </IconButton>
        </Box>



        {/* 漢堡選單（行動版） */}
        <IconButton sx={{ display: { xs: "block", md: "none" }, color: "black" }} onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        {/* 行動版側邊選單 */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 200, backgroundColor: "white", height: "100%" }}>
            <List>
              {navItems.map((item) => (
                <ListItem button key={item.path} component={Link} to={item.path} onClick={handleDrawerToggle}>
                  <ListItemText 
                    primary={item.label} 
                    sx={{
                      color: location.pathname === item.path ? "#00BFFF" : "black",
                      textAlign: "center",
                      fontWeight: location.pathname === item.path ? "bold" : "normal"
                    }} 
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
