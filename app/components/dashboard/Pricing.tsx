import Image from "next/image"
import Link from "next/link"

export default function Pricing() {
  return (
    <section
      className="py-[64px] md:py-[96px]"
      id="pricing"
    >
      <article className="mx-auto max-w-[335px] md:max-w-[552px] lg:max-w-full flex flex-col items-center text-center">
        <h2>
          <span className="text-gradient">Pricing</span> & Plans
        </h2>
        <p className="max-w-[335px] md:max-w-[390px] mt-[24px] text-primary-100">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </article>
      <div></div>
      <section>
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
                className="w-max py-[40px] px-[32px] flex flex-col gap-y-[32px] border-[2px] border-secondary-200 bg-primary-50 even:bg-primary-400 rounded-[10px]"
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
                    ${plan.price}
                  </span>{" "}
                  / month
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
                <div className="flex flex-col items-center">
                  <Link
                    className="button-primary"
                    href={plan.link}
                  >
                    {plan.button}
                  </Link>
                  <p className="text-[12px] text-primary-200  ">
                    {plan.cardRequire === false
                      ? "No credit card required"
                      : ""}
                  </p>
                </div>
              </article>
            )
          }),
        ]}
      </section>
    </section>
  )
}
