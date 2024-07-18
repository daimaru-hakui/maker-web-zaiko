"use client";
import { SevenData } from "@/utils/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { SevenTable } from "./SevenTable";
import { useFilterInput } from "@/hooks/useFilterInput";

type Props = {
  data: SevenData[];
};

export default function SevenContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<SevenData>();
  const datalist = getDataList(data);
  console.log(data[0]?.createdAt);

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