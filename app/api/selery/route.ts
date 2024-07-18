import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { SeleryData } from "@/utils/types";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const { body }: { body: SeleryData[]; } = await req.json();
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("セロリー upload");

  await prisma.selery.deleteMany();

  try {
    await prisma.selery.createMany({
      data: newBody,
    });
    console.log("セロリー 成功");
    await prisma.$disconnect();
    revalidatePath('/selery');
    return NextResponse.json("セロリー 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("セロリー 失敗", { status: 500 });
  }
}
