"use client";

import { useEffect, useState } from "react";
import Table from "@/components/content/Table";
import TableRow from "@/components/content/TableRow";
import { getUsers } from "@/firebase/users";

export default function Orders() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => setUsers(await getUsers());
    fetch();
  }, []);

  return (
    <Table headers={Object.keys(users[0] || {})}>
      {users.map((user, index) => (
        <TableRow data={Object.values(user)} key={index} />
      ))}
    </Table>
  );
}
