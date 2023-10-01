"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Card, Grid, Typography, TextField, Button } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';

const ContactmePage = () => {
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
      <Grid
        display="flex"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Card
            sx={{
              borderTop: "10px solid #e6e6e6",
              padding: "10px",
              width: { md: 340, sm: 340, xs: 300 },
            }}
          >
            <Typography textAlign="center" fontWeight="bold" variant="h5">
              تماس با ما
            </Typography>
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
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid mt={2} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="warning"
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
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactmePage;
