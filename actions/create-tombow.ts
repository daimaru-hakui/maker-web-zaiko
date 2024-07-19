"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createTombow(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard()
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    jan: Number(csv[4]),
    productNumber: csv[0].trim() + "-" + csv[1],
    color: csv[1],
    size: csv[2],
    stock: Number(csv[3]),
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value.productNumber?.trim(),
  }));

  console.log("トンボ upload");

  await prisma.tombow.deleteMany();

  try {
    await prisma.tombow.createMany({
      data: newBody,
    });
    console.log("トンボ 成功");
    await prisma.$disconnect();
    revalidatePath("/tombow");
    return { message: "トンボ 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "トンボ 失敗" };
  }
}
