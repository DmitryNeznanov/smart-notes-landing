import type { Metadata } from "next"
import Hero from "./components/dashboard/Hero"
import Logos from "./components/dashboard/Logos"
import Testimonials from "./components/dashboard/Testimonials"

export const metadata: Metadata = {
  title: "SmartNotes | Home",
  description: "SmartNotes Home Page",
}
export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Testimonials />
    </>
  )
}
