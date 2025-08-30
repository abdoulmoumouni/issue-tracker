import { issueCreateSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = await parseInt(params.id);
  const body = await request.json();
  const validation = issueCreateSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format, { status: 404 });

  const issue = await prisma.issue.findUnique({
    where: { id: id },
  });
  if (!issue)
    return NextResponse.json({ error: "Issue not found" }, { status: 400 });

  const updatedissue = await prisma.issue.update({
    where: { id: id },
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(updatedissue);
}
