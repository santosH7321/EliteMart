import { connectDB } from "@/app/lib/db";
import serverCatchError from "@/app/lib/server-catch-error";
import { NextRequest, NextResponse as res } from "next/server";
import UserModel from "@/app/models/user.model";
import bcrypt from "bcrypt"

export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const {email, password} = await req.json();
        const user = await UserModel.findOne({email})

        if(!user) {
            return res.json({message: "Invailid credentials"}, {status: 404})
        }
        if(!password) {
            return res.json({message: "Invailid credentials"}, {status: 404})
        }

        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword) 
            return res.json({message: "Incorrect password"}, {status: 401})

        return res.json({
            message: "Login Success",
        })
    } catch (err) {
        return serverCatchError(err);
    }
};