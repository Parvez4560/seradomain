"use client";

export default function Head() {
  return (
    <>
      <title>My Website</title>

      {/* উপরের ব্রাউজার বার */}
      <meta name="theme-color" content="#ffffff" /> 
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#101727" />

      {/* নিচের নেভিগেশন/স্ট্যাটাস বার (লাইট ও ডার্ক উভয়ে একই) */}
      <meta name="msapplication-navbutton-color" content="#101727" /> 
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </>
  );
}