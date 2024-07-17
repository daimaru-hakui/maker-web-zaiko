import  prisma  from "@/libs/prisma";
import { TombowData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: TombowData[] } = await req.json();

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value.productNumber?.trim(),
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("トンボ upload")
  
  await prisma.tombow.deleteMany();

  try {
    await prisma.tombow.createMany({
      data: newBody,
    });
    console.log("トンボ 成功");
    await prisma.$disconnect();
    return NextResponse.json("トンボ 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("トンボ 失敗", { status: 500 });
  }

  return await Promise.all(
    newBody.map(async (data) => await prisma.tombow.create({ data }))
  )
    .then(async () => {
      await prisma.$disconnect();
      return NextResponse.json("トンボ 成功", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("トンボ 失敗", { status: 500 });
    });
}
