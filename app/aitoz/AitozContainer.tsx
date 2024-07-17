"use client";
import { AitozData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { AitozTable } from "./AitozTable";

type Props = {
  data: AitozData[];
};

export default function AitozContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<AitozData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Aitoz"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <AitozTable filterData={filterData} />
    </Flex>
  );
}