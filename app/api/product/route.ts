import { connectDB } from "@/app/lib/db";
import serverCatchError from "@/app/lib/server-catch-error";
import { NextRequest, NextResponse as res } from "next/server";
import ProductModel from "@/app/models/product.model";

export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const body = await req.json();
        const product = await ProductModel.create(body);
        return res.json(product);
    } catch (err) {
        return serverCatchError(err);
    }
};

export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const products = await ProductModel.find();
        return res.json(products);
    } catch (err) {
        return serverCatchError(err);
    }
};
