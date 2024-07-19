"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { JoieTable } from "./JoieTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Joie } from "@prisma/client";

type Props = {
  data: Joie[];
};

export default function JoieContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Joie>();
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
      <JoieTable filterData={filterData} />
    </Flex>
  );
}