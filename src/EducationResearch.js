import React from "react";
import { Container, Typography, Box, Grid, Divider, Paper } from "@mui/material";

// 🔹 教育與研究 Education & Research
function EducationResearch() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "left", mt: 8 }}>
      
      {/* 🔹 EDUCATION 區塊 */}
      <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center">
        EDUCATION
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        {[
          {
            degree: "Master of Science in Natural Language Processing",
            school: "University of California, Santa Cruz",
            date: "Sep 2024 - Present",
            details: "✓ Currently pursuing graduate studies in NLP",
          },
          {
            degree: "Bachelor of Science in Engineering Computer Science",
            school: "Yuan Ze University, Taoyuan, Taiwan",
            date: "Jul 2019 - Jun 2024",
          },
          {
            degree: "Bachelor of Science in Engineering",
            school: "Yuan Ze University, Taoyuan, Taiwan",
            date: "Jul 2019 - Jun 2024",
            details: "✓ Majors: Mechanical Engineering, Chemical Engineering and Materials Science",
          },
          {
            degree: "Computer Science",
            school: "University of California, Berkeley, USA",
            date: "Jun 2023 - Sep 2023",
            details: "✓ Semester exchange program",
          },
        ].map((edu, index) => (
          <Paper 
            key={index}
            elevation={3} 
            sx={{ p: 2, mb: 3, borderLeft: "5px solid #d1254f" }}
          >
            <Typography variant="h6" fontWeight="bold">{edu.degree}</Typography>
            <Typography variant="body1" color="textSecondary">{edu.school}</Typography>
            <Box 
              sx={{ 
                display: "inline-block", 
                backgroundColor: "#f091a1", 
                color: "white", 
                borderRadius: "5px", 
                padding: "5px 10px", 
                mt: 1 
              }}
            >
              {edu.date}
            </Box>
            {edu.details && (
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                {edu.details}
              </Typography>
            )}
          </Paper>
        ))}
      </Box>

      <Divider />
    </Container>
  );
}

export default EducationResearch;
