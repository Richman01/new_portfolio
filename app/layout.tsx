import type { Metadata, Viewport } from "next";
import { Averia_Serif_Libre, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { OverlayProvider } from "@/lib/OverlayContext";
import { site } from "@/data/site";
import "./globals.css";

const fontSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontDisplay = Averia_Serif_Libre({
  variable: "--font-averia",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ladapoferanmi.com"),
  title: `${site.name} - ${site.title}`,
  description: site.bio,
  openGraph: {
    title: `${site.name} - ${site.title}`,
    description: site.bio,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.title}`,
    description: site.bio,
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <OverlayProvider>{children}</OverlayProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
