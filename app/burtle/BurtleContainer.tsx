"use client";
import { BurtleData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { BurtleTable } from "./BurtleTable";

type Props = {
  data: BurtleData[];
};

export default function BurtleContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<BurtleData>();

  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="Burtle"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <BurtleTable filterData={filterData} />
    </Flex>
  );
}