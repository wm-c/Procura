// app/layout.js (server component)
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Procura — RFP automation for professional services",
  description: "Procura automates RFP responses and integrates with Google Drive & OneDrive.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {/* Providers is a client component that sets up MUI theme + baseline */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
