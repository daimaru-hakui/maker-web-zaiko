import { NextRequest, NextResponse } from "next/server";
import  prisma  from "@/libs/prisma";
import { BonmaxData } from "@/types";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
  const { body }: { body: BonmaxData[] } = await req.json();

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("ボンマックス upload")

  await prisma.bonmax.deleteMany();

  try {
    await prisma.bonmax.createMany({
      data: newBody,
    });
    console.log("ボンマックス 成功");
    await prisma.$disconnect();
    return NextResponse.json("ボンマックス 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("ボンマックス 失敗", { status: 500 });
  }
}
