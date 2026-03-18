import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% { background-position: 0% 50%; filter: drop-shadow(0 0 0px rgba(106,228,255,0.0)); }
  50% { background-position: 100% 50%; filter: drop-shadow(0 0 18px rgba(106,228,255,0.25)); }
  100% { background-position: 0% 50%; filter: drop-shadow(0 0 0px rgba(106,228,255,0.0)); }
`;

function LoadingScreen({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish?.();
    }, 1400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#070A12",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            letterSpacing: "-0.02em",
            background:
              "linear-gradient(90deg, rgba(106,228,255,1), rgba(179,157,255,1), rgba(84,240,181,1))",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: `${shimmer} 1.2s ease-in-out infinite`,
          }}
        >
          Booting Portfolio
        </Typography>
        <Typography
          sx={{
            mt: 1,
            fontFamily: "JetBrains Mono, monospace",
            color: "rgba(232,236,247,0.65)",
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            fontSize: 12,
          }}
        >
          loading modules…
        </Typography>
      </Box>
    </Box>
  );
}

export default LoadingScreen;
