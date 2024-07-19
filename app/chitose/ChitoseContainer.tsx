"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { ChitoseTable } from "./ChitoseTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Chitose } from "@prisma/client";

type Props = {
  data: Chitose[];
};

export default function ChitoseContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Chitose>();
  const datalist = getDataList(data);

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