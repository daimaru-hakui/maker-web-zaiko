"use client";
import { BurtleData } from "@/utils/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { BurtleTable } from "./BurtleTable";
import { useFilterInput } from "@/hooks/useFilterInput";

type Props = {
  data: BurtleData[];
};

export default function BurtleContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<BurtleData>();
  const datalist = getDataList(data);
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Burtle"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <BurtleTable filterData={filterData} />
    </Flex>
  );
}