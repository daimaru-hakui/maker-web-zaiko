"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createSelery(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard()
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[0]),
      stock: Number(csv[1]),
      nextTimeDate: csv[2],
      nextTimeStock: Number(csv[3]),
      productNumber: csv[4],
      productName: csv[5],
      color: csv[6],
      size: csv[7],
    }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  console.log("セロリー upload");

  await prisma.selery.deleteMany();

  try {
    await prisma.selery.createMany({
      data: newBody,
    });
    console.log("セロリー 成功");
    await prisma.$disconnect();
    revalidatePath('/selery');
    return { message: "セロリー 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "セロリー 失敗" };
  }
}