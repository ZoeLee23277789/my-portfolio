import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import profilePic from "./Photo_3.jpg"; // 確保圖片存在 src/ 或 public/ 資料夾

// 🔹 定義標題變換動畫
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(10px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

// 🔹 定義動畫（彈跳與漸變效果）
const mixAnimation = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 1; color: #EC7696; text-shadow: 0px 0px 15px rgba(236, 118, 150, 0.8); }
  50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; color: #E74C7A; text-shadow: 0px 0px 25px rgba(231, 76, 122, 1); }
  100% { transform: translateY(0) scale(1); opacity: 1; color: #EC7696; text-shadow: 0px 0px 15px rgba(236, 118, 150, 0.8); }
`;

// 🔹 標題選項
const titles = [
  "Machine Learning Engineer",
  "AI Researcher",
  "Natural Language Processing (NLP) Engineer",
  "Robotics & Intelligent Systems Developer",
];

function Home() {
  const navigate = useNavigate();
  const [titleIndex, setTitleIndex] = useState(0);

  // 🔹 每 3 秒變換標題
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container 
      maxWidth="xl"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "right",
        justifyContent: "right",
        background: "linear-gradient(to right, #fae6e6, #fce8e8)", // 背景漸變
        padding: "0 5%",
      }}
    >
      {/* 左半邊：文字介紹 */}
      <Grid container sx={{ height: "100vh" }}>
        <Grid 
          item 
          xs={12} md={6} 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "right",
            paddingRight: "0%",
          }}
        >
          {/* Hi! 文字動畫 */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "cursive",
              fontWeight: "bold",
              color: "#EC7696",
              fontSize: "100px",
              animation: `${mixAnimation} 2s infinite`,
            }}
          >
            Hi!
          </Typography>

          <Typography variant="h3" sx={{ fontWeight: "bold", mt: 2, marginLeft: "auto" }}>I'M JOU-YI LEE</Typography>

          {/* 會變換的標題 */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mt: 2,
              animation: `${fadeInUp} 1s ease-in-out`,
              color: "#b81a35", // 深粉紅
            }}
          >
            {titles[titleIndex]}
          </Typography>

          <Typography variant="h6" sx={{ color: "#555", mt: 1 }}>
            I'm a professional engineer from Taiwan.
          </Typography>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "30px", mt: 4 }}>
              {/* HIRE ME 按鈕 */}
              <Button
                variant="contained"
                onClick={() => navigate("/hire")}
                sx={{
                  background: "linear-gradient(45deg, #f6a5c0, #d1254f)",
                  boxShadow: "0px 10px 30px rgba(246, 165, 192, 0.7)",
                  color: "white",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  fontSize: "30px",
                  transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    background: "#c2185b",
                    boxShadow: "0px 15px 30px rgba(210, 37, 79, 0.9)",
                  },
                }}
              >
                HIRE ME
              </Button>

              {/* ABOUT ME 按鈕 */}
              <Button
                variant="contained"
                onClick={() => navigate("/about")}
                sx={{
                  background: "linear-gradient(45deg, #f091a0, #d1254f)",
                  boxShadow: "0px 10px 30px rgba(240, 145, 160, 0.7)",
                  color: "white",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  fontSize: "30px",
                  transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    background: "#c2185b",
                    boxShadow: "0px 15px 30px rgba(210, 37, 79, 0.9)",
                  },
                }}
              >
                ABOUT ME
              </Button>
            </Box>



        </Grid>

        {/* 右半邊：照片區塊（修正圖片顯示） */}
        <Grid 
          item 
          xs={12} md={6} 
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              position: "absolute",
              top: 0,
              right: 0,
              overflow: "hidden",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              transform: "translateX(-40px)", // ✅ 往右移 50px
            }}
          >
            {/* 這裡用 Box，而不是 Avatar，來完全控制顯示效果 */}
            <Box
              sx={{
                width: "100%",
                height: "115vh",
                backgroundImage: `url(${profilePic})`,
                backgroundSize: "contain", // **確保圖片完整顯示**
                backgroundPosition: "top right", // **頂部不被裁切**
                backgroundRepeat: "no-repeat",
                borderRadius: "10px 10px 10px 0", // **左側圓角**
                maskImage: "linear-gradient(to left, rgba(255,255,255,1) 7%, rgba(255,255,255,0) 100%)",
                WebkitMaskImage: "linear-gradient(to left, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)",

              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
