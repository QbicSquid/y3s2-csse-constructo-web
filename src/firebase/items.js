import db from "@/firebase/config/firebase.config";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, where } from "firebase/firestore/lite";

const itemCollection = collection(db, "items");

export const getItems = async () => {
  const itemSnapshot = await getDocs(itemCollection);
  const items = itemSnapshot.docs.map((doc) => doc.data());
  return items;
};

export const addItem = async (name, stock) => {
  await setDoc(doc(db, "items", new Date().getTime().toString()), {
    name,
    stock
  });
}

export const deleteItem = async (name) => {
  const itemSnapshot = await getDocs(itemCollection);
  const doc = itemSnapshot.docs.find((doc) => doc.data().name === name);
  await deleteDoc(doc.ref);
}
