"use server";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { authGuard } from "./auth-guard";

export async function createJoie(
  csvFile: string[][] | null
): Promise<{ message: string }> {
  await authGuard();
  if (!csvFile)
    return {
      message: "ファイルがありません",
    };
  csvFile.shift();
  const body = csvFile.map((csv) => ({
    productNumber: csv[1] + "-" + csv[2],
    size: csv[5],
    stock: Number(csv[6]),
    nextTimeDate: csv[8],
    nextTimeStock: Number(csv[7]),
    nextTimeDate2: csv[10],
    nextTimeStock2: Number(csv[9]),
    nextTimeDate3: csv[12],
    nextTimeStock3: Number(csv[11]),
  }));

  const newBody = body.map((value, idx: number) => ({
    ...value,
    row: idx,
  }));

  console.log("ジョア upload");

  await prisma.joie.deleteMany();

  try {
    await prisma.joie.createMany({
      data: newBody,
    });
    console.log("ジョア 成功");
    await prisma.$disconnect();
    revalidatePath("/joie");
    return { message: "ジョア 成功" };
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return { message: "ジョア 失敗" };
  }
}
