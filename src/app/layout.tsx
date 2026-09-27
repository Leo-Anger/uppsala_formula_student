import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uppsala Formula Student",
  description: "Building the future of motorsport, one car at a time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      {/*nav for desktop*/}
        <nav className="hidden md:flex text-white p-4 sticky top-0 z-50 backdrop-blur-md bg-zinc-950/40">
              <a href="/" className="hover:underline">
        <Image
          src="/logo.svg"
          alt="Uppsala Formula Student logo"
          width={180}
          height={50}
          className="h-11 w-auto"
          priority
        />
                </a>

          <ul className="flex ml-auto gap-6">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/garage" className="hover:underline">
                Garage
              </a>
            </li>
            <li>
              <a href="/join" className="hover:underline">
                Join Us
              </a>
            </li>
            <li>
              <a href="/partnership" className="hover:underline">
                Partnership
              </a>
            </li>
          </ul>
        </nav>

        {children}
        <footer className="border border-zinc-200 bg-white/75 p-7 backdrop-blur-xl transition duration-300 dark:border-zinc-800 dark:bg-zinc-950/75 flex group flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
            Uppsala 
            Formula
            Student
          </h2>
            <div className="flex gap-4">
                <a href="https://www.instagram.com/uppsalafsa/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Instagram
                </a>
                <a href="https://www.linkedin.com/company/uppsala-formula-student/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn
                </a>
                <a href="mailto:contact@uppsalaformulastudent.se" className="hover:underline">
                    Email
                </a>
            </div>
          <p className="text-sm text-zinc-950 dark:text-white">
            &copy; {new Date().getFullYear()} Uppsala Formula Student. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
