"use client";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import { BonmaxTable } from "./BonmaxTable";
import { useFilterInput } from "@/hooks/useFilterInput";
import { useRouter } from "next/navigation";
import { usePermission } from "@/hooks/usePermission";
import { Bonmax } from "@prisma/client";

type Props = {
  data: Bonmax[];
};

export default function BonmaxContainer({ data }: Props) {
  const { addArray, filterData, setFilterData, getDataList } = useFilterInput<Bonmax>();
  const datalist = getDataList(data);

  const router = useRouter();
  const { isAuth } = usePermission("bonmax");
  if (!isAuth) {
    router.push('/login');
  }
  console.log(isAuth);

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