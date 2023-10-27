"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Table from "@/components/content/Table";
import TableRow from "@/components/content/TableRow";

export default function Orders() {
  const router = useRouter();
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      router.push("/login");
    }
  }, []);

  const headers = ["Order Code", "Description", "Date"];

  function Temp() {
    return <div>oh well</div>;
  }

  return (
    <Table headers={headers}>
      <TableRow data={["theres", "some", Temp()]} />
    </Table>
  );
}
