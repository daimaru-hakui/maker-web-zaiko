import prisma from "@/libs/prisma";
import { JoieData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: JoieData[] } = await req.json();
  const newBody = body.map((value, idx: number) => ({
    ...value,
    row: idx,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));

  console.log("ジョア upload")

  await prisma.joie.deleteMany();

  try {
    await prisma.joie.createMany({
      data: newBody,
    });
    console.log("ジョア 成功");
    await prisma.$disconnect();
    return NextResponse.json("ジョア 成功", { status: 201 });
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return NextResponse.json("ジョア 失敗", { status: 500 });
  }

  return await Promise.all(
    newBody.map(async (data) => await prisma.joie.create({ data }))
  )
    .then(async () => {
      console.log("ジョア 成功");
      await prisma.$disconnect();
      return NextResponse.json("ジョア 成功", { status: 201 });
    })
    .catch(async (err) => {
      console.error(err);
      await prisma.$disconnect();
      return NextResponse.json("ジョア 失敗", { status: 500 });
    });
}
