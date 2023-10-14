import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import User from "@/models/User";


export async function POST(req: any,res: any) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500, message: "Error in connecting to DB" });
  }

  const { userName, password } = await req.json();
  const expiration = 24 * 60 * 60;
  const secretKey = "58015927e37bc0493a516bdfe091dc5c8a1638c2c6cafdc9ae413c97b25a3dc4";


  if (!userName || !password) return NextResponse.json({ status: 422, message: "Invalid Data" });

  const user = await User.findOne({ userName });

  if (!user) return NextResponse.json({ status: 404, message: "User doesn't exist" });

  const isValid = await verifyPassword(password, user.password);

  if (!isValid) return NextResponse.json({ status: 422, message: "Username or password is incorrect" });

  const token = sign({ user }, secretKey, { expiresIn: expiration });

 cookies().set("sadraweb", token, {
    httpOnly: true,
    maxAge: expiration,
    path: "/",
  });

 
  return NextResponse.json({ status: 200, message: "Login successful" });

}