import prisma from "@/libs/prisma";
import { KarseeData } from "@/utils/types";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: KarseeData[]; } = await req.json();
  const pattern = /(【\d*】)/g;
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    color: value?.color?.replace(pattern, ""),
  }));

  console.log("カーシーカシマ upload");

  await prisma.karsee.deleteMany();

  try {
    await prisma.karsee.createMany({
      data: newBody,
    });
    console.log("カーシーカシマ 成功");
    await prisma.$disconnect();
    revalidatePath('/karsee');
    return NextResponse.json("カーシーカシマ 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("カーシーカシマ 失敗", { status: 500 });
  }
}
