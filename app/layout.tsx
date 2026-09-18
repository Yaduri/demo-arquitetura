import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Japi Arquitetura Contemporânea | Alto Padrão em Jundiaí - SP",
  description:
    "Projetos residenciais de alto padrão sob medida para condomínios fechados em Jundiaí e região: Fazenda Serrazul, Quinta das Paineiras, Bosque dos Jatobás e Malota. Por Arq. Juliana Prado.",
  keywords: [
    "arquitetura jundiai",
    "arquiteto de alto padrao jundiai",
    "studio japi arquitetura",
    "projetos fazenda serrazul",
    "quinta das paineiras jundiai",
    "casas contemporaneas jundiai",
    "arquitetura biofilica serra do japi",
  ],
  authors: [{ name: "Studio Japi Arquitetura" }],
  openGraph: {
    title: "Studio Japi Arquitetura Contemporânea | Alto Padrão em Jundiaí",
    description:
      "Arquitetura autoral e minimalismo caloroso conectados à natureza da Serra do Japi. Projetos exclusivos em condomínios fechados.",
    url: "https://studiojapi.com.br",
    siteName: "Studio Japi Arquitetura",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-japi-warm text-japi-charcoal font-sans antialiased selection:bg-japi-forest selection:text-white">
        {children}
      </body>
    </html>
  );
}
