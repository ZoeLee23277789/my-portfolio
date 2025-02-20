import React from "react";
import { Container, Grid, Typography, Box, Avatar ,Button} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom"; // ✅ 用於頁面跳轉
import { keyframes } from "@emotion/react";
import profilePic from "./About.jpg"; // 確保圖片檔案存在
import Skills from "./Skills"; // ✅ Skills 區塊
import resumeFile from "./Resume_UCSC.pdf"; // ✅ 確保履歷表文件在 public 或 src 目錄中
// ✅ 文字浮動動畫
const floatText = keyframes`
  0% { transform: translateY(0) translateZ(30px); }
  50% { transform: translateY(-5px) translateZ(35px); }
  100% { transform: translateY(0) translateZ(30px); }
`;

function About() {
  const navigate = useNavigate(); // ✅ 用於頁面跳轉
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/jou-yilee", "_blank");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: "linear-gradient(135deg, #FAF3E0, #EFE2EC)", // ✅ 淡粉色調
        backgroundSize: "400% 400%",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "left", // ✅ 確保內容靠左
          backgroundColor: "rgba(255, 255, 255, 0.6)", // ✅ 半透明白，柔和背景
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0px 15px 40px rgba(184, 26, 53, 0.2)", // ✅ 柔和粉色陰影
        }}
      >
        {/* 主標題 */}
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{
            fontFamily: "cursive",
            fontSize: "90px",
            color: "#b81a35",
            textShadow: "2px 2px 15px rgba(184, 26, 53, 0.5)", // ✅ 文字陰影
            animation: `${floatText} 2s infinite alternate`, // ✅ 文字浮動動畫
            textAlign: "center", // ✅ 讓文字置中
            width: "100%", // ✅ 確保佔滿父容器
          }}
        >
          ABOUT
        </Typography>

        {/* 置中分隔線 */}
        <Box
          sx={{
            width: "180px",
            height: "5px",
            backgroundColor: "#694b3c",
            margin: "10px auto 30px auto", // ✅ 讓線條完全置中
            borderRadius: "5px",
            boxShadow: "0px 0px 10px rgba(105, 75, 60, 0.8)", // ✅ 讓線條有陰影
          }}
        />


        {/* 🔹 設定 Grid 佈局，左側文字 + 右側圖片 */}
        <Grid container spacing={4} alignItems="center">
          
          {/* 🔹 左側：介紹文字 + 個人資料 (靠左對齊) */}
          <Grid 
            item 
            xs={12} 
            md={7} 
            sx={{ 
              textAlign: "left",  // ✅ 文字靠左
              display: "flex", 
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* 🔹 介紹文字 */}
            <Typography variant="h6" color="textSecondary" paragraph>
              Aspiring computer scientist with a strong background in engineering and research, aiming to leverage skills in
              machine learning, robotics, and software development for innovative projects in natural language processing.
            </Typography>

            {/* 🔹 個人資訊區塊 */}
            <Grid container spacing={2} sx={{ width: "100%" }}>
              <Grid item xs={12} sm={6}>
                <Typography>
                  <CheckIcon sx={{ color: "#b81a35" }} /> <strong>Freelance:</strong> Available
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#b81a35" }} /> <strong>Degree:</strong> Master of NLP UCSC
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#b81a35" }} /> <strong>Website:</strong> www.example.com
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>
                  <CheckIcon sx={{ color: "#b81a35" }} /> <strong>Email:</strong> zoelee19991226@gmail.com
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#b81a35" }} /> <strong>City:</strong> San Jose, CA, USA
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#b81a35" }} /> <strong>Phone:</strong> (+1) 408-618-9437
                </Typography>
              </Grid>
            </Grid>
{/* 按鈕區塊：下載履歷 + 前往 Projects */}
<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 6 }}>
  {/* 🔹 下載履歷按鈕 */}
  <Button
    variant="contained"
    component="a"
    href="./Resume_UCSC.pdf" // ✅ 指向你的履歷表文件
    download="Jou-Yi_Lee_Resume.pdf" // ✅ 下載時的文件名稱
    sx={{
      background: "linear-gradient(45deg, #f091a0, #d1254f)",
      boxShadow: "0px 10px 30px rgba(240, 145, 160, 0.7)",
      color: "white",
      borderRadius: "50px",
      padding: "10px 20px",
      fontSize: "20px",
      transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.1)",
        background: "#c2185b",
        boxShadow: "0px 15px 30px rgba(210, 37, 79, 0.9)",
      },
    }}
  >
    📄 Download Resume
  </Button>

  {/* 🔹 間隔區塊 (mt: 3 = 3 * 8px = 24px) */}
  <Box sx={{ mt: 3 }} />

  {/* 🔹 跳轉到 Projects 按鈕 */}
  <Button
    variant="contained"
    onClick={() => navigate("/projects")} // ✅ 跳轉到 Projects 頁面
    sx={{
      background: "linear-gradient(45deg, #6a82fb, #fc5c7d)",
      boxShadow: "0px 10px 30px rgba(106, 130, 251, 0.7)",
      color: "white",
      borderRadius: "50px",
      padding: "10px 20px",
      fontSize: "20px",
      transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.1)",
        background: "#4b6cb7",
        boxShadow: "0px 15px 30px rgba(75, 108, 183, 0.9)",
      },
    }}
  >
    🚀 View Projects
  </Button>
</Box>




          </Grid>


          {/* 🔹 右側圖片區塊 (點擊跳轉 LinkedIn) */}
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center",
              position: "relative",
            }}
          >
            <Avatar
              src={profilePic}
              alt="Jou-Yi Lee"
              onClick={handleLinkedInClick} // ✅ 點擊時開啟 LinkedIn
              sx={{
                width: "100%", // ✅ 確保填滿 Grid
                height: "90vh",
                maxWidth: "450px",
                borderRadius: "20px",
                cursor: "pointer", // ✅ 滑鼠變成可點擊
                boxShadow: "0px 15px 30px rgba(184, 26, 53, 0.3)", // ✅ 柔和粉色陰影
                transition: "transform 0.5s ease, box-shadow 0.5s ease", // ✅ 平滑動畫
                "&:hover": {
                  transform: "scale(1.05) rotateY(5deg)", // ✅ 懸停時微微放大
                  boxShadow: "0px 20px 40px rgba(184, 26, 53, 0.5)", // ✅ 懸停時陰影加強
                },
              }}
            />
          </Grid>
        </Grid>

        {/* ✅ 在 About 下方加入 Skills */}
        <Box sx={{ mt: 8 }}>
          <Skills />
        </Box>
      </Container>
    </Box>
  );
}

export default About;
