import { connectDB } from "@/app/lib/db";
import serverCatchError from "@/app/lib/server-catch-error";
import { NextRequest, NextResponse as res } from "next/server";
import UserModel from "@/app/models/user.model";

export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const body = await req.json();
        await UserModel.create(body);
        return res.json({ message: "Signup Success" });
    } catch (err) {
        return serverCatchError(err);
    }
};