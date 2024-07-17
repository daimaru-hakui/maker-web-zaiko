import prisma from "@/libs/prisma";
import { AitozData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await prisma.aitoz.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return NextResponse.json({ data }, { status: 201 });
}

export async function POST(req: NextRequest) {
  const { body }: { body: AitozData[] } = await req.json();

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: value.jan?.toString(),
    row: idx,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("Aitoz upload");

  await prisma.aitoz.deleteMany();

  try {
    await prisma.aitoz.createMany({
      data: newBody,
    });
    console.log("アイトス 成功");
    await prisma.$disconnect();
    return NextResponse.json("アイトス 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("アイトス 失敗", { status: 500 });
  }
}
