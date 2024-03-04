import React from 'react'
import { NextPage } from 'next';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from 'next/image'
import { Box, Button, Card, Divider, Grid, Typography } from '@mui/material'
import  myImage  from "../../../public/images/Sadra2.jpg";


interface IMainNavigation {
    selectHandller: (selector: number) => void;
}

const MainNavigation: NextPage<IMainNavigation> = ({ selectHandller }) => {
    return (
        <>
            <Card sx={{ textAlign: "center", height: "310px", width: "200px", display: { md: "block", sm: "none", xs: "none" } }}>
                <Grid m="15px 0px">
                    <Image
                        src={myImage}
                        alt="sadraProfile"
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%" }}
                    />
                </Grid>
                <Typography fontWeight="bold" variant="h6" sx={{ margin: "10px 0px" }}>
                    امیر صدرا نورمحمدی
                </Typography>
                <Divider />
                <Grid m="10px 0px">
                    <Button onClick={() => selectHandller(0)}>
                        <Typography fontWeight="bold" variant="h5">
                            پنل کاربری
                        </Typography>
                    </Button>
                </Grid>
                <Divider />
                <Grid m="10px 0px">
                    <Button onClick={() => selectHandller(1)}>
                        <Typography fontWeight="bold" variant="h5">
                            ایجاد پست
                        </Typography>
                    </Button>
                </Grid>
            </Card>
            <Box
                display={{ md: "none", sm: "block", xs: "block" }}
                position="fixed"
                bottom="0"
                m="10px 0px"
                zIndex="10000"
            >
                <Card sx={{ display: "flex" }}>
                    <Grid>
                        <Button onClick={() => selectHandller(0)}>
                            <HomeIcon />
                        </Button>
                    </Grid>
                    <Grid>
                        <Button onClick={() => selectHandller(1)}>
                            <PostAddIcon />
                        </Button>
                    </Grid>
                </Card>
            </Box>
        </>
    )
}

export default MainNavigation;