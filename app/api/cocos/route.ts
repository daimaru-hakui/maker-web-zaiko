import { CocosData } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { format } from "date-fns";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const { body }: { body: CocosData[]; } = await req.json();
  const patternColor = /(\s|\d)/g;
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value.productNumber,
    productName: value.productName?.trim(),
    color: value.color?.replace(patternColor, ""),
    size: value.size?.trim(),
    nextTimeDate: value.nextTimeDate?.trim(),
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("コーコス upload");

  await prisma.cocos.deleteMany();

  try {
    await prisma.cocos.createMany({
      data: newBody,
    });
    console.log("コーコス 成功");
    await prisma.$disconnect();
    revalidatePath('/cocos');
    return NextResponse.json("コーコス 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("コーコス 失敗", { status: 500 });
  }
}
