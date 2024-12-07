"use client";
import { Metadata } from "next";

import { default as NextHead } from "next/head";
import { useEffect } from "react";

export const Head = ({ title = "L@wyer Up" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
    </NextHead>
  );
};

export const metadata: Metadata = {
  title: "L@wyer Up",
  description:
    "Justice starts with a conversation. An AI-powered platform simplifying access to justice with affordable, efficient, and intuitive legal tools.",
  openGraph: {
    title: "L@wyer Up",
    description:
      "Justice starts with a conversation. An AI-powered platform simplifying access to justice with affordable, efficient, and intuitive legal tools.",
    url: "https://lawyer-up.vercel.app",
    siteName: "L@wyer Up",
    images: [
      {
        url: "/og-image.png", // Ensure this image is added to your public folder
        width: 1200,
        height: 630,
        alt: "L@wyer Up",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L@wyer Up",
    description:
      "Justice starts with a conversation. An AI-powered platform simplifying access to justice with affordable, efficient, and intuitive legal tools.",
    images: ["/og-image.png"],
  },
};
