"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { ChikumaTable } from "./ChikumaTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Chikuma } from "@prisma/client";

type Props = {
  data: Chikuma[];
};

export default function ChikumaContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Chikuma>();
  const datalist = getDataList(data);
  
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