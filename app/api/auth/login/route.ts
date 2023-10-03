import { NextResponse } from 'next/server';
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";
import User from "@/models/User";
import { hash } from 'bcryptjs';

export async function POST(req:any) {
    try {
        await connectDB();
        
    } catch (err) {
        console.log(err);
        return NextResponse.json({ status: 500, message: "Error in connecting to DB" });
    }

    const { userName, password } =  await req.json();


    if (!userName || !password) return NextResponse.json({ status: 422, message: "Invalid Data" });

    const user = await User.findOne({ userName });

    console.log(user);

    if (!user) return NextResponse.json({ status: 404, message: "User doesn't exist" });

    const isValid = await verifyPassword(password, user.password);

    if (!isValid) return NextResponse.json({ status: 422, message: "Username or password is incorrect" });

    return NextResponse.json({ status: 200, message: "Login successful" });
}
