import { connectDB } from "@/app/lib/db";
import serverCatchError from "@/app/lib/server-catch-error";
import { NextRequest, NextResponse as res } from "next/server";
import ProductModel from "@/app/models/product.model";
import path from "path";
import fs from "fs"
import {v4 as uuid} from "uuid"

export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const body = await req.formData()
        const file = body.get('image') as File | null

        if(!file)
            return res.json({message: "Product image not sent"}, {status: 400})

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const root = process.cwd()
        const folder = path.join(root, "public", "products")
        const fileName = `${uuid()}.png`
        const filePath = path.join(folder, fileName)

        fs.writeFileSync(filePath, buffer)

        const payload = {
            title: body.get("title"),
            description: body.get("description"),
            price: body.get("price"),
            discount: body.get("discount"),
            image: `/products/${fileName}`,
        }

        const product = await ProductModel.create(payload)
        return res.json(product)
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
