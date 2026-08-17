import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Hanan Mohil — Software Engineer",
  description:
    "Software Engineer on the Frontend Platform team at Motive. I build platform tools that remove friction for engineering teams.",
  authors: [{ name: "Abdul Hanan Mohil" }],
  metadataBase: new URL("https://ahmohil.dev"),
  openGraph: {
    title: "Abdul Hanan Mohil — Software Engineer",
    description:
      "Software Engineer on the Frontend Platform team at Motive. Driving the Micro-Frontend migration and core platform tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
