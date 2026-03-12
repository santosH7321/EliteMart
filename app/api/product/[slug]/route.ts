import { connectDB } from "@/app/lib/db";
import serverCatchError from "@/app/lib/server-catch-error";
import { NextRequest, NextResponse as res } from "next/server";
import ProductModel from "@/app/models/product.model";
import SlugInterface from "@/app/interface/slug.interface";

export const GET = async (req: NextRequest, context: SlugInterface)=>{
    try {
        await connectDB()
        const {slug} = context.params
        const product = await ProductModel.findOne({slug})

        if(!product)
            return res.json({message: 'Product not found with slug'}, {status: 404})
        
        return res.json(product)
    }   
    catch(err)
    {
       return serverCatchError(err)
    }
}

export const PUT = async (req: NextRequest, context: SlugInterface)=>{
    try {
        await connectDB()
        const {slug: id} = context.params
        const body = await req.json()
        const product = await ProductModel.findByIdAndUpdate(id, body, {new: true})

        if(!product)
            return res.json({message: 'Product not found with slug'}, {status: 404})
        
        return res.json(product)
    }   
    catch(err)
    {
       return serverCatchError(err)
    }
}

export const DELETE = async (req: NextRequest, context: SlugInterface)=>{
    try {
        await connectDB()
        const {slug: id} = context.params
        const product = await ProductModel.findByIdAndDelete(id)

        if(!product)
            return res.json({message: 'Product not found with slug'}, {status: 404})
        
        return res.json(product)
    }   
    catch(err)
    {
       return serverCatchError(err)
    }
}

