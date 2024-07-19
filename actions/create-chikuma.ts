"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createChikuma(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard();
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    jan: Number(csv[9]),
    productNumber: csv[0],
    size: csv[2],
    stock: Number(csv[3]),
    inspectStock: Number(csv[4]),
    nextTimeDate: csv[5],
    nextTimeStock: Number(csv[6]),
    nextTimeDate2: csv[7],
    nextTimeStock2: Number(csv[8]),
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    size: value.size?.trim(),
    productNumber: value?.productNumber?.trim(),
  }));

  console.log("チクマ upload");

  await prisma.chikuma.deleteMany();

  try {
    await prisma.chikuma.createMany({
      data: newBody,
    });
    console.log("チクマ 成功");
    await prisma.$disconnect();
    revalidatePath("/chikuma");
    return { message: "チクマ 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "チクマ 失敗" };
  }
}
