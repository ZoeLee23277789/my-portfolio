// Home.js
import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import profilePic from "./Photo_3.jpg"; // 確保圖片存在於 src/ 或 public/ 資料夾
import './styles.css';
// 🔹 Hi! 的彈跳與漸變效果
const mixAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
    color: #EC7696;
    text-shadow: 0px 0px 15px rgba(236, 118, 150, 0.8);
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.8;
    color: #E74C7A;
    text-shadow: 0px 0px 25px rgba(231, 76, 122, 1);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
    color: #EC7696;
    text-shadow: 0px 0px 15px rgba(236, 118, 150, 0.8);
  }
`;
const mixAnimationMobile = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
    color: #EC7696;
    text-shadow: 0px 0px 10px rgba(236, 118, 150, 0.8);
  }
  50% {
    transform: translateY(-10px) scale(1.05);
    opacity: 0.9;
    color: #E74C7A;
    text-shadow: 0px 0px 15px rgba(231, 76, 122, 1);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
    color: #EC7696;
    text-shadow: 0px 0px 10px rgba(236, 118, 150, 0.8);
  }
`;

// 🔹 輪播標題的淡入向上動畫
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// 🔹 輪播標題陣列
const titles = [
  "Machine Learning Engineer",
  "AI Researcher",
  "Natural Language Processing Engineer",
  "Robotics & Intelligent Systems Developer",
];

