"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  Divider,
  Avatar,
  Container
} from "@mui/material";

interface IBlogLanding {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

const Blog: NextPage<IBlogLanding> = ({ data }) => {
  const router = useRouter();

  function getSummary(item: any) {
    const summary = item.body.split(" ").slice(0, 10).join(" ");
    return summary;
  }

  return (
    <div style={{ margin: "0px 30px", direction: "rtl" }}>
      <Typography fontWeight="bold" variant="h4" textAlign="center">
        <span style={{ fontSize: "50px", color: "red" }}>03</span> وبلاگ
      </Typography>

      <Box m="40px 0px">
        <Container>
          <Grid
            container
            display="grid"
            gridAutoColumns="auto"
            gridTemplateColumns={{
              md: "repeat(3,auto)",
              sm: "repeat(2,auto)",
              xs: "repeat(1,auto)",
            }}
            justifyContent="center"
            alignItems="center"
          >
            {data.slice(0, 3).map((item: any) => (
              <Card
                sx={{
                  margin: "10px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                key={item.id}
              >
                <CardHeader
                  avatar={
                    <Avatar src="images/Sadra1.jpg" sx={{ marginLeft: 1 }} />
                  }
                  title="امیر صدرا نورمحمدی"
                />
                <CardMedia
                  component="img"
                  image="images/journalist.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="right"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="right"
                  >
                    {getSummary(item)}
                  </Typography>
                </CardContent>
                <Grid sx={{ marginTop: "auto" }}>
                  <Divider variant="middle" sx={{ marginTop: "auto" }} />
                  <CardActions>
                      <Button variant="outlined"
                       size="small"
                       sx={{ borderRadius: 3, width: "100%" }}
                       color="error"
                       onClick={()=>{
                        router.push(`/blogs/${item.id}`)
                       }}
                       >
                        مطالعه مقاله
                      </Button>
                  </CardActions>
                </Grid>
              </Card>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Blog;
