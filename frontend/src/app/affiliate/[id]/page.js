// app/affiliate/[id]/page.js
import Link from "next/link";
import ClicksTable from "@/components/ClicksTable";
import ConversionsTable from "@/components/ConversionsTable";

async function getData(id) {
  const [clicksRes, convsRes] = await Promise.all([
    fetch(`http://localhost:4000/affiliates/${id}/clicks`, { cache: "no-store" }),
    fetch(`http://localhost:4000/affiliates/${id}/conversions`, { cache: "no-store" }),
  ]);
  return {
    clicks: await clicksRes.json(),
    conversions: await convsRes.json(),
  };
}

export default async function AffiliatePage({ params }) {
  const { id } = params;
  const { clicks, conversions } = await getData(id);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Affiliate {id} Dashboard</h1>

      <section className="mt-6">
        <h2 className="font-semibold mb-2">Clicks</h2>
        <ClicksTable clicks={clicks} />
      </section>

      <section className="mt-6">
        <h2 className="font-semibold mb-2">Conversions</h2>
        <ConversionsTable conversions={conversions} />
      </section>

      <div className="mt-6">
        <Link href={`/affiliate/${id}/postback-url`} className="text-blue-600 hover:underline">
          See postback URL format
        </Link>
      </div>
    </div>
  );
}
