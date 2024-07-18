import prisma from "@/libs/prisma";
import { ChitoseData } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const { body }: { body: ChitoseData[]; } = await req.json();
  const patternProductNumber = /[^\d]/g;
  const patternColor = /(C|-|\/|\d)/g;
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber:
      value.productNumber +
      "-" +
      value.color?.replace(patternProductNumber, ""),
    color: value.color?.replace(patternColor, ""),
  }));

  console.log("チトセ upload");

  await prisma.chitose.deleteMany();

  try {
    await prisma.chitose.createMany({
      data: newBody,
    });
    console.log("チトセ 成功");
    await prisma.$disconnect();
    revalidatePath('/chitose');
    return NextResponse.json("チトセ 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("チトセ 失敗", { status: 500 });
  }
}
