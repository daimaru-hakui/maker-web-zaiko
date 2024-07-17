import { prisma } from "@/libs/prisma";
import { ChikumaData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: ChikumaData[] } = await req.json();

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    size: value.size?.trim(),
    productNumber: value?.productNumber?.trim(),
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("チクマ upload")

  await prisma.chikuma.deleteMany();
  return await Promise.all(
    newBody.map(async (data) => await prisma.chikuma.create({ data }))
  )
    .then(async () => {
      console.log("チクマ 成功");
      await prisma.$disconnect();
      return NextResponse.json("チクマ 成功", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("チクマ 失敗", { status: 500 });
    });
}
