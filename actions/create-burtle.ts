"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createBurtle(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard()
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    jan: Number(csv[6]),
    productNumber: csv[0] + "-" + csv[2],
    productName: csv[1],
    color: csv[3],
    size: csv[4],
    stock: Number(csv[7]),
    externalStock: Number(csv[8]),
    nextTimeDate: csv[9],
    nextTimeStock: Number(csv[10]),
    nextTimeDate2: csv[11],
    nextTimeStock2: Number(csv[12]),
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  console.log("バートル upload");

  await prisma.burtle.deleteMany();

  try {
    await prisma.burtle.createMany({
      data: newBody,
    });
    console.log("バートル 成功");
    await prisma.$disconnect();
    revalidatePath("/burtle");
    return { message: "バートル 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "バートル 失敗" };
  }
}
