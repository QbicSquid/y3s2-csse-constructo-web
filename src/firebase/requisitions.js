import db from "@/firebase/config/firebase.config";
import { collection, doc, getDocs, updateDoc, query, where } from "firebase/firestore/lite";

const collectionName = "requisitions";
const requisitionCollection = collection(db, collectionName);

export const getRequisitions = async () => {
  const requisitionSnapshot = await getDocs(requisitionCollection);
  const requisitions = requisitionSnapshot.docs.map((doc) => {
    const leanDoc = doc.data();
    delete leanDoc.items;
    return leanDoc;
  });
  return requisitions;
};

export const approveRequisition = async (id) => {
  const q = query(requisitionCollection, where('id', '==', id));
  const querySnapshot = await getDocs(q);
  const docRef = querySnapshot.docs[0].ref;
  await updateDoc(docRef, { status: "approved" });
};
