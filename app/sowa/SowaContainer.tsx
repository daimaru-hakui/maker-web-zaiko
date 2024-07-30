"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Sowa } from "@prisma/client";
import { SowaTable } from "./SowaTable";

type Props = {
  data: Sowa[];
};

export default function SowaContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Sowa>();
  const datalist = getDataList(data);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Sowa"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <SowaTable filterData={filterData} />
    </Flex>
  );
}