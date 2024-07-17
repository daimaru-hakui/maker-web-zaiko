import { prisma } from "@/libs/prisma";
import { YagiData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: YagiData[] } = await req.json();
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value?.productNumber?.trim(),
    productName: value?.productName?.trim(),
    stock: value.stock || 0,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("ヤギコーポレーション upload");

  await prisma.yagi.deleteMany();

  return await Promise.all(
    newBody.map(async (data) => await prisma.yagi.create({ data }))
  )
    .then(async () => {
      await prisma.$disconnect();
      return NextResponse.json("ヤギコーポレーション 成功", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("ヤギコーポレーション 失敗", { status: 500 });
    });
}
