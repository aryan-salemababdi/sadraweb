"use client"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    Grid,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const form = useRef<any>(null);

    const [dataMessage, setDataMessage] = useState<{
        name: string;
        email: string;
        subject: string;
        message: string;
    }>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const sendMessage = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "test",
                "test",
                form.current,
                "test"
            )
            .then(
                () => {
                    toast.success("پیام شما با موفقیت ارسال شد", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                    setDataMessage({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    })
                },
                (err) => {
                    toast.error("مشکلی به وجود آمده است", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                }
            );
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Grid sx={{width:"100%", direction:"rtl"}}>       
        <Typography textAlign="right" fontWeight="bold" variant="h5">
            من همیشه آماده بحث در مورد <span style={{color:"red"}}>صحبت </span> های شما یا مشارکت هستم
        </Typography>
                <Grid display="flex" justifyContent="center">
                    <form ref={form} onSubmit={sendMessage}>
                        <Grid justifyContent="end">
                            <Grid mt={2} item>
                                <TextField
                                    id="name"
                                    label="نام"
                                    variant="outlined"
                                    name="name"
                                    type="text"
                                    fullWidth
                                    dir="rtl"
                                    value={dataMessage.name}
                                    onChange={(e) =>
                                        setDataMessage({ ...dataMessage, name: e.target.value })
                                    }
                                    color="error"
                                    sx={{backgroundColor:"#CACDD11A",borderRadius:"5px",
                                    "& label": { color: "#fff" }
                                }}
                                />
                            </Grid>
                        </Grid>
                        <Grid justifyContent="end">
                            <Grid mt={2} item>
                                <TextField
                                    id="email"
                                    label="ایمیل"
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                    fullWidth
                                    dir="rtl"
                                    value={dataMessage.email}
                                    onChange={(e) =>
                                        setDataMessage({ ...dataMessage, email: e.target.value })
                                    }
                                    color="error"
                                    sx={{backgroundColor:"#CACDD11A",borderRadius:"5px",
                                    "& label": { color: "#fff" }
                                }}
                                />
                            </Grid>
                        </Grid>
                        <Grid justifyContent="end">
                            <Grid mt={2} item>
                                <TextField
                                    id="subject"
                                    label="موضوع"
                                    name="subject"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                    dir="rtl"
                                    value={dataMessage.subject}
                                    onChange={(e) =>
                                        setDataMessage({
                                            ...dataMessage,
                                            subject: e.target.value,
                                        })
                                    }
                                    color="error"
                                    sx={{backgroundColor:"#CACDD11A",borderRadius:"5px",
                                    "& label": { color: "#fff" }
                                }}
                                />
                            </Grid>
                        </Grid>
                        <Grid justifyContent="end">
                            <Grid mt={2} item>
                                <TextField
                                    id="message"
                                    label="پیام"
                                    variant="outlined"
                                    type="text"
                                    name="message"
                                    minRows={4}
                                    multiline
                                    fullWidth
                                    dir="rtl"
                                    value={dataMessage.message}
                                    onChange={(e) =>
                                        setDataMessage({
                                            ...dataMessage,
                                            message: e.target.value,
                                        })
                                    }
                                    color="error"
                                    sx={{backgroundColor:"#CACDD11A",borderRadius:"5px",
                                    "& label": { color: "#fff" }
                                }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Grid mt={2} item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="error"
                                    disabled={
                                        !dataMessage.name ||
                                        !dataMessage.email ||
                                        !dataMessage.subject ||
                                        !dataMessage.message
                                    }
                                >
                                    ارسال
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default Form;