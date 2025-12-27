"use client";

import { useSearchParams } from "next/navigation";
import DomainSearch from "./DomainSearch";
import DomainResults from "./DomainResults";

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("domain") || "";

  return (
    <>
      {/* Search Input */}
      <DomainSearch initialQuery={query} updateURL={false} />

      {/* Show results only if query is valid */}
      {query && <DomainResults searchValue={query} />}
    </>
  );
}