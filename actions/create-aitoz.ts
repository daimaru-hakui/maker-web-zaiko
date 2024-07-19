"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createAitoz(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard()
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    productNumber: csv[0]?.trim() + "-" + csv[2],
    productName: csv[1],
    color: csv[3],
    size: csv[4],
    stock: Number(csv[6]),
    jan: csv[5],
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: value.jan?.toString(),
    row: idx,
  }));

  console.log("アイトス upload");

  await prisma.aitoz.deleteMany();

  try {
    await prisma.aitoz.createMany({
      data: newBody,
    });
    console.log("アイトス 成功");
    await prisma.$disconnect();
    revalidatePath("/aitoz");
    return { message: "アイトス 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "アイトス 失敗" };
  }
}
