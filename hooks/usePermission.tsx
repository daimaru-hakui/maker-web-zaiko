import { db } from "../libs/firebase/index";
import { doc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function usePermission(maker: string) {
  const router = useRouter();
  const session = useSession();
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    const uid = session.data?.user.uid;
    const getUid = async () => {
      if (!uid) return;
      const makerRef = doc(db, "users", uid, "permissions", "makers");
      const snapshot = await getDoc(makerRef);
      const obj = { ...snapshot.data() };
      setIsAuth(obj[maker]);
      if (!obj[maker]) {
        router.push("/login");
      }
    };
    getUid();
  }, [session, maker, router]);
  return {
    isAuth
  };
}