import Link from "next/link";

async function getAffiliates() {
  try {
    const res = await fetch("http://localhost:4000/affiliates", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch affiliates: ${res.status}`);
    const json = await res.json();
    return Array.isArray(json) ? json : json.data || [];
  } catch (err) {
    console.error(err);
    return { error: "Could not load affiliates. Please try again later." };
  }
}

export default async function HomePage() {
  const affiliates = await getAffiliates();

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-start px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-8 text-center drop-shadow-lg">
        Affiliate Dashboard (MVP)
      </h1>
      <p className="text-gray-500 mb-10 text-center max-w-lg leading-relaxed">
        Choose an affiliate to view their performance — track clicks, monitor conversions, 
        and access a unique postback URL for secure attribution.
      </p>

      {/* Error or empty state */}
      {"error" in affiliates ? (
        <div className="bg-red-900/30 backdrop-blur-sm border border-red-700 text-red-400 rounded-xl p-4 max-w-md w-full text-center">
          {affiliates.error}
        </div>
      ) : affiliates.length === 0 ? (
        <p className="text-gray-500 italic mt-4">No affiliates found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {affiliates.map((a) => (
            <Link
              key={a.id}
              href={`/affiliate/${a.id}`}
              className="bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-6 flex flex-col items-start transition hover:scale-102 hover:bg-white/10 shadow-md"
            >
              <h2 className="text-2xl font-bold text-indigo-400 mb-2">{a.name}</h2>
              <p className="text-gray-400 text-md">ID: {a.id}</p>
            </Link>
          ))}
        </div>
      )}

      <footer className="mt-12 w-full text-center text-gray-500">
        Built by Ujjwal | © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
