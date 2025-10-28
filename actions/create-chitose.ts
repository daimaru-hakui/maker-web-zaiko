"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createChitose(
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
      productNumber: csv[1],
      productName: csv[2],
      color: csv[4],
      size: csv[5],
      stock: Number(csv[6]),
      externalStock: Number(csv[7]),
      nextTimeDate: csv[8],
      nextTimeStock: Number(csv[9]),
      nextTimeDate2: csv[10],
      nextTimeStock2: Number(csv[11]),
      nextTimeDate3: csv[12],
      nextTimeStock3: Number(csv[13]),
    }));

    const patternProductNumber = /[^\d]/g;
    const patternColor = /(C|-|\/|\d)/g;
    const newBody = body.map((value, idx: number) => ({
      ...value,
      jan: String(value.jan),
      row: idx,
      productNumber:
        value.productNumber +
        "-" +
        value.color?.replace(patternProductNumber, ""),
      color: value.color?.replace(patternColor, ""),
    }));
  
    console.log("チトセ upload");
  
    await prisma.chitose.deleteMany();
  
    try {
      await prisma.chitose.createMany({
        data: newBody,
      });
      console.log("チトセ 成功");
      await prisma.$disconnect();
      revalidatePath('/chitose');
      return { message: "チトセ 成功" };
    } catch (e) {
      console.error(e);
      await prisma.$disconnect();
      return { message: "チトセ 失敗" };
    }
}