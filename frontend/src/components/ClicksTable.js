export default function ClicksTable({ clicks }) {
  if (!clicks || clicks.length === 0) {
    return (
      <p className="mt-4 text-gray-500 text-center italic">
        No clicks logged yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-800 rounded-xl overflow-hidden">
        <thead className="bg-gray-900 text-gray-300">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">Click ID</th>
            <th className="px-4 py-3 text-left font-semibold">Campaign</th>
            <th className="px-4 py-3 text-left font-semibold">Timestamp</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {clicks.map((c) => (
            <tr
              key={c.id}
              className="hover:bg-gray-800/60 transition-colors"
            >
              <td className="px-4 py-3 text-indigo-400 font-mono">
                {c.click_id}
              </td>
              <td className="px-4 py-3 text-gray-300">
                {c.campaign_name || `Campaign #${c.campaign_id}`}
              </td>
              <td className="px-4 py-3 text-gray-400">
                {new Date(c.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
