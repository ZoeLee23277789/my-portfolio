import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Box, TextField, Button } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

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
    const mailtoLink = `mailto:zoelee19991226@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Box textAlign="center" sx={{ pb: 1 }}>
        <Typography variant="h1" fontWeight="bold" color="#dd6b7b">
          CONTACT
        </Typography>
        <Box sx={{ width: "200px", height: "5px", backgroundColor: "#dd6b7b", margin: "auto", mt: 0.3 }} />
      </Box>

      <Typography variant="h5" sx={{ mb: 5 }}>
        Feel free to reach out for collaborations or just a friendly hello.
      </Typography>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* 左邊聯絡資訊 */}
        <Grid item xs={12} md={5} sx={{ textAlign: "left" }}>
          <Box display="flex" alignItems="center" mb={2}>
            <RoomIcon sx={{ color: "#dd6b7b", mr: 1 }} />
            <Typography variant="h5" fontWeight="bold">Location:</Typography>
          </Box>
          <Typography>65 Rio Robles E, San Jose, CA 95134</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <EmailIcon sx={{ color: "#dd6b7b", mr: 1 }} />
            <Typography variant="h5" fontWeight="bold">Email:</Typography>
          </Box>
          <Typography>zoelee19991226@gmail.com</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <PhoneIcon sx={{ color: "#dd6b7b", mr: 1 }} />
            <Typography variant="h5" fontWeight="bold">Call:</Typography>
          </Box>
          <Typography> Phone (USA):    +1 408 618 9437</Typography>
          <Typography> Phone (Taiwan): +886 978 716 605</Typography>
        </Grid>

        {/* 右邊表單 */}
        <Grid item xs={12} md={7}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
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
                  label="Your Email"
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
                  rows={4}
                  size="small"
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSendEmail}
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#dd6b7b",
                color: "white",
                borderRadius: "50px",
                padding: "10px 30px",
                display: "block",
                fontSize: "24px",
                mx: "auto"
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
