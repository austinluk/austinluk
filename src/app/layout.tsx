import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Austin Luk",
    template: "%s | Austin Luk",
  },
  description:
    "Austin Luk is a Computer Science student at UBC and software developer in Vancouver.",
  keywords: [
    "Austin Luk",
    "Austin",
    "Luk",
    "Austin Luk developer",
    "Austin Luk UBC",
    "Austin Luk portfolio",
    "Austin Luk software engineer",
    "UBC computer science",
    "Vancouver developer",
    "full-stack developer",
  ],
  authors: [{ name: "Austin Luk" }],
  creator: "Austin Luk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Austin Luk",
    description:
      "Austin Luk is a Computer Science student at UBC and software developer in Vancouver, BC.",
    type: "website",
    url: "https://austinluk.vercel.app",
    siteName: "Austin Luk",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Austin Luk",
    description:
      "CS student at UBC. Building full-stack applications and AI tools.",
  },
  alternates: {
    canonical: "https://austinluk.vercel.app",
  },
  verification: {
    google: "5ySpU6hCscM3MJBkG1idi21gmKYBI0Mq95NXxzB7Rz4",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://austinluk.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Austin Luk",
              url: "https://austinluk.vercel.app",
              jobTitle: "Software Developer",
              description:
                "Computer Science student at UBC and software developer in Vancouver, BC.",
              sameAs: [
                "https://github.com/austinluk",
                "https://linkedin.com/in/austinluk",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of British Columbia",
              },
              knowsAbout: [
                "Python",
                "React",
                "TypeScript",
                "JavaScript",
                "C#",
                "Next.js",
                "Node.js",
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
