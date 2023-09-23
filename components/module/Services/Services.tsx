import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <>
      <Box sx={{ direction: "rtl" }}>
        <Typography fontWeight="bold" variant="h4" textAlign="center">
          <span style={{ fontSize: "50px", color: "red" }}>02</span> خدمات من
        </Typography>
        <Box m="40px 0px">
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
            alignItems="center"
          >
            <Grid m={1} item>
              <Card sx={{ maxWidth: 345, margin: "0px 10px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/images/teaching.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="right"
                  >
                    مدرس
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="right"
                  >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid m={1} item>
              <Card sx={{ maxWidth: 345, margin: "0px 10px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/images/journalist.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="right"
                  >
                    روزنامه نگار
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="right"
                  >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Services;
