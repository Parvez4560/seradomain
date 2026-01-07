import punycode from "punycode";

export function normalizeDomain(input: string) {
  let v = input.toLowerCase().trim();

  // 1. space কাটা
  v = v.replace(/\s+/g, "");

  // 2. অযোগ্য চিহ্ন কাটা (৳ # % ইত্যাদি)
  v = v.replace(/[৳#$%@&!*^+=~`|\\:;"'<>,?/()[\]{}]/g, "");

  // 3. punycode decode
  if (v.startsWith("xn--")) {
    try {
      v = punycode.toUnicode(v);
    } catch {}
  }

  return v;
}