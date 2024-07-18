"use client";
import { ChitoseData } from "@/utils/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { ChitoseTable } from "./ChitoseTable";
import { useFilterInput } from "@/hooks/useFilterInput";

type Props = {
  data: ChitoseData[];
};

export default function ChitoseContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<ChitoseData>();
  const datalist = getDataList(data);
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