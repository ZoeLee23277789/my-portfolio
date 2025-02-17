import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { 
  Container, 
  Typography, 
  Box, 
  AppBar, 
  Toolbar, 
  Button, 
  Grid, 
  List, 
  ListItem, 
  ListItemText, 
  Avatar ,
  Divider 
} from "@mui/material";
import profilePic from "./Photo.jpg"; // 確保這個照片存在 src/ 或 public/ 資料夾

// 🔹 導覽列
function Navbar() {
  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: "white", boxShadow: "none", borderBottom: "1px solid #ddd" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "black" }}>
          My Portfolio.
        </Typography>
        <Box>
          <Button component={Link} to="/" sx={{ color: "black", mx: 1 }}>
            Home
          </Button>
          <Button component={Link} to="/education-research" sx={{ color: "black", mx: 1 }}>
            Education & Research
          </Button>
{/* <Button component={Link} to="/portfolio" sx={{ color: "black", mx: 1 }}>
          //   Portfolio
          // </Button>*/}
          <Button component={Link} to="/contact" sx={{ color: "black", mx: 1 }}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// 🔹 首頁

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Grid container spacing={4} alignItems="center">
          
        {/* 🔹 右邊：個人照片 + 社群連結（確保完全置中） */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar 
            src={profilePic} 
            alt="Jou-Yi Lee" 
            sx={{ width: 300, height: 300, borderRadius: "10px", boxShadow: 3 }} 
          />
          {/* 🔹 名字 */}
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
            Jou-Yi Lee
          </Typography>



          {/* 🔹 LinkedIn & GitHub 連結 */}
          <Box mt={2} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Connect with me:
            </Typography>
            <Typography>
              <Link 
                href="https://www.linkedin.com/in/jou-yilee" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "#0077B5" }} // LinkedIn 標準藍色
              >
                LinkedIn
              </Link>
            </Typography>
            <Typography>
              <Link 
                href="https://github.com/ZoeLee23277789" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "#333" }} // GitHub 標準黑色
              >
                GitHub
              </Link>
            </Typography>
          </Box>
        </Grid>
        
        {/* 🔹 左邊：ABOUT ME + 技能 */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            ABOUT ME
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Aspiring computer scientist with a strong background in engineering and research, 
            aiming to leverage skills in machine learning, robotics, and software development 
            for innovative projects in natural language processing.
          </Typography>

          {/* 🔹 技能列表 */}
          <Box mt={3}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Skills
            </Typography>
            <List>
              <ListItem><ListItemText primary="Programming Languages: C++, Python, MATLAB" /></ListItem>
              <ListItem><ListItemText primary="Software: PyTorch, TensorFlow, Scikit-learn, NLTK, OpenCV" /></ListItem>
              <ListItem><ListItemText primary="Embedded Systems: Raspberry Pi, Arduino" /></ListItem>
              <ListItem><ListItemText primary="Mechanical Design: 3D Printing, SolidWorks, AutoCAD" /></ListItem>
              <ListItem><ListItemText primary="Soft Skills: Self-driven learning, Innovation, Problem-solving" /></ListItem>
            </List>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
}


// 🔹 作品集頁面----------------------------------------------------------------------------------------------
// function Portfolio() {
//   return (
//     <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
//       <Typography variant="h3" gutterBottom>
//         我的作品集
//       </Typography>
//       <Typography variant="h6">
//         這裡是你的專案展示區
//       </Typography>
//     </Container>
//   );
// }

// 🔹 聯絡頁面------------------------------------------------------------------------------------------------
function Contact() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>

      <Typography variant="h6" gutterBottom>
        Email: zoelee19991226@gmail.com
      </Typography>

      <Typography variant="h6" gutterBottom>
        Phone (USA): +1 408-618-9437
      </Typography>

      <Typography variant="h6">
        Phone (Taiwan): +886 978-716-605
      </Typography>
    </Container>
  );
}

