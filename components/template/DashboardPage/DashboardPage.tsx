import { NextPage } from 'next';
import { Grid } from '@mui/material';
import MainNavigation from '@/components/module/MainNavigation/MainNavigation';
import Main from '@/components/module/Main/Main';


interface IDashboard {
    data: {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[];
  }
  


const DashboardPage: NextPage<IDashboard> = ({data}) => {
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
                    <Main data = {data} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    display="flex"
                    justifyContent="center"
                >
                        <MainNavigation />
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardPage