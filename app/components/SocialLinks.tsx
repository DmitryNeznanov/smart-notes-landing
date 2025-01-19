import Image from "next/image"
import Link from "next/link"
export default function SocialLinks() {
  return             <ul className="w-max flex flex-row gap-x-[10px] md:order-2">
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
}