function Home() {
  const navigate = useNavigate();
  const [titleIndex, setTitleIndex] = useState(0);

  // 每 3 秒切換一次標題
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 桌面版：與原版相同 */}
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "90px",
          display: { xs: "none", md: "block" },
          height: "100vh",
          background: "linear-gradient(to right, #fae6e6, #fce8e8)",
          padding: "0 1%",
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* 左側：文字與按鈕 */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              textAlign: "right",
              pr: { md: "5%" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Sofia', sans-serif",
                fontWeight: "bold",
                color: "#EC7696",
                fontSize: "100px",
                animation: `${mixAnimation} 2s infinite`,
              }}
            >
              Hi!
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: " Garamond, serif", fontWeight: "bold", textAlign: "right", mt: 2 }}>
              I'm JOU-YI LEE
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mt: 2,
                animation: `${fadeInUp} 1s ease-in-out`,
                color: "#b81a35",
              }}
            >
              {titles[titleIndex]}
            </Typography>
            <Typography variant="h6" sx={{ color: "#555",fontSize: "15px", mt: 1 }}>
              I'm a professional engineer from Taiwan.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "20px",
                mt: 4,
              }}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/hire")}
                sx={{
                  background: "linear-gradient(45deg, #f6a5c0, #d1254f)",
                  boxShadow: "0px 10px 30px rgba(246, 165, 192, 0.7)",
                  color: "white",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  fontSize: "18px",
                  transition:
                    "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    background: "#c2185b",
                    boxShadow: "0px 15px 30px rgba(210, 37, 79, 0.9)",
                  },
                }}
              >
                HIRE ME
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate("/about")}
                sx={{
                  background: "linear-gradient(45deg, #f091a0, #d1254f)",
                  boxShadow: "0px 10px 30px rgba(240, 145, 160, 0.7)",
                  color: "white",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  fontSize: "18px",
                  transition:
                    "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
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
          {/* 右側：圖片 */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* 內嵌 SVG 定義 clipPath，這裡以波浪狀作範例 */}
            <svg width="0" height="0">
              <defs>
                <clipPath id="wavyClip" clipPathUnits="objectBoundingBox">
                  <path d="M0,0.2 C0.25,0 0.75,0 1,0.2 L1,0.8 C0.75,1 0.25,1 0,0.8 Z" />
                </clipPath>
              </defs>
            </svg>
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100%",
                // 再次加上一層半透明粉色，以免邊緣退去時顏色突兀
                background: `
                  linear-gradient(
                    to right,
                    rgba(250,230,230,0.3),
                    rgba(252,232,232,0.3)
                  ),
                  url(${profilePic})
                `,
                backgroundSize: "contain", // 或 cover，看你要保留整張圖還是填滿
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "multiply", 
                transform: "translateX(-80px)",
                transition: "transform 0.3s ease",
                borderRadius: "10px",
                // 在這裡加入 clipPath 使圖片邊緣不再是直角，而是呈現自訂曲線
                clipPath: "url(#wavyClip)",
                // 利用線性漸層做「左右 → 中間」淡出，並多段停駐點使過渡更柔和
                maskImage: `
                  linear-gradient(
                    to right,
                    rgba(0,0,0,0)   0%,
                    rgba(0,0,0,0.05) 5%,
                    rgba(0,0,0,0.1) 10%,
                    rgba(0,0,0,0.1) 15%,
                    rgba(0,0,0,1)   40%,
                    rgba(0,0,0,1)   60%,
                    rgba(0,0,0,0.2) 85%,
                    rgba(0,0,0,0)   100%
                  )
                `,
                WebkitMaskImage: `
                  linear-gradient(
                    to right,
                    rgba(0,0,0,0)   0%,
                    rgba(0,0,0,0.2) 15%,
                    rgba(0,0,0,1)   40%,
                    rgba(0,0,0,1)   60%,
                    rgba(0,0,0,0.2) 85%,
                    rgba(0,0,0,0)   100%
                  )
                `,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      
{/* 手機版：上方顯示簡介，下方兩欄顯示按鈕（左側）與照片（右側） */}
<Container
  maxWidth="xl"
  sx={{
    display: { xs: "block", md: "none" },
    background: "linear-gradient(to right, #fae6e6, #fce8e8)",
    padding: "0 5%",
    overflow: "hidden",
  }}
>
  <Grid container direction="column" spacing={0}>
    {/* 上方：文字簡介，分成左右兩欄 */}
    <Grid container direction="row" spacing={0}>
      {/* 左側：Hi! */}
      <Grid item xs={3} sx={{ textAlign: "left", pt: 7, pb: 1, px: 2 }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Sofia', sans-serif",
            fontWeight: "bold",
            color: "#EC7696",
            fontSize: "85px",
            lineHeight: 1.05,
            animation: `${mixAnimationMobile} 2s infinite`,
          }}
        >
          Hi!
        </Typography>
      </Grid>
      {/* 右側：其他文字介紹 */}
      <Grid item xs={9} sx={{ textAlign: "right", pt: 4, pb: 1, px: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Garamond, serif",
            fontSize: "30px",
            fontWeight: "bold",
            mt: 1,
          }}
        >
          I'M JOU-YI LEE
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            mt: 1,
            animation: `${fadeInUp} 1s ease-in-out`,
            color: "#b81a35",
          }}
        >
          {titles[titleIndex]}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "right", fontSize: "10px", color: "#555", mt: 1 }}>
          I'm a professional engineer from Taiwan.
        </Typography>
      </Grid>
    </Grid>

    {/* 下方：按鈕與照片（水平排列），調整按鈕佔比較少 */}
    <Grid item xs={12}>
      <Grid container direction="row" spacing={1} alignItems="center">
        {/* 左側：按鈕區，垂直排列，佔 4/12 */}
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            pl: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/hire")}
            sx={{
              background: "linear-gradient(45deg, #f6a5c0, #d1254f)",
              boxShadow: "0px 10px 30px rgba(246, 165, 192, 0.7)",
              color: "white",
              borderRadius: "50px",
              padding: "10px 20px",
              fontSize: "16px",
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
          <Button
            variant="contained"
            onClick={() => navigate("/about")}
            sx={{
              background: "linear-gradient(45deg, #f091a0, #d1254f)",
              boxShadow: "0px 10px 30px rgba(240, 145, 160, 0.7)",
              color: "white",
              borderRadius: "50px",
              padding: "10px 20px",
              fontSize: "16px",
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
        </Grid>

        {/* 右側：照片區，佔 8/12 */}
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pr: 2,
          }}
        >
          {/* 嵌入與桌面版相同的 clipPath */}
          <svg width="0" height="0">
            <defs>
              <clipPath id="wavyClipMobile" clipPathUnits="objectBoundingBox">
                <path d="M0,0.2 C0.25,0 0.75,0 1,0.2 L1,0.8 C0.75,1 0.25,1 0,0.8 Z" />
              </clipPath>
            </defs>
          </svg>
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "350px",
              background: `
                linear-gradient(
                  to right,
                  rgba(250,230,230,0.3),
                  rgba(252,232,232,0.3)
                ),
                url(${profilePic})
              `,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
              borderRadius: "10px",
              clipPath: "url(#wavyClipMobile)",
              maskImage: `
                linear-gradient(
                  to right,
                  rgba(0,0,0,0)   0%,
                  rgba(0,0,0,0.05) 5%,
                  rgba(0,0,0,0.08) 10%,
                  rgba(0,0,0,0.1) 15%,
                  rgba(0,0,0,1)   40%,
                  rgba(0,0,0,1)   60%,
                  rgba(0,0,0,0.2) 85%,
                  rgba(0,0,0,0)   100%
                )
              `,
              WebkitMaskImage: `
                linear-gradient(
                  to right,
                  rgba(0,0,0,0)   0%,
                  rgba(0,0,0,0.2) 15%,
                  rgba(0,0,0,08)   40%,
                  rgba(0,0,0,1)   60%,
                  rgba(0,0,0,0.2) 85%,
                  rgba(0,0,0,0)   100%
                )
              `,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Container>

</>
  );
}

export default Home;
