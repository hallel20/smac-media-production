import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SMAC Media Production",
  description: "Capturing your special moments with excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <div className="z-50">
          <Toaster position="top-right" />
        </div>
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
