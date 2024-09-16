import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "@/components/provider/ThemeProvider";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Pomo focus",
  description: "A simple pomodoro timer app with todo list", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased font-suse">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
