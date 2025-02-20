import React from "react";
import { Container, Typography, Box, Grid, Divider, Paper } from "@mui/material";
function Projects() {
    
      return (      
        <Container maxWidth="md" sx={{ textAlign: "left", mt: 8 }}>      
          
    {/* 🔹 RESEARCH PROJECTS 區塊 */}
      <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center" sx={{ mt: 4 }}>
        RESEARCH
      </Typography>

      <Box sx={{ mb: 4 }}>
        {[
          {
            title: "Feature Engineering and Model Evaluation for E-commerce",
            advisor: "Jalal Mahmud, R&D",
            date: "Sep 2024 - Nov 2024",
            details: "✓ Optimized classifiers for sentiment analysis and product categorization.",
          },
          {
            title: "Relation Extraction from Natural Language",
            advisor: "Amita Misra, Amazon",
            date: "Sep 2024 - Nov 2024",
            details: "✓ Built deep learning models for relation extraction in conversational language.",
          },
          {
            title: "Slot Tagging for Natural Language",
            advisor: "Amita Misra, Amazon",
            date: "Sep 2024 - Nov 2024",
            details: "✓ Developed a PyTorch-based slot tagging model for virtual assistants.",
          },
          {
            title: "Mobile Robot Path Planning using Q-Learning",
            advisor: "SYED HUMAYOON SHAH, Yuan Ze University",
            date: "Feb 2023 - Sep 2024",
            details: "✓ Improved static navigation using Q-Learning and object detection (OpenCV, YOLOv9).",
          },
          {
            title: "Marine Debris ImageNet Visual Recognition",
            advisor: "Ching-Lueh Chang, Yuan Ze University",
            date: "Feb 2023 - Oct 2023",
            details: "✓ Designed visual recognition models for marine debris identification.",
          },
          {
            title: "Deterministic Sublinear-Time Approximations for Metric 1-Median Selection",
            advisor: "Ching-Lueh Chang, Yuan Ze University",
            date: "Feb 2022 - Jul 2023",
            details: "✓ Developed metric approximations for scalable data analysis.",
          },
        ].map((research, index) => (
          <Paper 
            key={index}
            elevation={3} 
            sx={{ p: 2, mb: 3, borderLeft: "5px solid #c14379" }}
          >
            <Typography variant="h6" fontWeight="bold">{research.title}</Typography>
            <Typography variant="body1" color="textSecondary">Advisor: {research.advisor}</Typography>
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
              {research.date}
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              {research.details}
            </Typography>
          </Paper>
        ))}
      </Box>

    </Container>
  );
    }

export default Projects;