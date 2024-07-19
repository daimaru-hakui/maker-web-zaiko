"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { TombowTable } from "./TombowTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Tombow } from "@prisma/client";

type Props = {
  data: Tombow[];
};

export default function TombowContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Tombow>();
  const datalist = getDataList(data);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Kiraku"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <TombowTable filterData={filterData} />
    </Flex>
  );
}
