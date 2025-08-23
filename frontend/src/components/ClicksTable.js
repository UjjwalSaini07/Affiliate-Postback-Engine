export default function ClicksTable({ clicks }) {
  const safeClicks = Array.isArray(clicks) ? clicks : [];

  if (safeClicks.length === 0) {
    return <p className="mt-2 text-gray-500">No clicks logged yet.</p>;
  }

  return (
    <table className="min-w-full mt-2 border border-gray-300 rounded-md">
      <thead className="bg-black">
        <tr>
          <th className="border px-3 py-2 text-left">Click ID</th>
          <th className="border px-3 py-2 text-left">Campaign</th>
          <th className="border px-3 py-2 text-left">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {safeClicks.map((c) => (
          <tr key={c.id}>
            <td className="border px-3 py-2">{c.click_id}</td>
            <td className="border px-3 py-2">{c.campaign_name || c.campaign_id}</td>
            <td className="border px-3 py-2">{new Date(c.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
