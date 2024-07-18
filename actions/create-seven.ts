"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function createSeven(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    productNumber: csv[0],
    productName: csv[1],
    color: csv[2],
    size: csv[3],
    stock: Number(csv[4]),
    jan: csv[6],
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  console.log("セブンユニフォーム upload");

  await prisma.seven.deleteMany();

  try {
    await prisma.seven.createMany({
      data: newBody,
    });
    console.log("セブンユニフォーム 成功");
    await prisma.$disconnect();
    revalidatePath("/seveb");
    return { message: "セブンユニフォーム 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "セブンユニフォーム 失敗" };
  }
}
