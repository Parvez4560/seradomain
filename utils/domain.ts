import punycode from "punycode";

export function normalizeDomain(input: string) {
  let v = input.trim();

  // 1️⃣ space remove
  v = v.replace(/\s+/g, "");

  // 2️⃣ invalid symbol remove (৳ # % etc)
  v = v.replace(/[৳#$%@&!π_£*^+=~¬`√৺|★™©®‌℅°≠×÷॥\\:;"'Π<>,?/()[\]{}]/g, "");

  // 3️⃣ punycode decode (যে কোনো label এ xn-- থাকলে)
  if (v.includes("xn--")) {
    try {
      v = punycode.toUnicode(v);
    } catch {}
  }

  // 4️⃣ Unicode normalize
  v = v.normalize("NFC");

  // 5️⃣ locale-aware lowercase (Ã, Ö, Š → ã, ö, š)
  v = v.toLocaleLowerCase("und");

  return v;
}