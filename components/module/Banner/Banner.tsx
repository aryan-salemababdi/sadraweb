"use client";
import { NextPage } from "next";
import { Typography, Button, Grid } from "@mui/material";
import { useRouter as useNextRouter } from "next/navigation";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Typewriter from "typewriter-effect"; // Import Typewriter

type Router = ReturnType<typeof useNextRouter>;

const Banner: NextPage = () => {
  const router: Router = useNextRouter();

  return (
    <>
      <div
        style={{
          backgroundImage: `url(images/bg-page-title.jpg)`,
          margin: "0px",
          padding: "0px 20px",
          height: "calc(80vh)",
          width: "100wv",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Grid>
          <Grid>
            <Link href="/">
              <InstagramIcon sx={{ fontSize: "30px" }} />
            </Link>
          </Grid>
          <br />
          <Grid>
            <Link href="/">
              <FacebookIcon sx={{ fontSize: "30px" }} />
            </Link>
          </Grid>
          <br />
          <Grid>
            <Link href="/">
              <LinkedInIcon sx={{ fontSize: "30px" }} />
            </Link>
          </Grid>
        </Grid>
        <Grid sx={{ textAlign: "right" }}>
          <Typography fontWeight="bold" variant="h3">
            <span style={{ color: "red" }}>سلام</span>، من
          </Typography>
          <Typography fontWeight="bold" variant="h2" sx={{ textAlign: "right" }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("امیر صدرا نورمحمدی هستم")
                  .start()
              }}
              options={{
                loop: true,
              }}
            />
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            نویسنده و فیلسوف
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ margin: "10px 0px" }}
            onClick={() => {
              router.push("/blogs");
            }}
          >
            <Typography fontWeight="bold" variant="h6" textAlign="center">
              وبلاگ من
            </Typography>
          </Button>
        </Grid>
      </div>
    </>
  );
};

export default Banner;
