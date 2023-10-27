"use client";

export default function TableRow({ data }) {
  return (
    <tr>
      {data.map((d, i) => {
        return (
          <td className="text-custom_black-1" key={i}>
            {d}
          </td>
        );
      })}
    </tr>
  );
}
