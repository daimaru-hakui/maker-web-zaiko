"use client";
import { CocosData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { CocosTable } from "./CocosTable";

type Props = {
  data: CocosData[];
};

export default function CocosContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<CocosData>();

  console.log(data.length);
  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="CO-COS"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <CocosTable filterData={filterData} />
    </Flex>
  );
}