import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const experiences = [
  {
    role: "DevOps Engineer / Full-Stack Engineer Intern",
    company: "TSMC",
    period: "Jun 2025 – Sep 2025",
    type: "Industry Experience",
    logo: `${process.env.PUBLIC_URL}/logos/tsmc.png`,
    points: [
      "Built equipment status tracking features with React, JavaScript, and Python services.",
      "Containerized services with Docker and supported CI/CD-based development workflows.",
      "Collaborated across teams on debugging, requirement updates, and release integration.",
    ],
    tags: ["React", "Docker", "CI/CD", "Python"],
  },
  {
    role: "Capstone Collaboration",
    company: "Adobe",
    period: "Apr 2025 – Dec 2025",
    type: "Capstone / Applied AI",
    logo: `${process.env.PUBLIC_URL}/logos/adobe.png`,
    poster: `${process.env.PUBLIC_URL}/posters/adobe-poster.jpg`,
    singleActionLink:
      "https://drive.google.com/file/d/16EUr-58UBrMPoHlxXqFoj7t2GH1Jr2O0/view?usp=sharing",
    dynamicPlanningLink:
      "https://drive.google.com/file/d/1AbQ79UWix4BgAcAJ0SZAwAMujhH52vJI/view?resourcekey",
    points: [
      "Designed an LLM-driven GUI agent for multi-step creative workflows in Adobe Express.",
      "Built custom tool abstractions for canvas, Shadow DOM, and structured UI interaction.",
      "Improved task reliability with retrieval, planning, and iterative execution logic.",
    ],
    tags: ["LLM", "GUI Agent", "RAG", "Automation"],
  },
];

export default function WorkExperience() {
  const [openPoster, setOpenPoster] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleOpenPoster = (exp) => {
    if (!exp.poster) return;
    setSelectedPoster(exp.poster);
    setSelectedTitle(`${exp.company} Poster`);
    setOpenPoster(true);
  };

  const handleClosePoster = () => {
    setOpenPoster(false);
    setSelectedPoster("");
    setSelectedTitle("");
  };

  return (
    <section id="experience" className="section">
      <Container maxWidth="lg">
        <h2 className="section-title reveal">Work Experience</h2>

        <Typography
          className="section-copy reveal"
          sx={{
            textAlign: "center",
            maxWidth: 900,
            mx: "auto",
            mb: 3.2,
            fontSize: { xs: "1.22rem", md: "1.5rem" },
            lineHeight: 1.75,
            color: "var(--muted)",
          }}
        >
          Industry and applied AI experience across production systems,
          developer tooling, and interface automation.
        </Typography>

        <Grid container spacing={2.2}>
          {experiences.map((exp, index) => {
            const clickable = Boolean(exp.poster);
            const hasSingleActionLink = Boolean(exp.singleActionLink);
            const hasDynamicPlanningLink = Boolean(exp.dynamicPlanningLink);

            return (
              <Grid item xs={12} key={index}>
                <Box
                  className="content-card work-card reveal"
                  onClick={() => clickable && handleOpenPoster(exp)}
                  sx={{
                    cursor: clickable ? "pointer" : "default",
                    transition: "transform 0.22s ease, box-shadow 0.22s ease",
                    "&:hover": clickable
                      ? {
                          transform: "translateY(-4px)",
                          boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
                        }
                      : {},
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", md: "center" },
                      flexDirection: { xs: "column", md: "row" },
                      gap: { xs: 1.6, md: 1.8 },
                      mb: 1.8,
                    }}
                  >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Stack
                        direction="row"
                        spacing={1.6}
                        alignItems="center"
                        sx={{ mb: 0.4 }}
                      >
                        <Box
                          sx={{
                            width: { xs: 68, md: 84 },
                            height: { xs: 68, md: 84 },
                            minWidth: { xs: 68, md: 84 },
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            border: "1px solid rgba(0,0,0,0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                          }}
                        >
                          <Box
                            component="img"
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            sx={{
                              width: "78%",
                              height: "78%",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </Box>

                        <Box sx={{ minWidth: 0 }}>
                          <Typography
                            sx={{
                              fontSize: { xs: "1.75rem", md: "2.15rem" },
                              fontWeight: 800,
                              lineHeight: 1.18,
                              letterSpacing: "-0.02em",
                              color: "var(--text)",
                            }}
                          >
                            {exp.role}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: { xs: "1.16rem", md: "1.3rem" },
                              color: "var(--muted)",
                              fontWeight: 700,
                              mt: 0.35,
                            }}
                          >
                            {exp.company}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>

                    <Box
                      sx={{
                        textAlign: { xs: "left", md: "right" },
                        minWidth: { md: 200 },
                        pt: { md: 0.2 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: "1.1rem", md: "1.22rem" },
                          color: "var(--text)",
                          lineHeight: 1.3,
                        }}
                      >
                        {exp.period}
                      </Typography>

                      <Typography
                        sx={{
                          color: "var(--muted)",
                          mt: 0.45,
                          fontSize: { xs: "1rem", md: "1.08rem" },
                          fontWeight: 500,
                        }}
                      >
                        {exp.type}
                      </Typography>

                      {clickable && (
                        <Typography
                          sx={{
                            mt: 1,
                            fontSize: { xs: "0.95rem", md: "1rem" },
                            fontWeight: 700,
                            color: "#d32f2f",
                          }}
                        >
                          Click to view poster
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  <Box
                    component="ul"
                    sx={{
                      pl: 3,
                      mt: 0.8,
                      mb: 2,
                      color: "var(--text)",
                      lineHeight: 1.8,
                      fontSize: { xs: "1.18rem", md: "1.32rem" },
                    }}
                  >
                    {exp.points.map((point, i) => (
                      <li key={i} style={{ marginBottom: "10px" }}>
                        <Typography
                          component="span"
                          sx={{
                            fontSize: "inherit",
                            color: "rgba(55, 65, 81, 0.95)",
                          }}
                        >
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mb: 1.2 }}
                  >
                    {exp.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        className="tech-tag"
                        sx={{
                          fontSize: { xs: "1rem", md: "1.05rem" },
                          height: 40,
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Stack>

                  {(clickable ||
                    hasSingleActionLink ||
                    hasDynamicPlanningLink) && (
                    <Stack
                      direction="row"
                      spacing={1.2}
                      useFlexGap
                      flexWrap="wrap"
                      sx={{ mt: 0.6 }}
                    >
                      {clickable && (
                        <Button
                          variant="outlined"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenPoster(exp);
                          }}
                          sx={{
                            fontWeight: 700,
                            borderRadius: "999px",
                            textTransform: "none",
                          }}
                        >
                          View Adobe Poster
                        </Button>
                      )}

                      {hasSingleActionLink && (
                        <Button
                          variant="contained"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              exp.singleActionLink,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                          sx={{
                            fontWeight: 700,
                            borderRadius: "999px",
                            textTransform: "none",
                          }}
                        >
                          Single Action
                        </Button>
                      )}

                      {hasDynamicPlanningLink && (
                        <Button
                          variant="contained"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              exp.dynamicPlanningLink,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                          sx={{
                            fontWeight: 700,
                            borderRadius: "999px",
                            textTransform: "none",
                          }}
                        >
                          Dynamic Planning
                        </Button>
                      )}
                    </Stack>
                  )}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Dialog
        open={openPoster}
        onClose={handleClosePoster}
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

          <IconButton onClick={handleClosePoster}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ pt: 1 }}>
          {selectedPoster && (
            <Box
              component="img"
              src={selectedPoster}
              alt={selectedTitle}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                display: "block",
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}