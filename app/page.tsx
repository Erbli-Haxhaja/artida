"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://credentials.britishcouncil.org/issuer/10000025/credentials";
  }, []);

  return (
    <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center">
      <p className="text-gray-500">Redirecting...</p>
    </div>
  );
}
