"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section
      className=" py-[64px] md:py-[96px] lg:py-[53px] "
      id="hero"
    >
      <div className="container xl:flex xl:items-center xl:justify-between">
        <div className="flex flex-col items-center justify-center lg:flex-row md:block">
          <article className="max-w-[350px] md:max-w-[700px]">
            <h1>
              <span className="text-gradient">Intelligent</span> cloud-based
              <span className="text-gradient"> note-taking</span> and
              collaboration tool
            </h1>
            <p className="max-w-[335px] md:max-w-[400px] lg:max-w-none pt-[16px] text-primary-100">
              Experience the power of smart note-taking and transform the way
              you work today.
            </p>
          </article>
          <form className="max-w-[434px] mt-[50px] pt-[6px] pr-[6px] pb-[6px] pl-[24px] flex items-center justify-between gap-x-[10px] bg-accent border border-secondary-200 rounded-[8px]">
            <input
              className="w-full sm:w-auto input-primary"
              placeholder="Enter your email"
              type="text"
            />
            <button
              className="button-primary"
              type="button"
            >
              sign up
            </button>
          </form>
        </div>
        <div className="hidden xl:block w-[300px] 2xl:w-auto h-max relative">
          <div className="absolute w-full h-full bg-[linear-gradient(to_bottom,rgb(8,_8,_8),rgba(0,_0,_0,_0),rgb(8,_8,_8))] "></div>
          <Image
            src="/hero.svg"
            width={363}
            height={483}
            alt="hero.svg"
          ></Image>
        </div>
      </div>
    </section>
  )
}
