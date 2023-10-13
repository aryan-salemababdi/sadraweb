"use client"
import { useState } from "react"
import { NextPage } from 'next';
import { Grid } from '@mui/material';
import MainNavigation from '@/components/module/MainNavigation/MainNavigation';
import Main from '@/components/module/Main/Main';
import CreatePost from "@/components/module/CreatePost/CreatePost";
import UpdatePost from "@/components/module/Update/UpdatePost";


interface IDashboard {
    data: {
        _id: string;
        __v: number;
        image: string;
        title: string;
        body: string;
    }[];
}



const DashboardPage: NextPage<IDashboard> = ({ data }) => {

    const [select, setSelect] = useState<number>(0);

    const [update, setUpdate] = useState<any>(null);


    return (
        <div style={{ height: "100%", margin: "150px 0px" }}>
            <Grid container justifyContent="center">
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={8}
                    sx={{
                        flexDirection: "column",
                        textAlign: { md: "right", sm: "right", xs: "right" },
                        direction: "rtl"
                    }}
                >
                    {
                        select === 0 ?
                            <Main
                                data={data}
                                getDataPost={(data) => {
                                    setUpdate(data)
                                }}
                                onSelected={(select) => {
                                    setSelect(select)
                                }}
                            />
                            :
                            select === 1 ?
                                <CreatePost
                                    onSelected={(select) => {
                                        setSelect(select)
                                    }}
                                />
                                :
                                update ? 
                                <UpdatePost 
                                data={update}
                                onSelected={(select) => {
                                    setSelect(select)
                                }}
                                />
                                :
                                "صفحه ای یافت نشد!"
                    }
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    display="flex"
                    justifyContent="center"
                >
                    <MainNavigation
                        selectHandller={(selector) => {
                            setSelect(selector)
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardPage