import { NextResponse } from 'next/server';
import connectDB from "@/utils/connectDB";
import Posts from "@/models/Posts";



export async function POST(req: any) {

    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        return NextResponse.json({ status: 500, message: "Error in connecting to DB" });
    }

    const { title, image, body } = await req.json();

    if (!title || !image || !body) return NextResponse.json({ status: 422, message: "Invalid Data" });

    const newPost = await Posts.create({ title, image, body });

    console.log(newPost);

    return NextResponse.json({ status: 200, message: "Post Created" });


}