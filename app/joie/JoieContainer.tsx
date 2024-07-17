"use client";
import { JoieData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { JoieTable } from "./JoieTable";

type Props = {
  data: JoieData[];
};

export default function JoieContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<JoieData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

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