"use client"
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

interface IBlogs {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
}

const Blogs:NextPage<IBlogs> = ({data}) => {

  const router = useRouter();

  function getSummary(item: any) {
    const summary = item.body.split(" ").slice(0, 10).join(" ");
    return summary;
  }


  return (
    <div style={{ height: "100%", margin: "100px 0px" }}>
      <Grid
        container
        display="grid"
        gridAutoColumns="auto"
        gridTemplateColumns={{
          md: "repeat(3,1fr)",
          xs: "repeat(1,1fr)",
        }}
        p={2}
      >
        {data.map((item: any) => (
          <Box m={2} key={item.id}>
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
                    onClick={() => {
                      router.push(`/blogs/${item.id}`)
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
    </div>
  )
}

export default Blogs;