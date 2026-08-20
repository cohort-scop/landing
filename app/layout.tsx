import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Cohortes — logiciel d’analyse de témoignages : enquêtes harcèlement au travail, diagnostics RPS, baromètres QVCT",
  description:
    "Cohortes outille les enquêtes de harcèlement au travail, les diagnostics RPS et les baromètres QVCT : anonymisation des témoignages, catégorisation sur référentiel, chronologie des faits datés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
