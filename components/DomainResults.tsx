"use client";

import DomainCard from "./DomainCard";

const TLDS = [
  {
    tld: ".com",
    price: "9.18",
    renew: "12.98",
    dealText: "ONLY $21.50 FOR 2 YEARS",
  },
  {
    tld: ".net",
    price: "12.98",
    renew: "15.98",
    offer: ["40% OFF"],
  },
  {
    tld: ".org",
    price: "11.99",
    renew: "14.99",
    offer: ["Popular"],
  },
  {
    tld: ".xyz",
    price: "1.99",
    renew: "9.99",
    offer: ["New"],
  },
];

interface Props {
  searchValue: string;
}

export default function DomainResults({ searchValue }: Props) {
  if (!searchValue.includes(".")) return null;

  const parts = searchValue.split(".");
  const name = parts[0] || "";
  const searchedTld = parts[1] || "";

  const sorted = [
    ...TLDS.filter((t) => t.tld === `.${searchedTld}`),
    ...TLDS.filter((t) => t.tld !== `.${searchedTld}`),
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 space-y-3">
      {sorted.map((item, i) => (
        <DomainCard
          key={i}
          name={`${name}${item.tld}`}
          price={`$${item.price}`}
          renewPrice={item.renew}
          offers={item.offer}
          dealText={item.dealText}
        />
      ))}
    </div>
  );
}