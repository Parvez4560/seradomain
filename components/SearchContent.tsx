"use client";

import { useSearchParams } from "next/navigation";
import DomainSearch from "./DomainSearch";
import DomainResults from "./DomainResults";

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("domain") || "";

  return (
    <>
      <DomainSearch initialQuery={query} />
      {query && <DomainResults searchValue={query} />}
    </>
  );
}