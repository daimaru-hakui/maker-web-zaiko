"use client";
import TableArea from "@/components/table-area";
import { db } from "@/libs/firebase";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AdminTableRow } from "./admin-table-row";
import { makerLinks } from "@/utils/makerLinks";
import { OswaldFont } from "../layout";

type User = {
  uid: string;
  email: string;
};

export const AdminTable = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    let unsub: any;
    const getUsers = () => {
      const usersRef = collection(db, "users");
      unsub = onSnapshot(usersRef, (snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id } as User))
        );
      });
    };
    getUsers();
    return () => unsub();
  }, []);

  return (
    <TableArea maxW="1500px">
      <Thead
        position="sticky"
        top={0}
        zIndex="docked"
        bg="white"
        className={`${OswaldFont.className} h-12`}
      >
        <Tr>
          <Th className="p-0 px-2">email</Th>
          {makerLinks.map((maker) => (
            <Th className="text-center p-0 px-2 min-w-[80px]" key={maker.label}>
              {maker.title}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody className={`${OswaldFont.className}`}>
        {users.map((user) => (
          <AdminTableRow key={user.uid} user={user} />
        ))}
      </Tbody>
    </TableArea>
  );
};
