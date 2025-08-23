// app/page.js
import Link from "next/link";

async function getAffiliates() {
  const res = await fetch("http://localhost:4000/affiliates", { cache: "no-store" });
  return res.json();
}

export default async function HomePage() {
  const affiliates = await getAffiliates();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Affiliate Dashboard (MVP)</h1>
      <p className="text-gray-600 mb-8">
        Select an affiliate to view their clicks, conversions, and unique postback URL.
      </p>

      <ul className="space-y-4 max-w-md mx-auto">
        {affiliates.map((a) => (
          <li
            key={a.id}
            className="border rounded-lg shadow-sm hover:shadow-md transition p-4"
          >
            <Link href={`/affiliate/${a.id}`} className="text-blue-600 hover:underline">
              {a.name} (id: {a.id})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
