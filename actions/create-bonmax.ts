"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function createBonmax(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  const body = csvFile.map((csv) => ({
    jan: Number(csv[0]),
    productNumber: csv[1] + "-" + csv[3],
    productName: csv[2],
    color: csv[4],
    size: csv[5],
    stock: Number(csv[7]),
    nextTimeStock: Number(csv[8]),
    externalStock: Number(csv[9]),
    nextTimeDate: csv[10],
    leadTime: csv[11],
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  console.log("ボンマックス upload");

  await prisma.bonmax.deleteMany();

  try {
    await prisma.bonmax.createMany({
      data: newBody,
    });
    console.log("ボンマックス 成功");
    await prisma.$disconnect();
    revalidatePath("/bonmax");
    return { message: "ボンマックス 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return  { message: "ボンマックス 失敗" };
  }
}
