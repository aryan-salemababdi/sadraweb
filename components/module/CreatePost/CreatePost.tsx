import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
    const { quill, quillRef } = useQuill();

    const [subjectValue, setSubjectValue] = useState<string>("")

    const [selectedFile, setSelectedFile] = useState<any>(null);

    const [value, setValue] = useState();

    useEffect(() => {
        if (quill) {
            setValue(quillRef.current.firstChild.innerHTML)
        }
    }, [quill, quillRef])


    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        file && setSelectedFile(file);
        setDataPost({ ...dataPost, postImage: file });
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setDataPost({ ...dataPost, postImage: null });
    };

    const [dataPost, setDataPost] = useState<{
        postImage: any;
    }>({
        postImage: null,
    });

    const sendData = () => {
        if (quill) {
            console.log("send data");
            console.log(dataPost.postImage);
            quill.on('text-change', () => {
                console.log(quillRef.current.firstChild.innerHTML);
            });
            console.log(subjectValue);
            console.log(value, "this is quill editor")
        }


    }
    return (
        <>
            <Box display="flex" justifyContent="center">
                <TextField
                    label="عنوان"
                    name="title"
                    value={subjectValue}
                    onChange={(e) => setSubjectValue(e.target.value)}
                />
            </Box>
            <Box display="flex" justifyContent="center" m="30px 0px">
                <label
                    htmlFor="image-upload"
                    style={{
                        display: "inline-block",
                        cursor: "pointer",
                        borderRadius: "10px",
                        padding: "10px",
                        border: "2px dashed #ccc",
                    }}
                >
                    {selectedFile ? (
                        <Image
                            src={URL.createObjectURL(selectedFile)}
                            alt="Selected File"
                            width={319}
                            height={250}
                            style={{
                                borderRadius: "10px",
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        />
                    ) : (
                        <span>عکس زمینه پست</span>
                    )}
                </label>
                <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileInput}
                />
            </Box>
            <Box display="flex" justifyContent="center">
                <Button
                    sx={{ margin: "10px 0px" }}
                    variant="contained"
                    onClick={handleRemoveFile}
                >
                    حذف
                </Button>
            </Box>
            <Box display="flex" justifyContent="center" margin="30px 0px">
                <div style={{ width: "90%", height: 300 }}>
                    <div ref={quillRef} />
                </div>
            </Box>
            <Box display="flex" justifyContent="center" m="130px">
                <Button
                    variant="contained"
                    onClick={() => sendData()}
                    disabled={dataPost.postImage === null || subjectValue === "" ? true : false}
                >
                    انتشار
                </Button>
            </Box>
        </>
    );
};


export default CreatePost;