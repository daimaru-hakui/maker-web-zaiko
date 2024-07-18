"use client";
import TableArea from "@/components/table-area";
import { db } from "@/libs/firebase";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AdminTableRow } from "./admin-table-row";
import { makerLinks } from "@/utils/makerLinks";

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
      <Table size="md" variant="simple" bg="white">
        <Thead position="sticky" top={0} zIndex="docked" bg="white">
          <Tr>
            <Th>email</Th>
            {makerLinks.map((maker) => (
              <Th key={maker.label}>{maker.title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <AdminTableRow key={user.uid} user={user} />
          ))}
        </Tbody>
      </Table>
    </TableArea>
  );
};
