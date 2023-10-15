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
        }[]) => void;
    onSelected: (select: number) => void;
}

const Main: NextPage<IBlog> = ({ data, getDataPost, onSelected }) => {

    const router = useRouter();

    function getSummary(item: any) {
        const summary = parse(item.body.split(" ").slice(0, 10).join(" "));
        return summary;
    }

    const deletePost = async(id:any) => {
        const formData = {
            id
        };
        const response = await fetch("api/post/posts", {
            method: "DELETE",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
          });
      if (response.status === 200){
        console.log("post deleted");
      }else {
        console.log("error", response.status);
        
      }


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
                                    <Avatar src="/images/Sadra1.jpg" sx={{ marginLeft: 1 }} />
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
                                    variant="h4"
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
                                            router.push(`/blogs/${item._.id}`)
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
                                                onClick={()=> deletePost(item._id)}
                                            >
                                                حذف پست
                                            </Button>
                                        </Box>
                                        <Box display="flex" justifyContent="center">
                                            <Button variant="outlined"
                                                size="small"
                                                sx={{ borderRadius: 3, margin: "10px" }}
                                                color="error"
                                                onClick={() => {
                                                    getDataPost(item)
                                                    onSelected(-1)
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
    )
}

export default Main;