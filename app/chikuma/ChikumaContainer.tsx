"use client";
import { ChikumaData } from "@/utils/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { ChikumaTable } from "./ChikumaTable";
import { useFilterInput } from "@/hooks/useFilterInput";

type Props = {
  data: ChikumaData[];
};

export default function ChikumaContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<ChikumaData>();
  const datalist = getDataList(data);
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