"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { BostonTable } from "./BostonTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { useRouter } from "next/navigation";
import { usePermission } from "@/hooks/usePermission";
import { Boston } from "@prisma/client";

type Props = {
  data: Boston[];
};

export default function BostonContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } =
    useFilterInput<Boston>();
  const datalist = getDataList(data);

  const router = useRouter();
  const { isAuth } = usePermission("boston");
  if (!isAuth) {
    router.push("/login");
  }
  
  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="BONUNI"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <BostonTable filterData={filterData} />
    </Flex>
  );
}
