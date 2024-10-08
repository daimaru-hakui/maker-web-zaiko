"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { SevenTable } from "./SevenTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Seven } from "@prisma/client";

type Props = {
  data: Seven[];
};

export default function SevenContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Seven>();
  const datalist = getDataList(data);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="SEVEN UNIFORM"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <SevenTable filterData={filterData} />
    </Flex>
  );
}