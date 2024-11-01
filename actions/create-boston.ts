"use server";
import prisma from "@/libs/prisma";
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
    jan: Number(csv[0]),
    productNumber: csv[1] + "-" + csv[3],
    productName: csv[2],
    size: csv[5],
    stock: Number(csv[7]),
    externalStock: Number(csv[9]),
    nextTimeStock: Number(csv[8]),
    nextTimeDate: csv[10],
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
