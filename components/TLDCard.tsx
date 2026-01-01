"use client";

import React from "react";
import "./TLDCard.css";

import DotCom from "./icons/DotCom";
import DotNet from "./icons/DotNet";
import DotOrg from "./icons/DotOrg";

interface Domain {
  id: number;
  Icon: React.FC<{ className?: string }>;
  originalPrice: number;
  discountPercent: number;
  currentPrice: number;
}

const domains: Domain[] = [
  { id: 1, Icon: DotCom, originalPrice: 15.0, discountPercent: 50, currentPrice: 9.18 },
  { id: 2, Icon: DotNet, originalPrice: 13.0, discountPercent: 40, currentPrice: 7.80 },
  { id: 3, Icon: DotOrg, originalPrice: 11.0, discountPercent: 30, currentPrice: 7.70 },
];

interface TLDCardProps {
  isDarkMode: boolean; // dark mode state
}

export default function TLDCard({ isDarkMode }: TLDCardProps) {
  return (
    <div className={isDarkMode ? "dark tld-cards-container" : "tld-cards-container"}>
      <div className="cards-slider">
        {domains.map((domain) => (
          <div className="tld-card" key={domain.id}>
            <domain.Icon className="tld-icon" />

            <div className="price-section">
              <span className="original-price">
                ${domain.originalPrice.toFixed(2)}
              </span>
              <span className="discount">SAVE {domain.discountPercent}%</span>
            </div>

            <div className="current-price">
              ${domain.currentPrice.toFixed(2)}
              <span className="per-year">/year</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}