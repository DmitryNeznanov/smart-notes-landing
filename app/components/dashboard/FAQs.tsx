"use client"
import Image from "next/image"
import { useState } from "react"

export default function FAQs() {
  const [active, setActive] = useState(0)
  function handleClick(i: number) {
    setActive(i)
  }
  return (
    <section
      className="py-[64px] md:py-[96px]"
      id="FAQs"
    >
      <div className="container">
        <article className="mx-auto max-w-[335px] md:max-w-[536px] lg:max-w-[785px] flex flex-col items-center text-center">
          <h2>
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </h2>
          <p className="mt-[24px] text-primary-100">
            We've compiled a list of the most frequently asked questions about
            SmartNotes to help you get the information you need. If you have any
            other questions, feel free to reach out to our support team.
          </p>
        </article>
        <section className="mt-[72px] flex flex-col items-center gap-y-[20px]">
          {[
            [
              "What is SmartNotes?",
              "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante.",
            ],
            [
              "How do I get started with SmartNotes?",
              "Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.",
            ],
            [
              "What are the key features of SmartNotes?",
              "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante.",
            ],
            [
              "How much does SmartNotes cost?",
              "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante.",
            ],
            [
              "Who is SmartNotes for?",
              "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante.",
            ],
            [
              "What is SmartNotes?",
              "Lorem ipsum dolor sit amet consectetur. In felis egestas lectus netus cras viverra quis id nec. Est accumsan turpis mauris et at enim. Mattis eu est ultricies tellus at velit ante.",
            ],
          ].map(([title, text], i) => {
            return (
              <article
                className={`w-full overflow-hidden max-w-[800px] py-[18.5px] px-[24px] border border-secondary-200 rounded-[16px] ${
                  active === i + 1
                    ? "text-primary-400 bg-accent"
                    : "bg-primary-400 text-accent"
                }`}
                key={i}
                onClick={() => {
                  handleClick(i + 1)
                }}
              >
                <div className="flex flex-row items-center justify-between">
                  <h3>{title}</h3>
                  <Image
                    src={`/icons/${
                      active === i + 1
                        ? "arrow-right.svg"
                        : "arrow-secondary.svg"
                    }`}
                    width={32}
                    height={32}
                    alt=""
                  ></Image>
                </div>
                <p
                  className={`mt-[20px] pr-[55px] ${
                    active === i + 1 ? "block" : "hidden"
                  }`}
                >
                  {text}
                </p>
              </article>
            )
          })}
        </section>
      </div>
    </section>
  )
}
