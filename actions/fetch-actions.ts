"use server";
import prisma from "@/lib/prisma";

export const fetchDaimaruHakuiData = async () => {
  const data = await prisma.daimaruHakui.findMany({
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

export const fetchBostonData = async () => {
  const data = await prisma.boston.findMany({
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

export async function fetchSowaData() {
  const data = await prisma.sowa.findMany({
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
