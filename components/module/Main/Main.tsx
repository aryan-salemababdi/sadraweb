"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";
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
} from "@mui/material";

interface IBlog {
  data: {
    _id: string;
    __v: number;
    image: string;
    title: string;
    body: string;
  }[];
  getDataPost: (
    data: {
      _id: string;
      __v: number;
      image: string;
      title: string;
      body: string;
    }
  ) => void;
  onSelected: (select: number) => void;
}

const Main: NextPage<IBlog> = ({ data, getDataPost, onSelected }) => {
  const router = useRouter();

  // در اینجا فرض شده item یک شیء شامل body است
  function getSummary(item: { body: string }) {
    const summary = parse(item.body.split(" ").slice(0, 10).join(" "));
    return summary;
  }

  const deletePost = async (id: string) => {
    const formData = { id };
    try {
      const response = await fetch("api/post/posts", {
        method: "DELETE",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        // دریافت متن خطا و لاگ کردن آن
        const errorText = await response.text();
        console.error("خطا در حذف پست:", errorText);
        return;
      }
      const responseData = await response.json();
      console.log("پست حذف شد:", responseData);
    } catch (error) {
      console.error("خطا در deletePost:", error);
    }
  };

  return (
    <>
      <Grid
        container
        display="grid"
        gridAutoColumns="auto"
        gridTemplateColumns={{
          md: "repeat(2, auto)",
          sm: "repeat(2, auto)",
          xs: "repeat(1, auto)",
        }}
        justifyContent="center"
        p={2}
      >
        {data.map((item) => (
          <Box m={2} key={item._id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardHeader
                avatar={<Avatar src="/images/Aryan.jpg" sx={{ marginLeft: 1 }} />}
                title="آرین سالم آبادی"
              />
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ height: "200px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" textAlign="right">
                  {item.title}
                </Typography>
                {getSummary(item)}
              </CardContent>
              <Grid sx={{ marginTop: "auto" }}>
                <Divider variant="middle" sx={{ marginTop: "auto" }} />
                <CardActions>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: 3, width: "100%" }}
                    color="error"
                    onClick={() => router.push(`/composition/${item._id}`)}
                  >
                    مطالعه مقاله
                  </Button>
                  <Box>
                    <Box display="flex" justifyContent="center">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: 3, width: "100%" }}
                        color="error"
                        onClick={() => deletePost(item._id)}
                      >
                        حذف پست
                      </Button>
                    </Box>
                    <Box display="flex" justifyContent="center">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ borderRadius: 3, margin: "10px" }}
                        color="error"
                        onClick={() => {
                          getDataPost(item);
                          onSelected(-1);
                        }}
                      >
                        تغییرات
                      </Button>
                    </Box>
                  </Box>
                </CardActions>
              </Grid>
            </Card>
          </Box>
        ))}
        <Box></Box>
        <Box></Box>
      </Grid>
    </>
  );
};

export default Main;
