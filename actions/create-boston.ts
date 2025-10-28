"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createBoston(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard();
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  const body = csvFile.map((csv) => ({
    productNumber: csv[0],
    productName: csv[1],
    size: csv[3],
    stock: Number(csv[4]) || 0,
    externalStock: Number(csv[5]) || 0,
    nextTimeDate: csv[6],
    nextTimeStock: Number(csv[7]) || 0,
    jan: Number(csv[8]),
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  console.log("ボストン商会 upload");

  await prisma.boston.deleteMany();

  try {
    await prisma.boston.createMany({
      data: newBody,
    });
    console.log("ボストン商会 成功");
    await prisma.$disconnect();
    revalidatePath("/boston");
    return { message: "ボストン商会 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "ボストン商会 失敗" };
  }
}
