import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import prisma from "@/prisma/client";

const issueCreateSchema = z.object({
    title: z.string().min(1,"title is required").max(225),
    description: z.string().min(3,"Description is required").max(1024),
})
export async function POST(request : NextRequest) {

    const body = await request.json();
    const validation = issueCreateSchema.safeParse(body);
    if (!validation.success){
        return NextResponse.json(validation.error.format(), {status: 400});
    }
       
    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description,
        }
    })
    return NextResponse.json(newIssue, {status: 201});
  
}