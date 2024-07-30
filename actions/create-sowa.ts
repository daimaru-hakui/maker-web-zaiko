"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createSowa(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard();
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    productNumber: csv[1] + "-" + csv[3],
    productName: csv[2],
    color: csv[4],
    size: csv[5],
    stock: Number(csv[6]),
    externalStock: Number(csv[7]),
    isDiscontinued: csv[8] ? true : false,
    jan: csv[0],
  }));

  const newBody = body
    .filter((value) => !value.isDiscontinued && value.productName)
    .map((value, idx: number) => ({
      ...value,
      jan: String(value.jan),
      row: idx,
    }));

  console.log("桑和 upload");

  await prisma.sowa.deleteMany();

  try {
    await prisma.sowa.createMany({
      data: newBody,
    });
    console.log("桑和 成功");
    await prisma.$disconnect();
    revalidatePath("/sowa");
    return { message: "桑和 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "桑和 失敗" };
  }
}
