import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "@/components/main-header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Meta Data for the SEO 
export const metadata = {
  title: "Movie Search Engine",
  description: "Made by Harjobanpreet Anmoljeet, and Tanisha",
};

// Layout to make consistent header and different children according to the page selected
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
