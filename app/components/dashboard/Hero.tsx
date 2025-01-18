"use client"

import Image from "next/image"

// import { useLayoutEffect } from "react"

export default function Hero() {
  // useLayoutEffect(() => {
  //   function calculateHeroHeight() {
  //     const hero = document.getElementById("hero")!
  //     const header = document.getElementById("header")!
  //     const viewPortHeight = window.innerHeight

  //     const headerHeight = header.getBoundingClientRect().height
  //     const heroHeight = viewPortHeight - headerHeight

  //     hero.style.height = `${heroHeight}px`
  //   }
  //   calculateHeroHeight()
  // })
  return (
    <section
      className="py-[64px] md:py-[96px] lg:py-[53px] "
      id="hero"
    >
      <div className="container flex items-center justify-between">
        <div className="flex flex-row items-center md:block">
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
          <form className="mt-[50px] max-w-[434px] pt-[6px] pr-[6px] pb-[6px] pl-[24px] w-full flex items-center justify-between gap-x-[10px] bg-accent rounded-[8px] border border-secondary-200">
            <input
              className="min-w-[0px] input-primary"
              placeholder="Enter your email"
              type="text"
            />
            <button
              className="w-max button-primary"
              type="button"
            >
              sign up
            </button>
          </form>
        </div>
        <div className="hidden w-[300px] 2xl:w-auto xl:block">
          <Image
            className="[mask-image:linear-gradient(to_bottom,rgb(8,_8,_8),rgba(255,_255,_255,_0),rgb(8,_8,_8))]"
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
