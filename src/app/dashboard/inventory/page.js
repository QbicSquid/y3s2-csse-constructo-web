"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Table from "@/components/content/Table";
import TableRow from "@/components/content/TableRow";
import { addItem, deleteItem, getItems } from "@/firebase/items";

export default function Orders() {
  const router = useRouter();
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      router.push("/login");
    }
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => setItems(await getItems());

  useEffect(() => {
    fetchItems();
  }, []);

  const onClickAddItem = () => {
    const name = prompt("Please enter the item name", "");
    const quantity = prompt("Please enter the item quantity", "");
    addItem(name, quantity).then(() => {
      window.location.reload();
    })
  }

  const onDelete = async (i) => {
    const confirm = window.confirm(`Are you sure you want to delete ${i.name}?`);
    if (confirm) {
      await deleteItem(i.name);
      window.location.reload();
    }
  }

  return (
    <div>
      <div className="flex justify-end p-3">
        <button className="bg-black rounded-md text-white px-4 py-2" onClick={onClickAddItem}>
          Add Item
        </button>
      </div>
      <Table headers={Object.keys(items[0] || [])}>
        {items.map((item, index) => (
          <TableRow data={Object.values(item)} key={index} dataObj={item} onDelete={onDelete}/>
        ))}
      </Table>
    </div>
  );
}
