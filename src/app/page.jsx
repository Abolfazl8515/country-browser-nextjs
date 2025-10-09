"use client";

import HomeContent from "@/components/HomeContent";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeContent />
    </Suspense>
  );
}
