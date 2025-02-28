import React from 'react';
const ProfileImage = require("../../../public/images/Aryan.jpg").default;
import { NextPage } from 'next';
import { Avatar, Box, Grid, Typography, Container } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import Image from 'next/image';


interface IBlogPage {
    data: {
        _id: string;
        __v: number;
        image: string;
        title: string;
        body: string;
    };
}

const BlogPage: NextPage<IBlogPage> = ({ data }) => {
    return (
        <Box sx={{ direction: "rtl" }} m="100px 0px">
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} mt={9} display="flex" justifyContent="center">
                        <Typography
                            component="h2"
                            variant="h4"
                            color="error"
                            fontWeight={700}
                        >
                            {data.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt={6} textAlign="center">
                        <Image
                            src={data.image}
                            alt={data.title}
                            layout='responsive'
                            width={400}
                            height={400}
                            style={{ borderRadius: 15,maxWidth:"600px" }}
                        />
                    </Grid>
                    <Grid item xs={12} mt={7} display="flex" alignItems="center">
                        <Avatar
                            src={ProfileImage}
                            sx={{ width: 80, height: 80, marginLeft: 2 }}
                        />
                        <Box component="div">
                            <Typography component="p" variant="h5" fontWeight={700} color="red">
                                آرین سالم آبادی
                            </Typography>
                            <Typography component="p" variant="subtitle1" color="text.secondary">
                                مهندس نرم افزار و آهنگساز
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} mt={5}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: sanitizeHtml(data.body),
                            }}
                        ></div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default BlogPage;