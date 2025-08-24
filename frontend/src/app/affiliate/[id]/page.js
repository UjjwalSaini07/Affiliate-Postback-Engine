import Link from "next/link";
import ClicksTable from "@/components/ClicksTable";
import ConversionsTable from "@/components/ConversionsTable";

async function getData(id) {
  try {
    const [clicksRes, convsRes] = await Promise.all([
      fetch(`http://localhost:4000/affiliates/${id}/clicks`, { cache: "no-store" }),
      fetch(`http://localhost:4000/affiliates/${id}/conversions`, { cache: "no-store" }),
    ]);

    const clicksJson = await clicksRes.json();
    const convsJson = await convsRes.json();

    const clicks = Array.isArray(clicksJson) ? clicksJson : [];
    const conversions = Array.isArray(convsJson) ? convsJson : [];

    return { clicks, conversions };
  } catch (err) {
    console.error("Error fetching affiliate data:", err);
    return { clicks: [], conversions: [], error: err.message };
  }
}

export default async function AffiliatePage({ params }) {
  const { id } = await params;
  const { clicks, conversions, error } = await getData(id);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white p-6">
        <div className="bg-red-900/30 backdrop-blur-md border border-red-700 text-red-400 rounded-2xl p-6 max-w-md text-center">
          <h2 className="text-xl font-bold mb-2">Error Loading Affiliate Data</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-indigo-400 mb-6">Affiliate {id} Dashboard</h1>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2 text-indigo-300">Clicks</h2>
        <ClicksTable clicks={clicks} />
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-2 text-indigo-300">Conversions</h2>
        <ConversionsTable conversions={conversions} />
      </section>

      <div className="mt-6">
        <Link
          href={`/affiliate/${id}/postback-url`}
          className="text-blue-500 hover:underline"
        >
          See postback URL format
        </Link>
      </div>
    </div>
  );
}
