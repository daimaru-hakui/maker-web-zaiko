"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { BurtleTable } from "./BurtleTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Burtle } from "@prisma/client";

type Props = {
  data: Burtle[];
};

export default function BurtleContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Burtle>();
  const datalist = getDataList(data);

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