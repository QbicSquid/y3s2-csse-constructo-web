import db from "@/firebase/config/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

const userCollection = collection(db, "users");

export const getUser = async (email, password) => {
  const q = query(
    userCollection,
    where("email", "==", email),
    where("password", "==", password)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.docs.length > 0) return querySnapshot.docs[0].data();
  else return null;
};