// 🔹 關於頁面----------------------------------------------------------------------------------------------
function EducationResearch() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "left", mt: 8 }}>
      
      {/* 🔹 EDUCATION 區塊 */}
      <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center">
        EDUCATION
      </Typography>
      <Box sx={{ mb: 4 }}>
         
          
        <Typography variant="h6" fontWeight="bold">
          Master of Science in Natural Language Processing 
        </Typography>
        <Typography variant="body1">University of California, Santa Cruz (Sep 2024 - Present)</Typography>
        <Typography variant="body2" color="textSecondary">✓ Currently pursuing graduate studies in NLP</Typography>



        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Bachelor of Science in Engineering Computer Science 
        </Typography>
        <Typography variant="body1">Yuan Ze University, Taoyuan, Taiwan (Jul 2019 - Jun 2024) </Typography>


        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Bachelor of Science in Engineering 
        </Typography>
        <Typography variant="body1">Yuan Ze University, Taoyuan, Taiwan (Jul 2019 - Jun 2024)</Typography>
        <Typography variant="body2" color="textSecondary">✓ Majors: Mechanical Engineering, Chemical Engineering and Materials Science</Typography>


        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Computer Science 
        </Typography>
        <Typography variant="body1">University of California, Berkeley, USA (Jun 2023 - Sep 2023)</Typography>
        <Typography variant="body2" color="textSecondary">✓ Semester exchange program</Typography>
      </Box>

      <Divider />

    {/* 🔹 RESEARCH PROJECTS 區塊 */}
    <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center" sx={{ mt: 4 }}>
      RESEARCH
    </Typography>
    <List>
      <ListItem>
        <ListItemText 
          primary="Feature Engineering and Model Evaluation for E-commerce "
          secondary={
            <>
              Advisor: Jalal Mahmud, R&D (Sep 2024 - Nov 2024)<br />
              ✓ Optimized classifiers for sentiment analysis and product categorization.
            </>
          }
        />
      </ListItem>

      <ListItem>
        <ListItemText 
          primary="Relation Extraction from Natural Language "
          secondary={
            <>
              Advisor: Amita Misra, Amazon (Sep 2024 - Nov 2024)<br />
              ✓ Built deep learning models for relation extraction in conversational language.
            </>
          }
        />
      </ListItem>

      <ListItem>
        <ListItemText 
          primary="Slot Tagging for Natural Language (Sep 2024 - Nov 2024)"
          secondary={
            <>
              Advisor: Amita Misra, Amazon <br />
              ✓ Developed a PyTorch-based slot tagging model for virtual assistants.
            </>
          }
        />
      </ListItem>

      <ListItem>
        <ListItemText 
          primary="Mobile Robot Path Planning using Q-Learning "
          secondary={
            <>
              Advisor: SYED HUMAYOON SHAH, Yuan Ze University (Feb 2023 - Sep 2024)<br />
              ✓ Improved static navigation using Q-Learning and object detection (OpenCV, YOLOv9).
            </>
          }
        />
      </ListItem>

      <ListItem>
        <ListItemText 
          primary="Marine Debris ImageNet Visual Recognition "
          secondary={
            <>
              Advisor: Ching-Lueh Chang, Yuan Ze University (Feb 2023 - Oct 2023)<br />
              ✓ Designed visual recognition models for marine debris identification.
            </>
          }
        />
      </ListItem>

      <ListItem>
        <ListItemText 
          primary="Deterministic Sublinear-Time Approximations for Metric 1-Median Selection "
          secondary={
            <>
              Advisor: Ching-Lueh Chang, Yuan Ze University (Feb 2022 - Jul 2023)<br />
              ✓ Developed metric approximations for scalable data analysis.
            </>
          }
        />
      </ListItem>
    </List>

    </Container>
  );
}


// 🔹 主程式
// 確保 "/" 對應 Home
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* ✅ 設定首頁 */}
        <Route path="/education-research" element={<EducationResearch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
