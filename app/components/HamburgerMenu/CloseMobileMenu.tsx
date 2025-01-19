"use client"

import Image from "next/image"

export default function ClostMobileMenu() {
  return (
    <button>
      <Image
        className="w-[24px] h-[24px]"
        src="/icons/close-mobile-menu.svg"
        width={32}
        height={18}
        alt="close-mobile-menu.svg"
      ></Image>
    </button>
  )
}
