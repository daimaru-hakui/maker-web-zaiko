"use client";
import { DaimaruTable } from "@/app/daimaru/Daimaru-table";
import React, { useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import { DaimaruData } from "@/types";
import { Flex } from "@chakra-ui/react";
import { FilterInput } from "@/components/FilterInput";
import LoadingSpinner from "@/components/spinner";
import { useAddToArray } from "@/hooks/useAddToArray";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

const DaimaruArea = () => {
  const { addArray, filterData, setFilterData } = useAddToArray<DaimaruData>();

  const { data }: { data: DaimaruData[] | undefined } = useFetch({
    url: "/api/daimaru",
    queryKey: "daimaru",
  });

  const user = useSession();
  useEffect(() => {
    if (!user.data?.user.uid) return;
    const logsRef = collection(db, "users", user.data?.user.uid, "AccessLogs");
    addDoc(logsRef, {
      uid: user.data.user.uid,
      createdAt: serverTimestamp(),
    });
  }, [user.data?.user.uid]);

  if (!data) return <LoadingSpinner />;
  const newData = data.map((d) => d.品番);
  const datalist = Array.from(new Set(newData));

  return (
    <Flex direction="column" alignItems="center" w="full">
      <FilterInput
        title="大丸白衣"
        setFilterData={setFilterData}
        datalist={datalist}
        addArray={addArray}
        allData={data}
      />
      <DaimaruTable filterData={filterData} />
    </Flex>
  );
};

export default DaimaruArea;
