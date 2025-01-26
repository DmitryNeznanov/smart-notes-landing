"use client"
import Image from "next/image"
import Link from "next/link"
import CloseMobileMenu from "./CloseMobileMenu"
import HeaderNav from "../HeaderNav"
import SocialLinks from "../SocialLinks"
import { useLayoutEffect } from "react"

export default function MobileMenu() {
  useLayoutEffect(() => {
    function calculateMobileMenuBodyHeight() {
      const mobileMenuBody = document.getElementById("mobileMenuBody")!
      const mobileMenuHeader = document.getElementById("mobileMenuHeader")!
      const viewPortHeight = window.innerHeight

      const mobileMenuHeaderHeight =
        mobileMenuHeader.getBoundingClientRect().height
      const mobileMenuHeight = viewPortHeight - mobileMenuHeaderHeight

      mobileMenuBody.style.height = `${mobileMenuHeight}px`
    }
    calculateMobileMenuBodyHeight()
  })

  return (
    <section
      className="absolute top-0 right-0 overflow-hidden transition-width bg-primary-400 z-[9999]"
      id="mobileMenu"
      style={{ width: "0%" }}
    >
      <header
        className=" py-[24px] px-[20px] flex flex-row items-center justify-between border-b border-secondary-200"
        id="mobileMenuHeader"
      >
        <div>
          <Link href="/">
            <Image
              className="w-[137px] h-[28px] md:w-[183px] md:h-[38px]"
              src="/svg/logo.svg"
              width={183}
              height={38}
              alt="logo.svg"
            ></Image>
          </Link>
        </div>
        <div>
          <CloseMobileMenu />
        </div>
      </header>
      <section
        className="pt-[48px] px-[20px] pb-[58px] flex flex-col justify-between"
        id="mobileMenuBody"
      >
        <HeaderNav />
        <SocialLinks />
      </section>
    </section>
  )
}
