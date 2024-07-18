import { useFetchPost } from "./useFetchPost";
import { useState } from "react";

export const useCsvUpload = () => {
  const { fetchPost } = useFetchPost();

  const tombowCsvRegister = async (
    csvFile: string[][] | null
  ): Promise<void> => {
    if (!csvFile) return;
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[4]),
      productNumber: csv[0].trim() + "-" + csv[1],
      color: csv[1],
      size: csv[2],
      stock: Number(csv[3]),
    }));
    return await fetchPost({ body, url: "/api/tombow" });
  };

  const seleryCsvRegister = async (
    csvFile: string[][] | null
  ): Promise<void> => {
    if (!csvFile) return;
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[0]),
      stock: Number(csv[1]),
      nextTimeDate: csv[2],
      nextTimeStock: Number(csv[3]),
      productNumber: csv[4],
      productName: csv[5],
      color: csv[6],
      size: csv[7],
    }));
    return await fetchPost({ body, url: "/api/selery" });
  };

  
  const servoCsvRegister = async (
    csvFile: string[][] | null
  ): Promise<void> => {
    if (!csvFile) return;
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
    return await fetchPost({ body, url: "/api/servo" });
  };
  
  const chikumaCsvRegister = async (
    csvFile: string[][] | null
  ): Promise<void> => {
    if (!csvFile) return;
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      jan: Number(csv[9]),
      productNumber: csv[0],
      size: csv[2],
      stock: Number(csv[3]),
      inspectStock: Number(csv[4]),
      nextTimeDate: csv[5],
      nextTimeStock: Number(csv[6]),
      nextTimeDate2: csv[7],
      nextTimeStock2: Number(csv[8]),
    }));
    return await fetchPost({ body, url: "/api/chikuma" });
  };
  
  const karseeCsvRegister = async (
    csvFile: string[][] | null
  ): Promise<void> => {
    if (!csvFile) return;
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
    return await fetchPost({ body, url: "/api/karsee" });
  };
  
  // const karseeCsvRegister = async (csvFile: string[][] | null) => {
    //   if (!csvFile) return;
    //   setIsLoading(true);
    //   csvFile.shift();
    //   const body = csvFile.map((csv) => ({
      //     jan: Number(csv[4]),
      //     productNumber: csv[1] + "-" + csv[2],
      //     productName: csv[9],
      //     size: csv[3],
      //     stock: Number(csv[6]),
      //     color: csv[11],
      //     nextTimeDate: csv[5],
      //     brand: csv[0],
      //   }));
      //   return await fetchPost({ body, url: "/api/karsee" });
      // };
      
      const chitoseCsvRegister = async (
        csvFile: string[][] | null
      ): Promise<void> => {
        if (!csvFile) return;
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
        return await fetchPost({ body, url: "/api/chitose" });
      };
      
      const burtleCsvRegister = async (
        csvFile: string[][] | null
      ): Promise<void> => {
        if (!csvFile) return;
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
    return await fetchPost({ body, url: "/api/burtle" });
  };
  
  const joieCsvRegister = async (csvFile: string[][] | null): Promise<void> => {
    if (!csvFile) return;
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
    return await fetchPost({ body, url: "/api/joie" });
  };
  
  const sevenCsvRegister = async (
    csvFile: string[][] | null
  ): Promise<void> => {
    if (!csvFile) return;
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      productNumber: csv[0],
      productName: csv[1],
      color: csv[2],
      size: csv[3],
      stock: Number(csv[4]),
      jan: csv[6],
    }));
    return await fetchPost({ body, url: "/api/seven" });
  };
  
  const yagiCsvRegister = async (csvFile: string[][] | null): Promise<void> => {
    if (!csvFile) return;
    csvFile.shift();
    const body = csvFile.map((csv) => ({
      brand: csv[0],
      productNumber: csv[1]?.trim() + "-" + csv[3],
      productName: csv[2],
      color: csv[3],
      size: csv[4],
      stock: Number(csv[5]),
      jan: csv[6],
    }));
    return await fetchPost({ body, url: "/api/yagi" });
  };
  
  // const bonmaxCsvRegister = async (
  //   csvFile: string[][] | null
  // ): Promise<void> => {
  //   if (!csvFile) return;
  //   const body = csvFile.map((csv) => ({
  //     jan: Number(csv[0]),
  //     productNumber: csv[1] + "-" + csv[3],
  //     productName: csv[2],
  //     color: csv[4],
  //     size: csv[5],
  //     stock: Number(csv[7]),
  //     nextTimeStock: Number(csv[8]),
  //     externalStock: Number(csv[9]),
  //     nextTimeDate: csv[10],
  //     leadTime: csv[11],
  //   }));
  //   return await fetchPost({ body, url: "/api/bonmax" });
  // };

  // const cocosCsvRegister = async (
    //   csvFile: string[][] | null
    // ): Promise<void> => {
      //   if (!csvFile) return;
      //   csvFile.shift();
      //   const body = csvFile.map((csv) => ({
        //     productNumber: csv[6]?.trim() + "-" + csv[4],
        //     productName: csv[7],
        //     color: csv[8],
        //     size: csv[9],
        //     stock: Number(csv[13]),
        //     nextTimeDate: csv[14],
        //     nextTimeStock: Number(csv[15]),
        //     jan: csv[10],
        //   }));
  //   return await fetchPost({ body, url: "/api/cocos" });
  // };

  // const aitozCsvRegister = async (
  //   csvFile: string[][] | null
  // ): Promise<void> => {
  //   if (!csvFile) return;
  //   csvFile.shift();
  //   const body = csvFile.map((csv) => ({
  //     productNumber: csv[0]?.trim() + "-" + csv[2],
  //     productName: csv[1],
  //     color: csv[3],
  //     size: csv[4],
  //     stock: Number(csv[6]),
  //     jan: csv[5],
  //   }));
  //   return await fetchPost({ body, url: "/api/aitoz" });
  // };


  return {
    tombowCsvRegister,
    seleryCsvRegister,
    servoCsvRegister,
    chikumaCsvRegister,
    karseeCsvRegister,
    chitoseCsvRegister,
    burtleCsvRegister,
    joieCsvRegister,
    sevenCsvRegister,
    yagiCsvRegister,
  };
};
