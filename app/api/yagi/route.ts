import prisma from "@/libs/prisma";
import { YagiData } from "@/utils/types";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: YagiData[]; } = await req.json();
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value?.productNumber?.trim(),
    productName: value?.productName?.trim(),
    stock: value.stock || 0,
  }));

  console.log("ヤギコーポレーション upload");

  await prisma.yagi.deleteMany();

  try {
    await prisma.yagi.createMany({
      data: newBody,
    });
    console.log("ヤギ 成功");
    await prisma.$disconnect();
    revalidatePath('/yagi');
    return NextResponse.json("ヤギ 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("ヤギ 失敗", { status: 500 });
  }
}
