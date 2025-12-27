"use client";

import DomainCard from "./DomainCard";

const TLDS = [
  {
    tld: ".com",
    price: "9.98",
    renew: "14.48",
    offer: ["40% OFF"],
    dealText: "ONLY $18.98 FOR 2 YEARS",
  },
  {
    tld: ".net",
    price: "12.50",
    renew: "15.00",
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

  const [name, searchedTld] = searchValue.split(".");

  const sorted = [
    ...TLDS.filter(t => t.tld === `.${searchedTld}`),
    ...TLDS.filter(t => t.tld !== `.${searchedTld}`),
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