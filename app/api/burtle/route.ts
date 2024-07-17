import { prisma } from "@/libs/prisma";
import { BurtleData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: BurtleData[] } = await req.json();

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("バートル upload")

  await prisma.burtle.deleteMany();
  return await Promise.all(
    newBody.map(async (data) => await prisma.burtle.create({ data }))
  )
    .then(async () => {
      console.log("バートル 成功");
      await prisma.$disconnect();
      return NextResponse.json("バートル 成功", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("バートル 失敗", { status: 500 });
    });
}