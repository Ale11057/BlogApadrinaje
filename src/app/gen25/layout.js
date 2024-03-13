import { Inter } from "next/font/google";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GEN 25'",
  description: "Creado por Marco Garro 12-2 24'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
