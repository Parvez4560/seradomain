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
    offer: ["Popular"],
  },
  {
    tld: ".org",
    price: "9.48",
    renew: "14.98",
  
  },
  {
    tld: ".xyz",
    price: "1.98",
    renew: "19.80",
    offer: ["90% OFF"],
  },
  {
    tld: ".tv",
    price: "34.98",
    renew: "38.00",
    offer: ["15% OFF"],
    dealText: "ONLY $108.00 FOR 3 YEARS",
  },
];

interface Props {
  searchValue: string;
}

export default function DomainResults({ searchValue }: Props) {

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