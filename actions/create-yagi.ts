"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createYagi(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard()
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    brand: csv[0],
    productNumber: csv[1]?.trim() + "-" + csv[3],
    productName: csv[2],
    color: csv[3],
    size: csv[4],
    stock: Number(csv[5]),
    jan: csv[6],
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value?.productNumber?.trim(),
    productName: value?.productName?.trim(),
    stock: value.stock || 0,
  }));

  console.log("ヤギコーポレーション upload");

  await prisma.yagi.deleteMany();

  try {
    await prisma.yagi.createMany({
      data: newBody,
    });
    console.log("ヤギコーポレーション 成功");
    await prisma.$disconnect();
    revalidatePath("/yagi");
    return { message: "ヤギコーポレーション 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "ヤギコーポレーション 失敗" };
  }
}
