import { log } from "console"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="">
      <section className="pt-[64px] pb-[56px] md:pt-[86px] lg:pt-[80px] lg:pb-[88px]">
        <div className="container flex flex-col gap-y-[32px] lg:flex-row lg:justify-between">
          <form
            className="lg:flex lg:flex-col lg:justify-between"
            action=""
            method="post"
          >
            <div>
              <Link href="/">
                <Image
                  className="w-[183px] h-[38px]"
                  src="/svg/logo.svg"
                  width={183}
                  height={38}
                  alt="logo.svg"
                ></Image>
              </Link>
            </div>
            <div className="mt-[35px] lg:mt-0">
              <div className="px-[16px] py-[8px] w-max flex items-center bg-accent rounded-[8px] border border-secondary-200">
                <input
                  className="min-w-[216px] pr-[10px] bg-transparent outline-none text-primary-400 placeholder:text-inherit focus:placeholder:text-transparent"
                  type="mail"
                  name="mail"
                  id="mail"
                  placeholder="email@smartnote.io"
                />
                <button type="submit">
                  <Image
                    src="/icons/arrow-secondary.svg"
                    width={32}
                    height={32}
                    alt="arrow.svg"
                  ></Image>
                </button>
              </div>
            </div>
          </form>
          <nav className="flex gap-[40px] lg:gap-x-[70px] 2xl:gap-x-[120px] flex-wrap justify-between lg:w-max">
            {[
              {
                title: "product",
                items: ["about", "features", "pricing", "integrations", "FAQs"],
              },
              {
                title: "company",
                items: ["our story", "team", "careers", "press", "contact us"],
              },
              {
                title: "resources",
                items: [
                  "blog",
                  "webinars",
                  "case studies",
                  "templates",
                  "help center",
                ],
              },
              {
                title: "legal",
                items: [
                  "terms of service",
                  "privacy police",
                  "cookie policy",
                  "acceptable use",
                  "refund policy",
                ],
              },
            ].map((list, i) => {
              return (
                <ul
                  key={i}
                  className="capitalize"
                >
                  <li>
                    <h4>{list.title}</h4>
                  </li>
                  {list.items.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link
                          className="text-primary-100  hover:text-transparent hover:gradient-primary hover:bg-clip-text"
                          href="#"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )
            })}
          </nav>
        </div>
      </section>
      <section className="py-[18px] bg-secondary-200">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <ul className="w-max flex flex-row gap-x-[10px] md:order-2">
              {[
                ["https://facebook.com", "facebook.svg"],
                ["https://linkedin.com", "linkedin.svg"],
                ["https://x.com", "x.svg"],
                ["https://youtube.com", "youtube.svg"],
              ].map(([link, image], i) => {
                return (
                  <li
                    className="w-max"
                    key={i}
                  >
                    <Link
                      className="p-[12px] block bg-secondary-300 rounded-full hover:scale-110"
                      href={link}
                      target="_blank"
                    >
                      <Image
                        className="w-screen h-screen max-w-[14px] max-h-[14px]"
                        src={`/icons/${image}`}
                        width={14}
                        height={14}
                        alt={image}
                      ></Image>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-[26px] md:mt-0 md:order-1">
              <p className="text-primary-400">
                @2024 SmartNotesI. All Rights Reserved.{" "}
                <Link
                  className="underline"
                  href="https://x.com/iamhervewabo"
                  target="blank"
                >
                  @iamhervewabo
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
