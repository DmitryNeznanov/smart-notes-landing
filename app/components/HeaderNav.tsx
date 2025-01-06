"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function HeaderNav() {
  const pathName = usePathname()
  return (
    <ul className="flex flex-row gap-x-[56px] capitalize">
      {[
        ["home", "/"],
        ["features", "features"],
        ["pricing", "pricing"],
        ["support", "support"],
      ].map(([title, link], i) => {
        return (
          <li key={i}>
            <Link
              className={`hover:underline ${
                pathName === "/" && link === pathName
                  ? "text-secondary-200 pointer-events-none"
                  : pathName.includes(link) && link !== "/"
                  ? "text-secondary-200 pointer-events-none"
                  : ""
              }`}
              href={link}
            >
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
