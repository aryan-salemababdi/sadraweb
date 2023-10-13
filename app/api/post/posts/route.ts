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

export async function DELETE(req: any) {

  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500, message: "Error in deleting post" });
  }
  const { id } = await req.json();


  if (!id) {
    return NextResponse.json({ status: 404, message: "Post not found" });
  }

  const post = await Posts.findByIdAndDelete(id);
  return NextResponse.json({ status: 200, message: "Post deleted successfully" });
}

export async function PUT(req: any) {

    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        return NextResponse.json({ status: 500, message: "Error in connecting to DB" });
    }

    const { id, title, image, body } = await req.json();
  
    if (!id || !title || !image || !body) return NextResponse.json({ status: 422, message: "Invalid Data" });
  
    const updatedPost = await Posts.findByIdAndUpdate(id, { title, image, body }, { new: true });

    console.log();
    
  
    return NextResponse.json({ status: 200, message: "Post Updated" });
  }


export async function GET() {

    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        return NextResponse.json({ status: 500, message: "Error in connecting to DB" });
    }
    const posts = await Posts.find();
    return NextResponse.json({ status: 200, message: "Posts Fetched", data: posts });

}
