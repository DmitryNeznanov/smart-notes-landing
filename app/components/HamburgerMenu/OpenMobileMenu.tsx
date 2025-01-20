"use client"
import Image from "next/image"

export default function OpenMobileMenu() {
  function openMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu")!
    mobileMenu.style.width = "100%"
    document.body.style.overflow = "hidden"
  }
  return (
    <button
      className="block"
      onClick={openMobileMenu}
    >
      <Image
        src="/icons/open-mobile-menu.svg"
        width={32}
        height={18}
        alt="open-mobile-menu.svg"
      ></Image>
    </button>
  )
}
