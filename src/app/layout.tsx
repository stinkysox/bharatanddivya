import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjun & Sia | Wedding",
  description: "A Royal Union of Arjun and Sia",
  openGraph: {
    title: "Arjun & Sia | Wedding",
    description: "A Royal Union of Arjun and Sia",
    images: ["https://i.pinimg.com/736x/c9/e9/7d/c9e97d9fcf62d460f5331573ecaac715.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun & Sia | Wedding",
    description: "A Royal Union of Arjun and Sia",
    images: ["https://i.pinimg.com/736x/c9/e9/7d/c9e97d9fcf62d460f5331573ecaac715.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
