"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { ServoTable } from "./ServoTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { Servo } from "@prisma/client";

type Props = {
  data: Servo[];
};

export default function ServoContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Servo>();
  const datalist = getDataList(data);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Servo"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <ServoTable filterData={filterData} />
    </Flex>
  );
}