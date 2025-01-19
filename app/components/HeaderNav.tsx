"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function HeaderNav() {
  const data = [
    ["home", "/"],
    ["features", "features"],
    ["pricing", "pricing"],
    ["support", "support"],
  ]
  const pathName = usePathname()
  return (
    <ul className="flex flex-col lg:flex-row gap-y-[16px] lg:gap-x-[56px] capitalize">
      {data.map(([title, link], i) => {
        return (
          <>
            <li
              className=""
              key={i}
            >
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
            <li className="lg:hidden">
              <hr
                className={`w-screen max-w-[189px] ${
                  i + 1 === data.length ? "hidden" : ""
                } `}
              />
            </li>
          </>
        )
      })}
    </ul>
  )
}
