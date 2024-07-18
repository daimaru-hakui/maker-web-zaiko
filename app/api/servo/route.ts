import { NextRequest, NextResponse } from "next/server";
import { ServoData } from "@/utils/types";
import prisma from "@/libs/prisma";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const { body }: { body: ServoData[]; } = await req.json();
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("サーヴォ upload");

  await prisma.servo.deleteMany();

  try {
    await prisma.servo.createMany({
      data: newBody,
    });
    console.log("サーヴォ 成功");
    await prisma.$disconnect();
    revalidatePath('/servo');
    return NextResponse.json("サーヴォ 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("サーヴォ 失敗", { status: 500 });
  }
}
