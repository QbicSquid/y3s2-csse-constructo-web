export default function Table({ headers, children }) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-y-4 border-custom_grey-3">
          {headers.map((h, i) => (
            <th className="py-3 font-semibold text-custom_black-1" key={i}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
