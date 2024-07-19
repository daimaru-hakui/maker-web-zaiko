"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createServo(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard()
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    jan: Number(csv[10]),
    productNumber: csv[0],
    productName: csv[1],
    color: csv[2],
    size: csv[3],
    stock: Number(csv[4]),
    nextTimeDate: csv[5],
    nextTimeStock: Number(csv[6]),
    nextTimeDate2: csv[7],
    nextTimeStock2: Number(csv[8]),
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    jan: String(value.jan),
    row: idx,
  }));

  console.log("サーヴォ upload");

  await prisma.servo.deleteMany();

  try {
    await prisma.servo.createMany({
      data: newBody,
    });
    console.log("サーヴォ 成功");
    await prisma.$disconnect();
    revalidatePath("/servo");
    return { message: "サーヴォ 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "サーヴォ 失敗" };
  }
}
