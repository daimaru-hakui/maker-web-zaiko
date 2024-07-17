import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

type Params = {
  uid?: string;
  maker: string;
};

// export const useMakerPermission = (params: Params) => {
//   const [isMaker,setIsMaker] = useState(true)

//   useEffect(()=>{
//     const getPermission = async () => {
//       const makerRef = doc(db, "users", `${params.uid}`, "permissions", "maker");
//       const makerSnap = await getDoc(makerRef);
//       const obj = { ...makerSnap.data() };
//       setIsMaker(obj[params.maker])
//       return obj[params.maker];
//     };
//     getPermission()
//   },[params])

//   return { isMaker };
// };
