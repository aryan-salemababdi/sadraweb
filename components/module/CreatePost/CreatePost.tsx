"use client"
import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import { NextPage } from "next";


interface ICreatePost {
    onSelected: (select: number) => void;
}

const CreatePost: NextPage<ICreatePost> = ({ onSelected }) => {
    const { quill, quillRef } = useQuill();

    const [imageBuffer, setImageBuffer] = useState<any>(null);

    const [subjectValue, setSubjectValue] = useState<string>("")

    const [selectedFile, setSelectedFile] = useState<any>(null);

    const [value, setValue] = useState();

    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                setValue(quillRef.current.firstChild.innerHTML)
            });

            
        }
    }, [quill, quillRef]);


    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader();
        const file:any = e.target.files?.[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImageBuffer(reader.result);
        };
        reader.onerror = err => {
            console.log(err);

        }

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

    const sendData = async () => {
        if (quill) {
            const formData = {
                title: subjectValue,
                image: imageBuffer,
                body: value
            };
            console.log("send data", formData);
            const res = await fetch("api/post/posts", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                const data = await res.json();
                if (data.status === 200) {
                    onSelected(0);
                } else {
                    console.error("خطای سرور:", data.status);
                }
            } else {
                console.error("خطای شبکه در درخواست fetch");
            }
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