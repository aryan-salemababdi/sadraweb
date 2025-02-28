import { Box, Container, Typography } from "@mui/material";
import "./footer.css";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#333", color: "#fff", py: 3, textAlign: "center", direction: "rtl" }}>
      <Container>
        <Typography variant="body2" fontWeight="bold">
          تمامی حقوق این سایت مربوط به آرین سالم آبادی است
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;