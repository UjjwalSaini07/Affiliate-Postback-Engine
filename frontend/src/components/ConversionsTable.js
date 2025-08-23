// components/ConversionsTable.js
export default function ConversionsTable({ conversions }) {
  if (!conversions || conversions.length === 0) {
    return <p className="mt-2 text-gray-500">No conversions yet.</p>;
  }

  return (
    <table className="min-w-full mt-2 border border-gray-300 rounded-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-3 py-2 text-left">Click ID</th>
          <th className="border px-3 py-2 text-left">Amount</th>
          <th className="border px-3 py-2 text-left">Currency</th>
          <th className="border px-3 py-2 text-left">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {conversions.map((conv) => (
          <tr key={conv.id}>
            <td className="border px-3 py-2">{conv.click_id}</td>
            <td className="border px-3 py-2">{conv.amount}</td>
            <td className="border px-3 py-2">{conv.currency}</td>
            <td className="border px-3 py-2">{new Date(conv.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
