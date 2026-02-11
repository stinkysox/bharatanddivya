import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharat & Divya Wedding Invitation | Save The Date",
  description:
    "Join Bharat & Divya as they celebrate their royal wedding. View events, gallery, venue, and love story in this luxury digital wedding invitation.",

  keywords: [
    "Bharat Divya Wedding",
    "Digital Wedding Invitation",
    "Luxury Wedding Card",
    "Indian Wedding Invitation Website",
    "Save The Date Bharat Divya",
  ],

  authors: [{ name: "Bharat & Divya Wedding" }],
  creator: "Bharat & Divya",
  publisher: "Bharat & Divya Wedding",

  // ✅ YOUR REAL DOMAIN
  metadataBase: new URL("https://bharatdivyainvites.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Bharat & Divya | A Royal Union",
    description:
      "You're invited to the royal wedding of Bharat & Divya. Discover events, gallery, venue, and love story.",
    url: "https://bharatdivyainvites.vercel.app",
    siteName: "Bharat & Divya Wedding",
    images: [
      {
        url: "/og-image.jpg", // ✅ Put image in /public
        width: 1200,
        height: 630,
        alt: "Bharat & Divya Wedding Invitation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bharat & Divya Wedding | Save The Date",
    description: "You're invited to Bharat & Divya’s royal wedding celebration.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
