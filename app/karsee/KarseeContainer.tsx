"use client";
import { KarseeData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { KarseeTable } from "./KarseeTable";
import { useFilterInput } from "@/hooks/useFilterInput";

type Props = {
  data: KarseeData[];
};

export default function KarseeContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<KarseeData>();
  const datalist = getDataList(data);
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Karsee"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <KarseeTable filterData={filterData} />
    </Flex>
  );
}