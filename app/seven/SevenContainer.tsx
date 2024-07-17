"use client";
import { SevenData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { SevenTable } from "./SevenTable";

type Props = {
  data: SevenData[];
};

export default function SevenContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<SevenData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="SEVEN UNIFORM"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <SevenTable filterData={filterData} />
    </Flex>
  );
}