import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fllow",
  description: "An e-commerce and link in bio platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
