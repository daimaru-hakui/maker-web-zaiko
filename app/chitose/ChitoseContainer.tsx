"use client";
import { ChitoseData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { ChitoseTable } from "./ChitoseTable";

type Props = {
  data: ChitoseData[];
};

export default function ChitoseContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<ChitoseData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="arbe / Unite"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <ChitoseTable filterData={filterData} />
    </Flex>
  );
}