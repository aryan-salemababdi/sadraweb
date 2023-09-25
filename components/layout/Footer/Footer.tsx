import Link from "next/link";
import Form from '@/components/shared/Form';
import { Grid, AppBar, Box, Container, Typography } from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import "./footer.css";

const Footer = () => {
  return (
    <>
      <Box sx={{ direction: "rtl" }}>
        <AppBar position="static" sx={{ background: "#212529", boxShadow: "none" }}>
          <Container>
            <Grid container justifyContent="center" spacing={{ md: 2, sm: 1, xs: 1 }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                justifyContent="center"
                alignItems="center"
                sx={{margin:"20px 0px"}}
              >
                <Typography fontWeight="bold" variant="h4" textAlign="center">
                  <span style={{ color: "red", fontSize: "70px" }}>04</span> ارتباط با من
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Link
                    href="/"
                    className="contact-link"
                  >
                    <div className="contact-tooltip-instagram">@Test</div>
                    <InstagramIcon sx={{ fontSize: "50px" }} />
                  </Link>
                  <Box className="contact-link">
                    <div className="contact-tooltip">
                      09217916501
                    </div>
                    <StayPrimaryPortraitIcon sx={{ fontSize: "50px" }} />
                  </Box>
                  <Box className="contact-link">
                    <div className="contact-tooltip-email">Email@gmail.com</div>
                    <EmailIcon sx={{ fontSize: "50px" }} />
                  </Box>
                  <Box className="contact-link">
                    <div className="contact-tooltip-telephone">Twitter</div>
                    <TwitterIcon sx={{ fontSize: "50px" }} />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{
                  flexDirection: "column",
                  textAlign: { md: "right", sm: "right", xs: "right" },
                  direction: "rtl",
                  margin:"20px 0px"
                }}
              >
                <Form />
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>

    </>
  )
}

export default Footer;