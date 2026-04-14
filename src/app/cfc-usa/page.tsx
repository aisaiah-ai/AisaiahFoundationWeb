"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CFCUSARedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/partnerships/cfc-usa");
  }, [router]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-slate-500">Redirecting to partnerships...</p>
    </div>
  );
}
