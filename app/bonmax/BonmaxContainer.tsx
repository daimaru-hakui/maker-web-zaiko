"use client";
import { BonmaxData } from "@/types";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { useAddToArray } from "@/hooks/useAddToArray";
import { BonmaxTable } from "./BonmaxTable";

type Props = {
  data: BonmaxData[];
};

export default function BonmaxContainer({ data }: Props) {
  const { addArray, filterData, setFilterData } = useAddToArray<BonmaxData>();

  console.log(data.length);
  const newData = data.map((d) => d.productNumber);
  const datalist = Array.from(new Set(newData));
  console.log(data[0]?.createdAt);

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="FACEMIX / BON / LIFEMAX"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <BonmaxTable filterData={filterData} />
    </Flex>
  );
}