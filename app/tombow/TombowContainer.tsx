"use client";
import { TombowData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { TombowTable } from "./TombowTable";

type Props = {
  data: TombowData[];
};

export default function TombowContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<TombowData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

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
