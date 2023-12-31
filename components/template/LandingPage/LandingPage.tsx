import AboutUs from "@/components/module/AboutUs/AboutUs";
import Banner from "@/components/module/Banner/Banner";
import React from "react";
import { Box } from '@mui/material';
import Resume from "@/components/module/Resume/Resume";
import Services from "@/components/module/Services/Services";
import DataBlog from "@/components/module/Blog/DataBlog";

const LandingPage = () => {
  return <div style={{ height: "100%" }}>
    <Box>
    <Banner />
    </Box>
    <Box m="30px 0px">
    <AboutUs />
    <Resume />
    <Services />
    <DataBlog />
    </Box>
  </div>;
};

export default LandingPage;
