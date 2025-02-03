import Image from "next/image"
import Link from "next/link"

export default function Pricing() {
  return (
    <section
      className="py-[64px] md:py-[96px]"
      id="pricing"
    >
      <div className="container">
        {" "}
        <article className="mx-auto max-w-[335px] md:max-w-[552px] lg:max-w-full flex flex-col items-center text-center">
          <h2>
            <span className="text-gradient">Pricing</span> & Plans
          </h2>
          <p className="max-w-[335px] md:max-w-[390px] mt-[24px] text-primary-100">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </article>
        <section className="mt-[40px]">
          <div className="flex items-center justify-center gap-x-[14px]">
            <label
              className="text-[18px] text-accent select-none cursor-pointer"
              htmlFor="switch"
            >
              Monthly
            </label>
            <div className="w-[65px] overflow-hidden relative group z-10 bg-primary-100 peer-checked:hidden rounded-full">
              <label
                className="w-screen h-screen z-20 absolute cursor-pointer"
                htmlFor="switch"
              ></label>
              <input
                className="peer hidden"
                type="checkbox"
                name="switch"
                id="switch"
              />
              <div className="w-[20px] h-[20px] m-[6px] peer-checked:ml-auto transition-all duration-300 bg-[#fff] rounded-full"></div>
            </div>
            <p className="text-[18px] text-primary-100">Yearly</p>
            <span className="text-[14px] text-primary-400 py-[2px] px-[16px] rounded-full gradient-primary">
              Save 25%
            </span>
          </div>
        </section>
        <section className="mt-[40px] flex flex-col items-center lg:items-stretch lg:flex-row justify-between gap-[40px] ">
          {[
            [
              {
                planImage: "star.svg",
                type: "individual",
                price: 9.99,
                features: [
                  "Real-time collaboration",
                  "AI-powered organization",
                  "Customizable templates",
                  "5GB cloud storage",
                  "Basic integrations",
                ],
                button: "start free trial",
                link: "#",
                cardRequire: false,
              },
              {
                planImage: "square.svg",
                type: "team",
                price: 19.99,
                features: [
                  "Everything in the Individual Plan",
                  "Unlimited cloud storage",
                  "Advanced integrations",
                  "Team management and permissions",
                  "Shared templates and note libraries",
                ],
                button: "start free trial",
                test: "test",
                link: "#",
                cardRequire: false,
              },
              {
                planImage: "drops.svg",
                type: "enterprice",
                price: "custom",
                features: [
                  "Everything in the Team Plan",
                  "Dedicated account manager",
                  "Enterprise-grade security",
                  "Customized onboarding",
                  "Advanced analytics",
                ],
                button: "contact support",
                link: "#support",
                cardRequire: true,
              },
            ].map((plan, i) => {
              return (
                <article
                  className="w-full max-w-[472px] lg:max-w-[357px] py-[40px] px-[32px] flex flex-col gap-y-[32px] border-[2px] border-secondary-200 bg-primary-50 even:bg-primary-400 rounded-[10px]"
                  key={i}
                >
                  <div className="flex items-center gap-x-[8px]">
                    <Image
                      src={`/icons/${plan.planImage}`}
                      width={25}
                      height={25}
                      alt={plan.planImage}
                    ></Image>
                    <h6 className="text-secondary-200 capitalize">{`${plan.type} Plan`}</h6>
                  </div>
                  <p>
                    <span
                      className={`text-[48px] font-bold uppercase ${
                        i % 2 == 0 ? "text-primary-400" : "text-primary-50"
                      }`}
                    >
                      {typeof plan.price === typeof 1
                        ? `$${plan.price}`
                        : `${plan.price}`}
                    </span>{" "}
                    <span
                      className={`${
                        i % 2 == 0 ? "text-primary-300" : "text-secondary-200"
                      } ${typeof plan.price === typeof 1 ? "" : "hidden"}`}
                    >
                      / month
                    </span>
                  </p>
                  <ul
                    className={`${
                      i % 2 == 0 ? "text-primary-300" : "text-primary-100"
                    }`}
                  >
                    {plan.features.map((feature, i) => {
                      return (
                        <li
                          className="list-inside list-image-[url('/shape/check.svg')]"
                          key={i}
                        >
                          {feature}
                        </li>
                      )
                    })}
                  </ul>
                  <div className="mt-auto flex flex-col items-center">
                    <Link
                      className={`w-full ${
                        i % 2 == 0 ? "button-accent" : "button-primary"
                      }`}
                      href={plan.link}
                    >
                      {plan.button}
                    </Link>
                    <p
                      className={`mt-[2px] text-[12px] text-primary-200 ${
                        plan.cardRequire === false ? "visible" : "invisible"
                      } `}
                    >
                      No credit card required
                    </p>
                  </div>
                </article>
              )
            }),
          ]}
        </section>
      </div>
    </section>
  )
}
