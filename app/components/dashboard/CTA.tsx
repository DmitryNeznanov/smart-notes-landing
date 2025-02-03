import Image from "next/image"

export default function CTA() {
  return (
    <section
      className="py-[64px] md:py-[80px]"
      id="CTA"
    >
      <div className="container lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col items-center justify-center lg:flex-row md:block">
          <article>
            <h2 className="sm:max-w-[440px] md:max-w-[340px]">
              Unlock the Full Potential of{" "}
              <span className="text-gradient"> SmartNotes</span>
            </h2>
            <p className="mt-[16px] md:mt-[24px] lg:mt-[16px] max-w-[480px] text-primary-100">
              Ready to streamline your workflow and boost your productivity?
              Start your free trial of SmartNotes today and experience the power
              of smart note-taking.
            </p>
            <button
              className="button-primary mt-[24px] md:mt-[32px] lg:mt-[54px]"
              type="button"
            >
              Sign Up for Free
            </button>
          </article>
        </div>
        <div className="hidden lg:block ml-[48px] 2xl:w-auto h-max relative">
          <div className="absolute w-full h-full bg-[linear-gradient(to_bottom,rgb(8,_8,_8),rgba(0,_0,_0,_0),rgb(8,_8,_8))] "></div>
          <Image
            src="/CTA.svg"
            width={375}
            height={375}
            alt="CTA.svg"
          ></Image>
        </div>
      </div>
    </section>
  )
}
