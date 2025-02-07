import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

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
        <main className="container mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
