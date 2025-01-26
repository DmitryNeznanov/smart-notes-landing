"use client"

import Image from "next/image"

export default function ClostMobileMenu() {
  function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu")!
    mobileMenu.style.width = "0%"
    document.body.style.overflow = "visible"
  }
  return (
    <button
      className="block"
      onClick={closeMobileMenu}
    >
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
