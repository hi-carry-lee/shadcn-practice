import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const popins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "500",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "Shadcn UI Practice",
  description: "This is a learning project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* dark mode */}
      <body className={cn(popins.className, "dark")}>{children}</body>
    </html>
  );
}
