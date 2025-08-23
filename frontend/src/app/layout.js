import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Affiliate Postback Tracking System | MVP",
  description:
    "An affiliate tracking MVP with click logging, S2S postbacks, and a simple dashboard built using Next.js, Express, and PostgreSQL.",
  keywords: [
    "Affiliate Marketing",
    "Postback URL",
    "S2S Tracking",
    "Next.js",
    "PostgreSQL",
    "MVP Project",
  ],
  authors: [{ name: "Ujjwal", url: "https://ujjwalsaini.dev" }],
  creator: "Ujjwal",
  publisher: "Affiliate Postback Engine",
  openGraph: {
    title: "Affiliate Postback Tracking System",
    description:
      "Track clicks, conversions, and revenue with this affiliate marketing MVP.",
    url: "https://localhost:3000",
    siteName: "Affiliate Postback System",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Postback Tracking System",
    description:
      "Track clicks and conversions with this professional affiliate tracking MVP.",
    creator: "@ujjwal",
  },
  metadataBase: new URL("https://ujjwalsaini.dev"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <header className="w-full bg-black/60 backdrop-blur-md text-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-wide">
              Affiliate Postback Engine
            </h1>

            <nav className="space-x-6 text-sm font-medium">
              <a
                href="/"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/affiliate/1"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Dashboard
              </a>
              <a
                href="https://ujjwalsaini.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Author
              </a>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>

        <footer className="w-full text-gray-400">
          <div className="max-w-7xl mx-auto px-6 py-6 text-sm flex flex-col sm:flex-row justify-between items-center">
            <p>
              © {new Date().getFullYear()} Affiliate Postback System. All rights
              reserved.
            </p>
            <p>
              Built by{" "}
              <a
                href="https://ujjwalsaini.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Ujjwal
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
