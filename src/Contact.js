import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CONTACT = {
  location: "San Jose, CA",
  email: "s1083816@berkeley.edu",
  phone: "+1 408‑618‑9437",
  linkedin: "https://www.linkedin.com/in/jou-yilee",
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = () => {
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject || "Hello")}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <Box>
      <Container>
        <Typography className="kicker">Contact</Typography>
        <Typography variant="h3" sx={{ fontWeight: 850, mt: 1 }}>
          Let’s build something.
        </Typography>
        <Typography className="muted" sx={{ mt: 1.5, maxWidth: 760, lineHeight: 1.8 }}>
          If you have a role in infrastructure/systems, platform engineering, DevOps, or agentic tooling — I’d love to chat.
        </Typography>

        <Grid container spacing={2.5} sx={{ mt: 2.5 }}>
          <Grid item xs={12} md={5}>
            <Box className="glass" sx={{ p: 3, border: "1px solid rgba(255,255,255,0.10)" }}>
              <Stack spacing={2.2}>
                <Stack direction="row" spacing={1.4} alignItems="flex-start">
                  <RoomIcon sx={{ color: "rgba(106,228,255,0.9)", mt: "2px" }} />
                  <Box>
                    <Typography sx={{ fontWeight: 850 }}>Location</Typography>
                    <Typography className="muted" sx={{ mt: 0.3 }}>
                      {CONTACT.location}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.4} alignItems="flex-start">
                  <EmailIcon sx={{ color: "rgba(179,157,255,0.85)", mt: "2px" }} />
                  <Box>
                    <Typography sx={{ fontWeight: 850 }}>Email</Typography>
                    <Typography className="muted" sx={{ mt: 0.3 }}>
                      {CONTACT.email}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.4} alignItems="flex-start">
                  <PhoneIcon sx={{ color: "rgba(84,240,181,0.85)", mt: "2px" }} />
                  <Box>
                    <Typography sx={{ fontWeight: 850 }}>Phone</Typography>
                    <Typography className="muted" sx={{ mt: 0.3 }}>
                      {CONTACT.phone}
                    </Typography>
                  </Box>
                </Stack>

                <Button
                  variant="outlined"
                  component="a"
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    borderColor: "rgba(255,255,255,0.20)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    justifyContent: "flex-start",
                    px: 2,
                  }}
                >
                  LinkedIn
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box className="glass" sx={{ p: 3, border: "1px solid rgba(255,255,255,0.10)" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={5}
                    size="small"
                  />
                </Grid>
              </Grid>

              <Button
                onClick={handleSendEmail}
                variant="contained"
                sx={{
                  mt: 2.5,
                  px: 3,
                  py: 1.2,
                  background:
                    "linear-gradient(90deg, rgba(106,228,255,0.95), rgba(179,157,255,0.85))",
                  color: "#050712",
                  boxShadow: "0 10px 30px rgba(106,228,255,0.18)",
                }}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{
            mt: 4,
            color: "rgba(232,236,247,0.55)",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
          }}
        >
          © {new Date().getFullYear()} Jou‑Yi Lee • Built with React + MUI
        </Typography>
      </Container>
    </Box>
  );
}

export default Contact;
