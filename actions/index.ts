"use server";
import { db } from "@/firebase/server";
import prisma from "@/libs/prisma";
import { options } from "@/providers/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function authGuard(maker: string) {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }
  const makerRef = db
    .collection("users")
    .doc(session.user.uid)
    .collection("permissions")
    .doc("maker");

  const makerSnap = await makerRef.get();
  const obj = { ...makerSnap.data() };

  if (!obj[maker]) {
    redirect("/login");
  }
}

export const fetchAitozData = async () => {
  const data = await prisma.aitoz.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchBonmaxData = async () => {
  const data = await prisma.bonmax.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchBurtleData = async () => {
  const data = await prisma.burtle.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchChikumaData = async () => {
  const data = await prisma.chikuma.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchChitoseData = async () => {
  const data = await prisma.chitose.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchCocosData = async () => {
  const data = await prisma.cocos.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchJoieData = async () => {
  const data = await prisma.joie.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchKarseeData = async () => {
  const data = await prisma.karsee.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchSeleryData = async () => {
  const data = await prisma.selery.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchServoData = async () => {
  const data = await prisma.servo.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchSevenData = async () => {
  const data = await prisma.seven.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export const fetchTombowData = async () => {
  const data = await prisma.tombow.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
};

export async function fetchYagiData() {
  const data = await prisma.yagi.findMany({
    orderBy: {
      row: "asc",
    },
    where: {
      productNumber: {
        notIn: [""],
      },
    },
  });
  return data;
}
