import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import ClientWrapper from "../components/ClientWrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap', weight: ["100", "200", "300", "400", "500"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: 'swap', weight: ["400", "500", "600", "700", "900"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", display: 'swap', weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "FOOD VALLEY — A Delicious Journey | Luxury Catering & Event Management",
  description: "FOOD VALLEY — India's most exclusive luxury catering and event management company. Crafting unforgettable culinary experiences for royal weddings, destination events, corporate galas, and private celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body style={{ background: '#090909', minHeight: '100vh' }}>
        <ClientWrapper>
          <Navigation />
          <WhatsAppButton />
          <main style={{ paddingTop: '0' }}>
            {children}
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
