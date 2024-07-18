"use client"
import { db } from "@/libs/firebase";
import { Maker } from "@/utils/types";
import { doc, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FC, useEffect, useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { makerLinks } from "@/utils/makerLinks";

type Props = {
  onClose?: () => void;
};

export const SidebarList: FC<Props> = ({ onClose }) => {
  const session = useSession();
  const uid = session.data?.user.uid;
  const [authMakers, setAuthMakers] = useState<any>([]);

  useEffect(() => {
    const getAuthMakers = async () => {
      const makersRef = doc(db, "users", `${uid}`, "permissions", "maker");
      onSnapshot(makersRef, (snapshot) => {
        setAuthMakers(Object.entries({ ...snapshot.data() } as Maker));
      });
    };
    getAuthMakers();
  }, [uid]);

  return (
    <>
      {makerLinks.map((maker) => {
        const obj = authMakers.find((link: any) => link[0] === maker.title);
        if (!obj || !obj[1]) return null;

        return (
          <SidebarItem
            key={maker.label}
            label={maker.label}
            link={maker.link}
            blank={false}
            onClose={onClose}
          />
        );
      })}
    </>
  );
};
