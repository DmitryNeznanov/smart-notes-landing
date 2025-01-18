import Image from "next/image"
import Link from "next/link"

export default function Logos() {
  return (
    <section
      className="py-[16px] md:py-[24px]"
      id="logos"
    >
      <div className="overflow-clip relative">
        <div className="w-screen h-screen absolute bg-[linear-gradient(to_right,rgb(8,_8,_8),rgba(0,_0,_0,_0),rgb(8,_8,_8))]"></div>
        <ul className="flex flex-row justify-center md:gap-x-[30px] lg:gap-x-[33px] xl:gap-x-[60px] w-[300vw] -ml-[100%]">
          <li>
            <Link
              href="https://google.com"
              target="_blank"
            >
              <Image
                src="/svg/logos.svg"
                width={118}
                height={48}
                alt="logos-1.svg"
              ></Image>
            </Link>
          </li>
          <li>
            <Link
              href="https://google.com"
              target="_blank"
            >
              <Image
                src="/svg/logos-1.svg"
                width={135}
                height={48}
                alt="logos-1.svg"
              ></Image>
            </Link>
          </li>
          <li>
            <Link
              href="https://google.com"
              target="_blank"
            >
              <Image
                src="/svg/logos-2.svg"
                width={118}
                height={48}
                alt="logos-2.svg"
              ></Image>
            </Link>
          </li>
          <li>
            <Link
              href="https://google.com"
              target="_blank"
            >
              <Image
                src="/svg/logos-3.svg"
                width={135}
                height={48}
                alt="logos-3.svg"
              ></Image>
            </Link>
          </li>
          <li>
            <Link
              href="https://google.com"
              target="_blank"
            >
              <Image
                src="/svg/logos-4.svg"
                width={128}
                height={48}
                alt="logos-4.svg"
              ></Image>
            </Link>
          </li>
          <li>
            <Link
              href="https://google.com"
              target="_blank"
            >
              <Image
                src="/svg/logos-5.svg"
                width={135}
                height={48}
                alt="logos-5.svg"
              ></Image>
            </Link>
          </li>
          <li>
            <Link
              href="https://google.com"
              target="_blank"
            >
              <Image
                src="/svg/logos-6.svg"
                width={128}
                height={48}
                alt="logos-6.svg"
              ></Image>
            </Link>
          </li>
          <li>
            <Link
              href="https://google.com"
              target="_blank"
            >
              <Image
                src="/svg/logos-7.svg"
                width={135}
                height={48}
                alt="logos-7.svg"
              ></Image>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
