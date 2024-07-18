import { NextRequest, NextResponse } from "next/server";
import { SevenData } from "@/utils/types";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const { body }: { body: SevenData[]; } = await req.json();
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  console.log("セブンユニフォーム upload");

  await prisma.seven.deleteMany();

  try {
    await prisma.seven.createMany({
      data: newBody,
    });
    console.log("コーコス 成功");
    await prisma.$disconnect();
    revalidatePath('/seveb');
    return NextResponse.json("セブン 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("セブン 失敗", { status: 500 });
  }
}
