"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Table from "@/components/content/Table";
import TableRow from "@/components/content/TableRow";
import { getOrders } from "@/firebase/orders";

export default function Orders() {
  const router = useRouter();
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      router.push("/login");
    }
  }, []);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => setOrders(await getOrders());
    fetchOrders();
  }, []);

  return (
    <Table headers={Object.keys(orders[0] || [])}>
      {orders.map((order, index) => (
        <TableRow data={Object.values(order)} key={index} />
      ))}
    </Table>
  );
}
