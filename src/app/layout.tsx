import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display-src",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Adeel — Full Stack MERN & Java Developer",
  description:
    "Portfolio of Muhammad Adeel, a Software Engineer building modern, scalable, and user-focused applications with the MERN stack and Java.",
  keywords: [
    "Muhammad Adeel",
    "Full Stack Developer",
    "MERN Stack",
    "Java Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Adeel" }],
  openGraph: {
    title: "Muhammad Adeel — Full Stack MERN & Java Developer",
    description:
      "Building modern, scalable, and user-focused applications. Transforming complex problems into elegant, highly usable software products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f15" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7f9" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Applied before paint to prevent theme flash (FOUC)
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (prefersLight ? 'light' : 'dark');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased bg-background text-text font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
