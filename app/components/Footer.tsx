import { log } from "console"
import Image from "next/image"
import Link from "next/link"
import SocialLinks from "./SocialLinks"

export default function Footer() {
  return (
    <footer
      className="border-t border-secondary-200"
      id="footer"
    >
      <section
        className="pt-[64px] pb-[56px] md:pt-[86px] lg:pt-[80px] lg:pb-[88px]"
        id="faqs"
      >
        <div className="container flex flex-col gap-y-[32px] lg:flex-row lg:justify-between">
          <form
            className="lg:flex lg:flex-col lg:justify-between"
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
              <div className="w-max px-[16px] py-[8px] flex items-center justify-between bg-accent rounded-[8px] border border-secondary-200">
                <input
                  className="min-w-[0px] max-w-[216px] pr-[10px] input-primary"
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
          <nav className="grid max-[400px]:grid-cols-2 grid-cols-3 sm:flex justify-between w-full lg:ml-[100px] 2xl:ml-[200px] gap-y-[40px]">
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
                          className="text-primary-100 hover:text-gradient"
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
            <SocialLinks />
            <div className="mt-[26px] md:mt-0 md:order-1">
              <p className="text-primary-400">
                @2024 SmartNotes. All Rights Reserved.{" "}
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
