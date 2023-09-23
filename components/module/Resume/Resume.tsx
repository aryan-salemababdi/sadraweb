"use client";
import { useRouter as useNextRouter } from "next/navigation";
import { Typography, Button, Divider, Container } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Link from "next/link";

const Resume = () => {
  type Router = ReturnType<typeof useNextRouter>;

  const router: Router = useNextRouter();

  const mystyle = {
    backgroundImage: `url(images/bg-page-title.jpg)`,
    margin: "0px",
    height: "calc(70vh)",
    width: "100wv",
    borderRadius:"5px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "all 0.2s linear",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    color: "#fff",
  };
  return (
    <div style={{ margin: "30px 0px" }}>
      <Container>
        <div style={mystyle}>
          <Typography fontWeight="bold" variant="h3" m="10px 0px" textAlign="center">
            بیاید درباره برنامه پیشرو شما صحبت کنیم
            <Divider sx={{ backgroundColor: "red", borderWidth: "1.5px", margin:"20px" }} />
          </Typography>
          <Typography fontWeight="bold" variant="h4" textAlign="center" m="10px">
            امیر صدرا نورمحمدی
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ margin: "20px 0px" }}
            onClick={() => {
              router.push("/contactus");
            }}
          >
            <Typography fontWeight="div" variant="h6" textAlign="right">
              ارتباط با من
            </Typography>
          </Button>
          <Link
            href="https://s6.uupload.ir/filelink/3RY6SliiHmqZ_a6ce9765a6/aryansalemabadicvprogramming_lhe9.pdf"
            download
            style={{marginBottom:"20px"}}
          >
              <Typography color="#686868">
                دانلود رزومه{" "}
                <span style={{ color: "red" }}>
                  <DownloadIcon sx={{ fontSize: "20px" }} />
                </span>
              </Typography>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
