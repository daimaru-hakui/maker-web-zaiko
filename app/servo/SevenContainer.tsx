"use client";
import { ServoData } from "@/utils/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { ServoTable } from "./ServoTable";
import { useFilterInput } from "@/hooks/useFilterInput";

type Props = {
  data: ServoData[];
};

export default function ServoContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<ServoData>();
  const datalist = getDataList(data);
  console.log(data[0]?.createdAt);

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