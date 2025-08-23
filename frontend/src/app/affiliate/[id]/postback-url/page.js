"use client";

import { useState } from "react";

export default function PostbackUrlPage({ params }) {
  const { id } = params;
  const [copied, setCopied] = useState(false);

  const url = `https://affiliate-system.com/postback?affiliate_id=${id}&click_id={click_id}&amount={amount}&currency={currency}`;
  const exampleUrl = `http://localhost:4000/postback?affiliate_id=${id}&click_id=abc123&amount=100&currency=USD`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-indigo-400">
          Affiliate {id} Postback URL
        </h1>

        <section className="bg-gray-950/70 border border-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-indigo-300 mb-3">
            Your Unique Postback URL
          </h2>
          <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg">
            <code className="font-mono text-indigo-400 break-all">{url}</code>
            <button
              onClick={handleCopy}
              className="ml-auto bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded-xl transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </section>

        <section className="bg-gray-950/70 border border-gray-800 rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-300 mb-3">
            Example Request (Local Test)
          </h2>
          <div className="bg-gray-900/50 p-4 rounded-lg font-mono text-gray-300 break-all">
            {exampleUrl}
          </div>
        </section>
      </div>
    </div>
  );
}
