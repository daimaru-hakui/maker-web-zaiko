import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { SeleryData } from "@/types";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
  const { body }: { body: SeleryData[] } = await req.json();
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("セロリー upload")

  await prisma.selery.deleteMany();
  return await Promise.all(
    newBody.map(async (data) => await prisma.selery.create({ data }))
  )
    .then(async () => {
      await prisma.$disconnect();
      console.log("セロリー 成功")
      return NextResponse.json("セロリー 成功", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("セロリー 失敗", { status: 500 });
    });
}
