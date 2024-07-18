"use client";
import React, { FC, useEffect, useState } from "react";
import { HeaderDrawer } from "./HeaderDrawer";
import { signOut, useSession } from "next-auth/react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/libs/firebase";
import Link from "next/link";

export const Header: FC = () => {
  const session = useSession();
  const uid = session.data?.user.uid;
  const [isAuthority, setIsAuthority] = useState(false);

  useEffect(() => {
    if (!session) return;
    const getUser = async () => {
      const docRef = doc(db, "users", `${uid}`);
      const snapShot = await getDoc(docRef);
      if (!snapShot.exists()) return;
      if (snapShot.data().role === "admin") {
        setIsAuthority(true);
      }
    };
    getUser();
  }, [uid, session]);

  const signOutHandler = async () => {
    signOut();
    await auth.signOut();
  };

  useEffect(() => {
    if (!uid) return;
    const getPermission = async () => {
      const userRef = doc(db, "users", `${uid}`);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: session.data?.user.email,
          role: "user",
        });
        const docRef = doc(db, "users", `${uid}`, "permissions", "makers");
        const snapShot = await getDoc(docRef);
        if (snapShot.exists()) return;
        await setDoc(docRef, {
          daimaru: false,
        });
      }
    };
    getPermission();
  }, [uid, session]);

  return (
    <div
      className="px-3 sticky top-0 h-12 flex items-center z-50 border-1 border-gray-200 bg-blue-900 lg:bg-transparent"
    >
      <div className="w-full text-gray-100 lg:hidden">大丸白衣 WEB在庫</div>
      <div className="w-full hidden lg:flex gap-3 justify-end mx-3">
        <div className="flex gap-3 text-xs text-gray-800">
          {isAuthority && (
            <>
              <Link href="/csv-bulk-register">
                <button>在庫登録</button>
              </Link>
              <Link href="/admin">
                <button>権限管理</button>
              </Link>
            </>
          )}
          {session.data?.user.uid && (
            <button
              className="flex items-center text-gray-800 text-xs"
              onClick={signOutHandler}
            >
              ログアウト
            </button>
          )}
        </div>
        <div>
        </div>
      </div>
      <HeaderDrawer />
    </div>
  );
};
