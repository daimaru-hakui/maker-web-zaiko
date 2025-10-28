"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createDaimaruHakui(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard();
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    productNumber: csv[0],
    color: csv[1],
    productName: csv[2],
    size: csv[3],
    stock: Number(csv[4]),
    externalStock: Number(csv[5]),
    nextTimeStock: Number(csv[9]),
    totalStock: Number(csv[7]),
  }));
  const patternProductNumber = /[^\d]/g;
  const patternColor = /(C|-|\/|\d)/g;
  const newBody = body.map((value, idx: number) => {
    const dash = value.color ? "-" : "";
    return {
      ...value,
      row: idx,
      productNumber:
        value.productNumber +
        dash +
        value.color?.replace(patternProductNumber, ""),
      color: value.color?.replace(patternColor, ""),
    };
  })

  console.log("大丸白衣 upload");

  await prisma.daimaruHakui.deleteMany();

  try {
    await prisma.daimaruHakui.createMany({
      data: newBody,
    });
    console.log("大丸白衣 成功");
    await prisma.$disconnect();
    revalidatePath("/daimaru-hakui");
    return { message: "大丸白衣 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "大丸白衣 失敗" };
  }
}
