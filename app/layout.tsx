import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const medium = localFont({
  src: "./fonts/NeueMontreal-Medium.woff",
  variable: "--font-medium",
});
const normal = localFont({
  src: "./fonts/NeueMontreal-Regular.woff",
  variable: "--font-normal",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${normal.className} antialiased bg-[#f3f3f3]`}>
        {children}
      </body>
    </html>
  );
}