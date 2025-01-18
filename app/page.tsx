import type { Metadata } from "next"
import Hero from "./components/dashboard/Hero"
import Logos from "./components/dashboard/Logos"

export const metadata: Metadata = {
  title: "SmartNotes | Home",
  description: "SmartNotes Home Page",
}
export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
    </>
  )
}
