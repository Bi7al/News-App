import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daily News",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="navbar">
          <nav className="nav">
            <Nav />
          </nav>
        </header>
        <main className="outlink">
          {children}
        </main>
      </body>
    </html >
  );
}
