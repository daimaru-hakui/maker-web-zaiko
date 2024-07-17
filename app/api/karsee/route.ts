import { prisma } from "@/libs/prisma";
import { KarseeData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: KarseeData[] } = await req.json();
  const pattern = /(【\d*】)/g;
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    color: value?.color?.replace(pattern, ""),
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("カーシーカシマ upload")

  await prisma.karsee.deleteMany();
  return await Promise.all(
    newBody.map(async (data) => await prisma.karsee.create({ data }))
  )
    .then(async () => {
      console.log("カーシーカシマ 成功");
      await prisma.$disconnect();
      return NextResponse.json("カーシーカシマ 成功", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("カーシーカシマ 失敗", { status: 500 });
    });
}
