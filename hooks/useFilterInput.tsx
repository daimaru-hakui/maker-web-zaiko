import { useState } from "react";

export function useFilterInput<T>() {
  const [filterData, setFilterData] = useState<T[]>([]);

  const addArray = (productNumber: string, data: T[]) => {
    const selectData = data.filter((d: any) => d.productNumber === productNumber || d.品番 === productNumber);
    if (!selectData) return;
    setFilterData((prev: T[]) => {
      const newData = [...prev, ...selectData];
      return newData;
    });
  };

  function getDataList(data: T[]) {
    console.log(data.length);
    const newData = data.map((d: any) => d.productNumber);
    const datalist = Array.from(new Set(newData));
    return datalist;
  }

  return {
    addArray,
    filterData,
    setFilterData,
    getDataList
  };
}