"use client";
import { Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter as useNextRouter } from "next/navigation";

type Router = ReturnType<typeof useNextRouter>;

const AboutUs = () => {
  const router: Router = useNextRouter();
  return (
    <>
      <Container>
        <Grid container justifyContent="center" spacing={{md:2,sm:1,xs:1}}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              flexDirection: "column",
              textAlign: { md: "right", sm: "right", xs: "right" },
              direction:"rtl"
            }}
          >
            <Typography color="red" fontWeight="bold" variant="h6">
              درباره من
            </Typography>
            <Typography fontWeight="bold" variant="h3">
            <span style={{color:"red", fontSize:"70px"}}>01</span> با من همراه شوید
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ margin: "10px 0px" }}
              color="#686868"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ margin: "10px 0px" }}
              onClick={() => {
                router.push("/contactme");
              }}
            >
              <Typography
                fontWeight="bold"
                variant="h6"
                textAlign="right"
                color="white"
              >
                ارتباط با من
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
          >
            <Image
              src="/images/aboutus.jpg"
              alt="aboutus"
              layout="responsive"
              width={300}
              height={400}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
