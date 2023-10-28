"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getRequisitions, approveRequisition } from "@/firebase/requisitions";
import Table from "@/components/content/Table";
import TableRow from "@/components/content/TableRow";

export default function Requisitions() {
  const router = useRouter();
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      router.push("/login");
    }
  }, []);

  const [requisitions, setRequisitions] = useState([]);

  useEffect(() => {
    const fetchRequisitions = async () =>
      setRequisitions(await getRequisitions());
    fetchRequisitions();
  }, []);

  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    setTableHeaders(Object.keys(requisitions[0] || {}));
  }, [requisitions]);

  const handleApprove = async (event) => {
    const requisitionId = event.target.id;
    await approveRequisition(requisitionId);
    window.location.reload(true);
  };

  const ApproveButton = ({ ...props }) => (
    <button
      className="px-4 py-1 text-sm text-white rounded-xl bg-custom_green-1"
      onClick={handleApprove}
      id={props.id}
    >
      Approve
    </button>
  );

  const ApprovedButton = () => (
    <button
      className="px-4 py-1 text-sm text-white rounded-xl bg-custom_grey-1"
      onClick={handleApprove}
      disabled
    >
      Approved
    </button>
  );

  return (
    <Table headers={tableHeaders}>
      {requisitions.map((requisition, index) => {
        const data = Object.values(requisition);
        data.push(
          requisition.status.toLowerCase() !== "approved" ? (
            <ApproveButton id={requisition.id} />
          ) : (
            ApprovedButton()
          )
        );
        return <TableRow data={data} key={index} />;
      })}
    </Table>
  );
}
