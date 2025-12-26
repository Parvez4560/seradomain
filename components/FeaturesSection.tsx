"use client";

export default function FeaturesSection() {
  const features = [
    { title: "Affordable Pricing", desc: "Get domains at the best prices with no hidden fees." },
    { title: "Trusted Provider", desc: "Secure and reliable service for millions of users." },
    { title: "Easy Management", desc: "Manage your domains easily with our dashboard." },
  ];

  return (
    <section className="py-20 px-8 bg-[var(--background)] text-[var(--foreground)] text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {features.map((f) => (
          <div
            key={f.title}
            className="max-w-sm p-6 rounded-lg shadow bg-white dark:bg-[#1E2A3A]" // ডার্ক মোড ব্যাকগ্রাউন্ড
          >
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{f.title}</h3> 
            <p className="text-gray-700 dark:text-[#cfd8e0] text-sm">{f.desc}</p> 
            {/* ছোট লেখা ডার্ক মোডে হালকা সাদা/near-white */}
          </div>
        ))}
      </div>
    </section>
  );
}