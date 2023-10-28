import db from "@/firebase/config/firebase.config";
import { collection, getDocs } from "firebase/firestore/lite";

const orderCollection = collection(db, "orders");

export const getOrders = async () => {
  const orderSnapshot = await getDocs(orderCollection);
  const orders = orderSnapshot.docs.map((doc) => doc.data());
  return orders;
};
