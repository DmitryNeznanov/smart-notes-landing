import type { Metadata } from "next"
import Hero from "./components/dashboard/Hero"
import Logos from "./components/dashboard/Logos"
import Testimonials from "./components/dashboard/Testimonials"
import Features from "./components/dashboard/Features"
import Video from "./components/dashboard/Video"
import Pricing from "./components/dashboard/Pricing"
import FAQs from "./components/dashboard/FAQs"
import CTA from "./components/dashboard/CTA"

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
      <Features />
      <Testimonials />
      <Video />
      <Testimonials />
      <Pricing />
      <Testimonials />
      <FAQs />
      <Testimonials />
      <CTA />
    </>
  )
}
