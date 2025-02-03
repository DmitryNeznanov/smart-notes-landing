"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function HeaderNav() {
  const data = [
    ["features", "#features"],
    ["pricing", "#pricing"],
    ["support", "#footer"],
    ["FAQs", "#FAQs"],
  ]
  return (
    <ul className="flex flex-col lg:flex-row gap-y-[16px] lg:gap-x-[56px] capitalize">
      {data.map(([title, link], i) => {
        return (
          <div
            className="contents"
            key={i}
          >
            <li>
              <Link
                className="hover:underline text-accent"
                href={link}
              >
                {title}
              </Link>
            </li>
            <li className="lg:hidden">
              <hr
                className={`w-screen max-w-[189px] ${
                  i + 1 === data.length ? "hidden" : ""
                } `}
              />
            </li>
          </div>
        )
      })}
    </ul>
  )
}
