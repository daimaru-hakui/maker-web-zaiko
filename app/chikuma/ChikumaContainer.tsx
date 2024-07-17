"use client";
import { ChikumaData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { ChikumaTable } from "./ChikumaTable";

type Props = {
  data: ChikumaData[];
};

export default function ChikumaContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<ChikumaData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="ALPHAPIER / FELLOWS"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <ChikumaTable filterData={filterData} />
    </Flex>
  );
}