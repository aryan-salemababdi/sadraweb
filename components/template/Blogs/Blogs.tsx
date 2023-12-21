"use client"
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

interface IBlogs {
  data: {
    _id: string;
    __v: number;
    image: string;
    title: string;
    body: string;
  }[];
}

const Blogs:NextPage<IBlogs> = ({data}) => {

  const router = useRouter();

  function getSummary(item: any) {
    const summary = parse(item.split(" ").slice(0, 10).join(" "));
    return summary;
}

console.log(data)

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
                alt={item.title}
                sx={{height:"200px"}}
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
                <span
                style={{textAlign:"right", color:"GrayText", fontSize:"12px"}}
                >
                  {getSummary(item.body)}
                </span>
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
    </div>
  )
}

export default Blogs;