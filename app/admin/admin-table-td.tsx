"use client";
import { db } from "@/lib/firebase/client";
import { Switch, Td } from "@chakra-ui/react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React, { FC } from "react";

type Props = {
  uid: string;
  isMaker?: boolean;
  title: string;
};
export const AdminTableTd: FC<Props> = ({ uid, isMaker, title }) => {
  const checked = isMaker ? true : false;

  const updateMaker = async () => {
    try {
      const makerDoc = doc(db, "users", uid, "permissions", "makers");
      const docSnapshot = await getDoc(makerDoc);
      if (!docSnapshot.exists()) {
        await setDoc(makerDoc, {
          [title]: !isMaker,
        })
        return
      }
      await updateDoc(makerDoc, {
        [title]: !isMaker,
      });
    } catch (error) {
      console.error("Error updating maker:", error)
    }
  };

  return (
    <Td className="p-1 text-center">
      <Switch
        className="p-0"
        id="email-alerts"
        isChecked={checked}
        onChange={updateMaker}
      />
    </Td>
  );
};
