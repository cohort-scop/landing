import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cohortes.co"),
  title: {
    default:
      "Logiciel d'enquêtes harcèlement au travail, RPS et QVCT — Cohortes",
    template: "%s · Cohortes",
  },
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
