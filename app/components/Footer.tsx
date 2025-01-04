import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-[18px] bg-secondary-200">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <ul className="w-max flex flex-row gap-x-[10px]">
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
          <div className="mt-[26px] md:mt-0">
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
    </footer>
  )
}
