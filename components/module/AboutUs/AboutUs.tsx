"use client";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import { useRouter as useNextRouter } from "next/navigation";

type Router = ReturnType<typeof useNextRouter>;

const AboutUs = () => {
  const router: Router = useNextRouter();
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", py: 5 }}>
      <Container>
        <Grid container justifyContent="center" spacing={4} alignItems="center">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              flexDirection: "column",
              textAlign: { md: "right", sm: "right", xs: "center" },
              direction: "rtl",
              p: 2,
            }}
          >
            <Typography color="red" fontWeight="bold" variant="h6">
              درباره من
            </Typography>
            <Typography fontWeight="bold" variant="h3">
              <span style={{ color: "red", fontSize: "70px" }}>01</span> با من همراه شوید
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px", lineHeight: 1.8 }}
              color="#686868"
            >
              من یک توسعه‌دهنده فول‌استک وب و توسعه‌دهنده نرم‌افزار هستم که علاقه زیادی به آهنگسازی بی‌کلام دارم.
              برنامه‌نویسی و خلق راهکارهای نرم‌افزاری را به عنوان حرفه‌ام انتخاب کرده‌ام، اما در کنار آن، دنیای موسیقی و
              ترکیب صداها برای من یک دنیای بی‌پایان از الهام و خلاقیت است. ترکیب دانش فنی با هنر آهنگسازی، باعث شده است
              تا به ایجاد پروژه‌های دیجیتالی نوآورانه‌ای بپردازم که در آن‌ها موسیقی و فناوری در کنار هم جریان پیدا کنند.
              عاشق چالش‌های جدید هستم و همیشه در جستجوی راه‌هایی برای بهتر کردن تجربه دیجیتال کاربران می‌باشم.
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ margin: "10px 0px", px: 4, py: 1.5, borderRadius: "8px" }}
              onClick={() => {
                router.push("/composition");
              }}
            >
              <Typography fontWeight="bold" variant="h6" color="white">
                مشاهده آثار
              </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 2 }}
          >
            <Image
              src="/images/aboutus.jpg"
              alt="aboutus"
              layout="responsive"
              width={400}
              height={500}
              style={{ borderRadius: "15px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
