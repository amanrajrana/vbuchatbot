import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { AI_NAME } from "@/constant/botVariable";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${AI_NAME} - AI assistant for the Department of Computer Application`,
  description:
    "an AI assistant for the Department of Computer Application, Vinoba Bhave University, Hazaribagh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
