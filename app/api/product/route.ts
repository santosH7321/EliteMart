import { connectDB } from "@/lib/db";
import serverCatchError from "@/lib/server-catch-error";
import { NextRequest, NextResponse as res } from "next/server";
import ProductModel from "@/models/product.model";
import cloudinary from "@/lib/cloudinary";

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = await req.formData();
    const file = body.get("image") as File | null;

    if (!file)
      return res.json({ message: "Product image not sent" }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const uploaded = await cloudinary.uploader.upload(base64, {
      folder: "elitemart/products",
    });

    const payload = {
      title: body.get("title"),
      description: body.get("description"),
      price: Number(body.get("price")),
      discount: Number(body.get("discount")),
      image: uploaded.secure_url,
    };

    const product = await ProductModel.create(payload);
    return res.json(product);
  } catch (err) {
    return serverCatchError(err);
  }
};

export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url)
        const slug = searchParams.get("slug")

        if (slug) {
            const product = await ProductModel.findOne({ slug })
            if (!product)
                return res.json({ message: "Product not found" }, { status: 404 })
            return res.json(product)
        }

        const products = await ProductModel.find()
        return res.json(products)

    } catch (err) {
        return serverCatchError(err)
    }
}
