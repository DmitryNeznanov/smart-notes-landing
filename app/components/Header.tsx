import Image from "next/image"
import Link from "next/link"
import HeaderNav from "./HeaderNav"

export default function Header() {
  return (
    <header
      className="py-[24px] px-[20px] md:px-[48px] xl:px-[96px]"
      id="header"
    >
      <nav className="flex flex-row items-center justify-between">
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
        <div className="hidden lg:block">
          <HeaderNav />
        </div>
        <div className="hidden lg:flex">
          <Link
            className="button-primary"
            href="#pricing"
          >
            get started
          </Link>
        </div>
        <div className="lg:hidden">
          <Image
            src="/icons/mobile-menu-icon.svg"
            width={32}
            height={18}
            alt="mobile-menu-icon.svg"
          ></Image>
        </div>
      </nav>
    </header>
  )
}
