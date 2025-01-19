"use client"
import Image from "next/image"
import Link from "next/link"
import ClostMobileMenu from "./CloseMobileMenu"
import HeaderNav from "../HeaderNav"
import SocialLinks from "../SocialLinks"

export default function MobileMenu() {
  return (
    <section className="h-screen">
      <header className="py-[24px] px-[20px] flex flex-row items-center justify-between border-b border-secondary-200">
        <div>
          <Link href="#">
            <Image
              className="w-[137px] h-[28px]"
              src="/svg/logo.svg"
              width={183}
              height={38}
              alt="logo.svg"
            ></Image>
          </Link>
        </div>
        <div>
          <ClostMobileMenu />
        </div>
      </header>
      <section className="pt-[48px] px-[20px] pb-[58px]">
        <HeaderNav />
        <SocialLinks />
      </section>
    </section>
  )
}
