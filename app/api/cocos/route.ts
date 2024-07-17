import { prisma } from "@/libs/prisma";
import { CocosData } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
  const { body }: { body: CocosData[] } = await req.json();
  const patternColor = /(\s|\d)/g;
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value.productNumber,
    productName: value.productName?.trim(),
    color: value.color?.replace(patternColor, ""),
    size: value.size?.trim(),
    nextTimeDate: value.nextTimeDate?.trim(),
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("コーコス upload")

  await prisma.cocos.deleteMany();
  return await Promise.all(
    newBody.map(async (data) => await prisma.cocos.create({ data }))
  )
    .then(async () => {
      console.log("コーコス 成功");
      await prisma.$disconnect();
      return NextResponse.json("コーコス 成功", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("コーコス 失敗", { status: 500 });
    });
}
