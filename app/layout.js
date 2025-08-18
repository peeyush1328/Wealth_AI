import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Wealth AI",
  description: "Wealth AI - Your Financial Assistant",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <main className="min-h-screen">
            <Header />
            {children}
            <Toaster richColors />
          </main>
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto text-center text-gray-600 px-4">
              <p>Made with 💖 by Peeyush.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
