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
  } from "@mui/material";


  interface IBlog {
    data: {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[];
  }

const Main: NextPage<IBlog> = ({data}) => {

    const router = useRouter();

    function getSummary(item: any) {
      const summary = item.body.split(" ").slice(0, 10).join(" ");
      return summary;
    }

    return (
        <>
            <Grid
                container
                display="grid"
                gridAutoColumns="auto"
                gridTemplateColumns={{
                    md: "repeat(2,auto)",
                    sm: "repeat(2,auto)",
                    xs: "repeat(1,auto)",
                }}
                justifyContent="center"
                p={2}
            >
                {data.slice(data.length - 4, data.length - 1).map((item: any) => (
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
                                    
                                    <Box>
                                     <Box display="flex" justifyContent="center">
                                       <Button variant="outlined"
                                        size="small"
                                        sx={{ borderRadius: 3, width: "100%" }}
                                        color="error"
                                    >
                                         حذف پست
                                    </Button>
                                    </Box>
                                    <Box display="flex" justifyContent="center">
                                    <Button variant="outlined"
                                        size="small"
                                        sx={{ borderRadius: 3, margin:"10px"}}
                                        color="error"
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
            </Grid>
        </>
    )
}

export default Main;