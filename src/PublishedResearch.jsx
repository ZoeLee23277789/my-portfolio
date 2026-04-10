import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PublishedResearch({ addRipple }) {
  const [openImage, setOpenImage] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");

  const researchImages = [
    {
      title: "Object Recognition",
      images: [
        {
          src: `${process.env.PUBLIC_URL}/research/ObjectRecognition.png`,
          alt: "YOLO object recognition result",
        },
      ],
    },
    {
      title: "Path Planning Result",
      images: [
        {
          src: `${process.env.PUBLIC_URL}/research/ShortPath.png`,
          alt: "Shortest path planning result",
        },
        {
          src: `${process.env.PUBLIC_URL}/research/PhysicalEnvironment.png`,
          alt: "Physical environment",
        },
        {
          src: `${process.env.PUBLIC_URL}/research/TargetRegion.png`,
          alt: "Target region",
        },
      ],
    },
    {
      title: "System Flow",
      images: [
        {
          src: `${process.env.PUBLIC_URL}/research/SystemFlowChart.png`,
          alt: "System flow chart for robot navigation",
        },
      ],
    },
    {
      title: "Q-Learning Process",
      images: [
        {
          src: `${process.env.PUBLIC_URL}/research/QlearningFlow.png`,
          alt: "Q-learning workflow chart",
        },
      ],
    },
  ];

  const handleOpenImage = (item) => {
    setSelectedImages(item.images);
    setSelectedTitle(item.title);
    setOpenImage(true);
  };

  const handleCloseImage = () => {
    setOpenImage(false);
    setSelectedImages([]);
    setSelectedTitle("");
  };

  return (
    <section id="research" className="section">
      <h2 className="section-title reveal">Published Research</h2>

      <div className="research-card reveal">
        <div className="research-header">
          <div>
            <h3>Mobile Robot Path Planning</h3>
            <p className="research-subtitle">
              Practical Implementation of Q-Learning and Object Detection for
              Mobile Robot Path Planning
            </p>
          </div>

          <a
            className="read-paper-btn magnetic"
            href="https://ieeexplore.ieee.org/document/10679961"
            target="_blank"
            rel="noreferrer"
            onClick={addRipple}
          >
            Read Paper
          </a>
        </div>

        <div className="research-content-grid">
          <div className="research-overview">
            <ul className="project-details">
              <li>
                Combined Q-Learning with YOLOv9 for navigation in static
                environments.
              </li>
              <li>Published at IEEE ARIS 2024.</li>
              <li>
                Connected real-time perception with decision-making for robotics
                applications.
              </li>
            </ul>
          </div>

          <div className="research-code-block">
            <Stack
              direction="row"
              spacing={1.2}
              useFlexGap
              flexWrap="wrap"
              sx={{ mt: 2 }}
            >
              {researchImages.map((item) => (
                <Button
                  key={item.title}
                  variant="outlined"
                  onClick={() => handleOpenImage(item)}
                  sx={{
                    fontWeight: 700,
                    borderRadius: "999px",
                    textTransform: "none",
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Stack>
          </div>
        </div>
      </div>

      <Dialog
        open={openImage}
        onClose={handleCloseImage}
        maxWidth="xl"
        fullWidth
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            pt: 1.5,
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: "1.2rem" }}>
            {selectedTitle}
          </Typography>

          <IconButton onClick={handleCloseImage}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ pt: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {selectedImages.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  width: "30%",
                  minWidth: "220px",
                  maxWidth: "360px",
                  height: "auto",
                  borderRadius: 2,
                  objectFit: "contain",
                }}
              />
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </section>
  );
}