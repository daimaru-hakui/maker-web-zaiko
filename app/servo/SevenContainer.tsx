"use client";
import { ServoData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { ServoTable } from "./ServoTable";

type Props = {
  data: ServoData[];
};

export default function ServoContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<ServoData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
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