import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L@wyer Up",
  description:
    "Justice starts with a conversation. An AI-powered platform simplifying access to justice with affordable, efficient, and intuitive legal tools.",
  metadataBase: new URL("https://lawyer-up.vercel.app"),
  openGraph: {
    title: "L@wyer Up",
    description:
      "Justice starts with a conversation. An AI-powered platform simplifying access to justice with affordable, efficient, and intuitive legal tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "L@wyer Up",
      },
    ],
    siteName: "L@wyer Up",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="icon" href="/favicon-lawyer-up.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
