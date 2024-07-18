import prisma from "@/libs/prisma";
import { JoieData } from "@/utils/types";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: JoieData[]; } = await req.json();
  const newBody = body.map((value, idx: number) => ({
    ...value,
    row: idx,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("ジョア upload");

  await prisma.joie.deleteMany();

  try {
    await prisma.joie.createMany({
      data: newBody,
    });
    console.log("ジョア 成功");
    await prisma.$disconnect();
    revalidatePath('/joie');
    return NextResponse.json("ジョア 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("ジョア 失敗", { status: 500 });
  }
}
