import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Grid, LinearProgress, Divider } from "@mui/material";

// 🔹 技能分類
const categorizedSkills = {
  "Programming Languages": [
    { name: "Python", value: 90 },
    { name: "C++", value: 90 },
    { name: "MATLAB", value: 75 },
    { name: "JavaScript", value: 50 },
    { name: "HTML", value: 50 },
    { name: "CSS", value: 50 },
  ],
  "Machine Learning & AI": [
    { name: "PyTorch", value: 55 },
    { name: "OpenCV", value: 35 },
    { name: "Selenium", value: 60 },  // ✅ 加入 Selenium
    { name: "Scrapy", value: 40 },    // ✅ 加入 Scrapy
  ],
  "Engineering Software": [
    { name: "SolidWorks", value: 65 },
    { name: "AutoCAD", value: 45 },
  ],
};

function Skills() {
  const [progress, setProgress] = useState(
    Object.values(categorizedSkills).flat().map(() => 0)
  ); // 初始值全為 0

  useEffect(() => {
    const animateProgress = () => {
      setProgress((prevProgress) =>
        prevProgress.map((oldValue, i) =>
          oldValue < Object.values(categorizedSkills).flat()[i].value
            ? oldValue + 2
            : Object.values(categorizedSkills).flat()[i].value
        )
      );
    };

    const timer = setInterval(animateProgress, 50); // 每 50ms 增長 2%

    return () => clearInterval(timer);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      {/* 主標題 */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          color: "#b81a35", // 🔹 深粉色
        }}
      >
        SKILLS
      </Typography>
      <Box
        sx={{
          width: "80px",
          height: "4px",
          backgroundColor: "#8a2623", // 🔹 深粉色
          margin: "10px auto 30px",
          borderRadius: "5px",
        }}
      />

      {/* 遍歷技能類別 */}
      {Object.entries(categorizedSkills).map(([category, skills], categoryIndex) => (
        <Box key={categoryIndex} sx={{ mt: 4 }}>
          {/* 類別標題 */}
          <Typography variant="h5" fontWeight="bold" sx={{ textAlign: "left", color: "#b81a35", mb: 2 }}>
            {category}
          </Typography>

          <Grid container spacing={3}>
            {skills.map((skill, index) => {
              const globalIndex =
                Object.values(categorizedSkills)
                  .slice(0, categoryIndex)
                  .flat().length + index; // 計算進度條的 index

              return (
                <Grid item xs={12} md={6} key={skill.name}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography fontWeight="bold">{skill.name}</Typography>
                    <Typography fontWeight="bold">{progress[globalIndex]}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={progress[globalIndex]}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      backgroundColor: "#fadce9", // 🔹 粉色背景
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#ef939e", // 🔹 深粉色進度條
                        transition: "width 0.5s ease-in-out",
                      },
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>

          {/* 分隔線 (如果不是最後一個分類) */}
          {categoryIndex < Object.entries(categorizedSkills).length - 1 && (
            <Divider sx={{ my: 4, backgroundColor: "#ddd" }} />
          )}
        </Box>
      ))}
    </Container>
  );
}

export default Skills;
