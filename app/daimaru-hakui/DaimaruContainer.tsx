"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useFilterInput } from "@/hooks/useFilterInput";
import { DaimaruTable } from "./DaimaruTable";
import { DaimaruHakui } from "@prisma/client";

type Props = {
  data: DaimaruHakui[];
};

export default function DaimaruContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<DaimaruHakui>();
  const datalist = getDataList(data);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="enjoie"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <DaimaruTable filterData={filterData} />
    </Flex>
  );
}