"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import parse from 'html-react-parser';
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
    _id: string;
    __v: number;
    image: string;
    title: string;
    body: string;
  }[];
}

const Blog: NextPage<IBlogLanding> = ({ data }) => {
  const router = useRouter();

  function getSummary(item: any) {
    const summary = parse(item.body.split(" ").slice(0, 10).join(" "));
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
            p={2}
          >
            {data.slice(data.length - 3, data.length - 1).map((item: any) => (
              <Box m={2} key={item._id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar src="images/Sadra1.jpg" sx={{ marginLeft: 1 }} />
                    }
                    title="امیر صدرا نورمحمدی"
                  />
                  <CardMedia
                      component="img"
                      image={item.image}
                      sx={{height:"200px"}}
                      alt={item.title}
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
                    {getSummary(item)}
                  </CardContent>
                  <Grid sx={{ marginTop: "auto" }}>
                    <Divider variant="middle" sx={{ marginTop: "auto" }} />
                    <CardActions>
                      <Button variant="outlined"
                        size="small"
                        sx={{ borderRadius: 3, width: "100%" }}
                        color="error"
                        onClick={() => {
                          router.push(`/blogs/${item._id}`)
                        }}
                      >
                        مطالعه مقاله
                      </Button>
                    </CardActions>
                  </Grid>
                </Card>
              </Box>
            ))}
          </Grid>
        </Container>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="small"
            sx={{ borderRadius: 3, }}
            color="error"
            onClick={() => {
              router.push("/blogs")
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="right"
              color="white"
            >
              وبلاگ
            </Typography>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Blog;
