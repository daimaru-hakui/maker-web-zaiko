import { prisma } from "@/libs/prisma";
import { AitozData } from "@/types";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { body }: { body: AitozData[] } = await req.json();

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: value.jan?.toString(),
    row: idx,
    createdAt: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  }));
  
  console.log("Aitoz upload")

  await prisma.aitoz.deleteMany();
  return await Promise.all(
    newBody.map(async (data) => await prisma.aitoz.create({ data }))
  )
    .then(async () => {
      console.log("Aitoz 成功");
      await prisma.$disconnect();
      return NextResponse.json("Aitoz 成功", { status: 201 });
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      return NextResponse.json("Aitoz 失敗", { status: 500 });
    });
}
