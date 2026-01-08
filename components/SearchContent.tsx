"use client";

import { useState } from "react";
import DomainSearch from "./DomainSearch";
import DomainResults from "./DomainResults";
import { useSearchParams } from "next/navigation";
import { normalizeDomain } from "@/utils/domain";

export default function SearchContent() {
  const searchParams = useSearchParams();
  const rawQuery = searchParams.get("domain") || "";

  // 🔹 1) Search input এর জন্য (একদম untouched)
  const [rawSearch, setRawSearch] = useState(rawQuery);

  // 🔹 2) Card এর জন্য (always normalized)
  const normalizedSearch = normalizeDomain(rawSearch);

  return (
    <>
      <DomainSearch
        initialQuery={rawSearch}        // ✅ user যা লিখেছে তাই
        updateURL={false}
        onSearch={(val) => {
          setRawSearch(val);            // ✅ normalize না
        }}
      />

      <DomainResults
        searchValue={normalizedSearch} // ✅ শুধু card এ clean data
      />
    </>
  );
}