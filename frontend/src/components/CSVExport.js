"use client";
import React from "react";

export default function CSVExport({ affiliateId }) {
  const handleDownload = async (type) => {
    try {
      const res = await fetch(
        `https://affiliate-postback-engine.onrender.com/affiliates/${affiliateId}/${type}?format=csv`
        // `http://localhost:4000/affiliates/${affiliateId}/${type}?format=csv`
      );
      if (!res.ok) throw new Error("Failed to fetch CSV");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `affiliate_${affiliateId}_${type}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Error downloading CSV. Check console for details.");
    }
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => handleDownload("clicks")}
        className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded"
      >
        Download Clicks CSV
      </button>
      <button
        onClick={() => handleDownload("conversions")}
        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
      >
        Download Conversions CSV
      </button>
    </div>
  );
}
