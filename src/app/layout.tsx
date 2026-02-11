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

  metadataBase: new URL("https://bharat-divya-wedding.vercel.app"), // CHANGE THIS TO YOUR DOMAIN

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Bharat & Divya | A Royal Union",
    description:
      "You're invited to the royal wedding of Bharat & Divya. Discover events, gallery, venue, and love story.",
    url: "https://bharat-divya-wedding.vercel.app",
    siteName: "Bharat & Divya Wedding",
    images: [
      {
        url: "https://i.pinimg.com/736x/aa/a3/8b/aaa38bf1940bd5d076cba3fc921f532b.jpg",
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
    description:
      "You're invited to Bharat & Divya’s royal wedding celebration.",
    images: [
      "https://i.pinimg.com/736x/aa/a3/8b/aaa38bf1940bd5d076cba3fc921f532b.jpg",
    ],
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

  themeColor: "#0f172a", // luxury dark blue
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Montserrat:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Extra SEO */}
        <meta name="application-name" content="Bharat & Divya Wedding" />
        <meta name="apple-mobile-web-app-title" content="Bharat & Divya Wedding" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>

      <body className="antialiased bg-black text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
