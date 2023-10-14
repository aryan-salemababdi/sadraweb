"use client"
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Button,
    Card,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import { useState } from "react";

const validationSchema = Yup.object().shape({
    userName: Yup.string().required("لطفا یوزرنیم خود را وارد کنید"),
    password: Yup.string().matches(
        /[a-zA-Z0-9]+/,
        "رمز عبور باید فقط شامل حروف و اعداد باشد"
    ),
});

const LoginPage = () => {

    const router = useRouter();

    const [error, setError] = useState<boolean>(false);

    const [success, setSuccess] = useState<boolean>(false);


    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
        },
        onSubmit: async (values) => {
            const res = await fetch("api/auth/login", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (data.status === 200) {
                setError(false)
                setSuccess(true)
                router.push("/dashboard")
            }
            else {
                setSuccess(false)
                setError(true)
            }
        },
        validationSchema: validationSchema,
    });

    return (
        <div style={{ margin: "100px" }}>
            <Grid container display="flex" justifyContent="center">
                <Grid item>
                    <Card sx={{ borderTop: "10px solid red", padding: "20px" }}>
                        {
                            error && (
                                <Typography textAlign="center" fontWeight="bold" variant="h5" color="red">
                                    نام کاربری یا رمز عبور صحیح نمی باشد
                                </Typography>
                            )
                        }
                        {
                            success && (
                                <Typography textAlign="center" fontWeight="bold" variant="h5" color="green">
                                    با موفقیت وارد شدید
                                </Typography>
                            )
                        }
                        <Typography textAlign="center" fontWeight="bold" variant="h5">
                            ورود
                        </Typography>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container justifyContent="center">
                                <Grid mt={2} item>
                                    <TextField
                                        id="userName"
                                        label="username"
                                        variant="standard"
                                        type="text"
                                        {...formik.getFieldProps("userName")}
                                    />
                                    {formik.touched.userName && formik.errors.userName ? (
                                        <div>{formik.errors.userName}</div>
                                    ) : null}
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Grid mt={2} item>
                                    <TextField
                                        id="password"
                                        label="password"
                                        variant="standard"
                                        type="password"
                                        {...formik.getFieldProps("password")}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div>{formik.errors.password}</div>
                                    ) : null}
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Grid mt={2} item>
                                    <Button type="submit" variant="contained" color="error">ورود</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginPage;
