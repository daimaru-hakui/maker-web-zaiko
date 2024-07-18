"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function createKarsee(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    jan: Number(csv[5]),
    productNumber: csv[2] + "-" + csv[3],
    productName: csv[15],
    size: csv[4],
    stock: Number(csv[6]),
    color: csv[17],
    nextTimeDate: csv[7],
    nextTimeStock: Number(csv[8]),
    nextTimeDate2: csv[9],
    nextTimeStock2: Number(csv[10]),
    nextTimeDate3: csv[11],
    nextTimeStock3: Number(csv[12]),
    brand: csv[1],
  }));

  const pattern = /(【\d*】)/g;
  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
    color: value?.color?.replace(pattern, ""),
  }));

  console.log("カーシーカシマ upload");

  await prisma.karsee.deleteMany();

  try {
    await prisma.karsee.createMany({
      data: newBody,
    });
    console.log("カーシーカシマ 成功");
    await prisma.$disconnect();
    revalidatePath("/karsee");
    return { message: "カーシーカシマ 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "カーシーカシマ 失敗" };
  }
}
