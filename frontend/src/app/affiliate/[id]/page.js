import Link from "next/link";
import ClicksTable from "@/components/ClicksTable";
import ConversionsTable from "@/components/ConversionsTable";

async function getData(id) {
  try {
    const [clicksRes, convsRes] = await Promise.all([
      fetch(`http://localhost:4000/affiliates/${id}/clicks`, { cache: "no-store" }),
      fetch(`http://localhost:4000/affiliates/${id}/conversions`, { cache: "no-store" }),
    ]);

    if (!clicksRes.ok || !convsRes.ok) {
      throw new Error("Failed to fetch affiliate data");
    }

    return {
      clicks: await clicksRes.json(),
      conversions: await convsRes.json(),
    };
  } catch (err) {
    console.error(err);
    return { clicks: [], conversions: [], error: true };
  }
}

export default async function AffiliatePage({ params }) {
  const { id } = params;
  const { clicks, conversions, error } = await getData(id);

  return (
    <div className="min-h-screen bg-black text-gray-100 p-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-indigo-400">
            Affiliate {id} Dashboard
          </h1>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-indigo-400 transition"
          >
            ← Back to affiliates
          </Link>
        </header>

        {error && (
          <div className="bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 rounded-lg">
            Failed to load affiliate data. Please try again later.
          </div>
        )}

        {/* Clicks */}
        <section className="bg-gray-950/70 border border-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-indigo-300 mb-4">Clicks</h2>
          <ClicksTable clicks={clicks} />
        </section>

        {/* Conversions */}
        <section className="bg-gray-950/70 border border-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-300 mb-4">
            Conversions
          </h2>
          <ConversionsTable conversions={conversions} />
        </section>

        {/* Postback link */}
        <section className="text-center">
          <Link
            href={`/affiliate/${id}/postback-url`}
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2 rounded-xl shadow-md transition"
          >
            View Postback URL Format
          </Link>
        </section>
      </div>
    </div>
  );
}
