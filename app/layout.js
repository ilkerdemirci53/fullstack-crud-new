import { Inter } from "next/font/google";
import "./globals.css";
import { SlideTabsComponent } from "../components/SlideTabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ilker Demirci Task App",
  description: "Developed by Ilker Demirci",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SlideTabsComponent />
        {children}
      </body>
    </html>
  );
}
