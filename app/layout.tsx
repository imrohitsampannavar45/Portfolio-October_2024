import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import InstallPrompt from "@/components/InstallPrompt";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL(" https://www.linkedin.com/in/rohitvs1/"),
  title: "Rohit | Portfolio",
  description:
    "Welcome to Aryan's Rohit website. Discover my projects, skills, and professional journey. View my resume and contact me for services.",
  openGraph: {
    title: "Rohit | Portfolio",
    description:
      "Welcome to Rohit's portfolio website. Discover my projects, skills, and professional journey. View my resume and contact me for services.",
    images: [
      {
        url: " https://www.linkedin.com/in/rohitvs1/",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <InstallPrompt />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
