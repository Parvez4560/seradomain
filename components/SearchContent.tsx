// SearchContent.tsx
"use client";

import { useState, useEffect } from "react";
import DomainSearch from "./DomainSearch";
import DomainResults from "./DomainResults";
import { useSearchParams } from "next/navigation";

export default function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("domain") || "";

  const [searchValue, setSearchValue] = useState(initialQuery);

  return (
    <>
      <DomainSearch
        initialQuery={searchValue}
        updateURL={false}
        onSearch={(val: string) => setSearchValue(val)}
      />
      <DomainResults searchValue={searchValue} />
    </>
  );
}