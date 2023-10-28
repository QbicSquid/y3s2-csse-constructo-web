"use client";

export default function TableRow({ data, dataObj, onDelete }) {
  return (
    <tr>
      {data.map((d, i) => {
        return (
          <td className="text-custom_black-1 p-5" key={i}>
            {d}
          </td>
        );
      })}{
        onDelete && <td className="text-red-400 p-5 cursor-pointer" onClick={()=>onDelete(dataObj)}>
          Delete
        </td>
      }
    </tr>
  );
}
