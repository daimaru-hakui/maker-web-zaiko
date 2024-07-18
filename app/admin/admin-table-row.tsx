import { db } from "@/libs/firebase";
import { Td, Tr } from "@chakra-ui/react";
import { doc, onSnapshot } from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";
import { AdminTableTd } from "./admin-table-td";
import { Maker } from "@/utils/types";
import { makerLinks } from "@/utils/makerLinks";

type Props = {
  user: {
    uid: string;
    email: string;
  };
};

export const AdminTableRow: FC<Props> = ({ user: { uid, email } }) => {
  const [makers, setMakers] = useState<any[]>();

  useEffect(() => {
    const getMaker = async () => {
      const makerDoc = doc(db, "users", `${uid}`, "permissions", "makers");
      onSnapshot(makerDoc, (snapshot) => {
        setMakers(Object.entries({ ...snapshot.data() } as Maker));
      });
    };
    getMaker();
  }, [uid]);

  return (
    <Tr key={uid}>
      <Td>{email}</Td>
      {makerLinks.map((maker) => {
        const target = makers?.find((m) => m[0] == maker.title);
        return (
          <AdminTableTd
            key={maker.label}
            uid={uid}
            title={maker.title}
            isMaker={target ? target[1] : false}
          />
        );
      })}
    </Tr>
  );
};
