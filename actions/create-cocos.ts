"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function createCocos(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      productNumber: csv[6]?.trim() + "-" + csv[4],
      productName: csv[7],
      color: csv[8],
      size: csv[9],
      stock: Number(csv[13]),
      nextTimeDate: csv[14],
      nextTimeStock: Number(csv[15]),
      jan: csv[10],
    }));

  const patternColor = /(\s|\d)/g;
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    productNumber: value.productNumber,
    productName: value.productName?.trim(),
    color: value.color?.replace(patternColor, ""),
    size: value.size?.trim(),
    nextTimeDate: value.nextTimeDate?.trim(),
  }));

  console.log("コーコス upload");

  await prisma.cocos.deleteMany();

  try {
    await prisma.cocos.createMany({
      data: newBody,
    });
    console.log("コーコス 成功");
    await prisma.$disconnect();
    revalidatePath('/cocos');
    return { message: "コーコス 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "コーコス 失敗" };
  }
}