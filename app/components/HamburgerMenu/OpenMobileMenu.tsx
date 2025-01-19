"use client"
import Image from "next/image"

export default function OpenMobileMenu() {
  return (
    <button>
      <Image
        src="/icons/open-mobile-menu.svg"
        width={32}
        height={18}
        alt="open-mobile-menu.svg"
      ></Image>
    </button>
  )
}
