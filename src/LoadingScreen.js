import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import "@fontsource/pacifico"; // ✅ 確保字體可用

/** 🔹 定義更明顯的漸變動畫 */
const gradient = keyframes`
  0% { background-position: 0% 50%; text-shadow: 0px 0px 10px rgba(255, 69, 0, 0.5); }
  50% { background-position: 100% 50%; text-shadow: 0px 0px 20px rgba(255, 69, 0, 0.8); }
  100% { background-position: 0% 50%; text-shadow: 0px 0px 10px rgba(255, 69, 0, 0.5); }
`;

function LoadingScreen({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) {
        onFinish();
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#fbf4f2", // 胭脂粉背景
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Pacifico', cursive", // ✅ 手寫藝術風格
          fontSize: "180px",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #8B0000, #FF4500, #FFD700, #FF69B4, #C71585)",
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `${gradient} 2.5s infinite ease-in-out`,
        }}
      >
        Hello!
      </Typography>
    </Box>
  );
}

export default LoadingScreen;
