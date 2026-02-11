import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharat & Divya | Wedding",
  description: "A Royal Union of Bharat and Divya",
  openGraph: {
    title: "Bharat & Divya | Wedding",
    description: "A Royal Union of Bharat and Divya",
    // Updated to your new uploaded preview image
    images: ["https://i.postimg.cc/8Pz7pP9v/image-991efd.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat & Divya | Wedding",
    description: "A Royal Union of Bharat and Divya",
    // Updated to your new uploaded preview image
    images: ["https://i.postimg.cc/8Pz7pP9v/image-991efd.jpg"],
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
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&family=Montserrat:wght@200;300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}