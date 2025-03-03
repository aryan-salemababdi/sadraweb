"use client";
import { NextPage } from "next";
import { Typography, Button, Grid } from "@mui/material";
import { useRouter as useNextRouter } from "next/navigation";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Typewriter from "typewriter-effect";

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
              <LinkedInIcon sx={{ fontSize: "30px" }} />
            </Link>
          </Grid>
        </Grid>
        <Grid sx={{ textAlign: "right" }}>
          <Typography fontWeight="bold" variant="h4">
            <span style={{ color: "red" }}>سلام</span>، من
          </Typography>
          <Typography fontWeight="bold" variant="h3" sx={{ textAlign: "right" }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("آرین سالم آبادی هستم")
                  .pauseFor(2000)
                  .start()
              }}
              options={{
                loop: true,
              }}
            />
          </Typography>
          <Typography fontWeight="bold" variant="h5">
           مهندس نرم افزار و آهنگساز
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
              قطعات من
            </Typography>
          </Button>
        </Grid>
      </div>
    </>
  );
};

export default Banner;
