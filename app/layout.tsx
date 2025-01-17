import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SmartNotes",
  description: "SmartNotes Page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className=""
    >
      <body className={`${dmSans}`}>
        <div className="">
          <Header />
          <main className="border-t border-b border-secondary-200">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
