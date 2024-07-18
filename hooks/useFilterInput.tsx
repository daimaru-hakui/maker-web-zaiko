import { useState } from "react";
import { format } from "date-fns";

export function useFilterInput<T>() {
  const [filterData, setFilterData] = useState<T[]>([]);

  const addArray = (productNumber: string, data: T[]) => {
    const selectData = data.filter(
      (d: any) => d.productNumber === productNumber || d.品番 === productNumber
    );
    if (!selectData) return;
    setFilterData((prev: T[]) => {
      const newData = [...prev, ...selectData];
      return newData;
    });
  };

  function getDataList(data: any[]) {
    console.log(data.length);
    console.log(data[0] && format(data.at(0)?.createdAt, "yyyy年MM月dd日 HH時mm分ss秒"));
    const newData = data.map((d: any) => d.productNumber);
    const datalist = Array.from(new Set(newData));
    return datalist;
  }

  return {
    addArray,
    filterData,
    setFilterData,
    getDataList,
  };
}
