"use server";

interface User {
  email: string;
  role: string;
}

import { db } from "@/libs/firebase/server";
import { options } from "@/libs/providers/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function authGuard(): Promise<void> {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }
  const makerRef = db.collection("users").doc(session.user.uid);

  const makerSnap = await makerRef.get();
  const data = { ...(makerSnap.data() as User) };
  if (data.role !== "admin" && data.role !== "member") {
    redirect("/login");
  }
}
