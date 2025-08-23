export default function ConversionsTable({ conversions }) {
  if (!conversions || conversions.length === 0) {
    return (
      <p className="mt-4 text-gray-500 text-center italic">
        No conversions yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-800 rounded-xl overflow-hidden">
        <thead className="bg-gray-900 text-gray-300">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Click ID</th>
            <th className="px-4 py-3 text-left font-semibold">Amount</th>
            <th className="px-4 py-3 text-left font-semibold">Currency</th>
            <th className="px-4 py-3 text-left font-semibold">Timestamp</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {conversions.map((conv) => (
            <tr
              key={conv.id}
              className="hover:bg-gray-800/60 transition-colors"
            >
              <td className="px-4 py-3 text-indigo-400 font-mono">
                {conv.click_id}
              </td>
              <td className="px-4 py-3 text-green-400 font-semibold">
                {conv.amount}
              </td>
              <td className="px-4 py-3 text-gray-300">{conv.currency}</td>
              <td className="px-4 py-3 text-gray-400">
                {new Date(conv.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
