import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["200", "400","800"], });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
