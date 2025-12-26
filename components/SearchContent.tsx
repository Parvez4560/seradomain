"use client";

import { useSearchParams } from "next/navigation";
import DomainSearch from "./DomainSearch";

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("domain") || "";

  return <DomainSearch initialQuery={query} />;
}