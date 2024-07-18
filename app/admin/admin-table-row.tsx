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
  const [makers, setMakers] = useState<Maker>();

  useEffect(() => {
    const getMaker = async () => {
      const makerDoc = doc(db, "users", `${uid}`, "permissions", "maker");
      onSnapshot(makerDoc, (snapshot) => {
        setMakers({ ...snapshot.data() } as Maker);
      });
    };
    getMaker();
  }, [uid]);

  return (
    <Tr key={uid}>
      <Td>{email}</Td>
      <AdminTableTd uid={uid} title="daimaru" isMaker={makers?.daimaru} />
      <AdminTableTd uid={uid} title="tombow" isMaker={makers?.tombow} />
      <AdminTableTd uid={uid} title="chikuma" isMaker={makers?.chikuma} />
      <AdminTableTd uid={uid} title="selery" isMaker={makers?.selery} />
      <AdminTableTd uid={uid} title="bonmax" isMaker={makers?.bonmax} />
      <AdminTableTd uid={uid} title="karsee" isMaker={makers?.karsee} />
      <AdminTableTd uid={uid} title="joie" isMaker={makers?.joie} />
      <AdminTableTd uid={uid} title="burtle" isMaker={makers?.burtle} />
      <AdminTableTd uid={uid} title="chitose" isMaker={makers?.chitose} />
      <AdminTableTd uid={uid} title="servo" isMaker={makers?.servo} />
      <AdminTableTd uid={uid} title="seven" isMaker={makers?.seven} />
      <AdminTableTd uid={uid} title="cocos" isMaker={makers?.cocos} />
      <AdminTableTd uid={uid} title="aitoz" isMaker={makers?.aitoz} />
      <AdminTableTd uid={uid} title="yagi" isMaker={makers?.yagi} />
      <AdminTableTd uid={uid} title="toms" isMaker={makers?.toms} />
    </Tr>
  );
};
