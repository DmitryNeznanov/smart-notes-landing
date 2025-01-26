import Image from "next/image"

export default function Features() {
  return (
    <section
      className="py-[64px] md:py-[70px]"
      id="features"
    >
      <div className="container">
        <article className="mx-auto max-w-[335px] md:max-w-[552px] lg:max-w-full flex flex-col items-center text-center">
          <h2>
            Discover the Power of{" "}
            <span className="text-gradient">SmartNotes</span>
          </h2>
          <p className="max-w-[335px] md:max-w-[390px] mt-[24px] text-primary-100">
            SmartNotes is packed with innovative features designed to
            revolutionize the way you take notes, collaborate with others, and
            stay organized.
          </p>
        </article>
        <section className="mt-[88px] grid gap-[16px] md:gap-[20px] grid-cols-1 md:grid-cols-2 md:max-xl:[&>*:nth-child(3n)]:col-span-2 xl:grid-cols-4 xl:[&>*:nth-child(-n+2)]:col-span-2">
          {[
            [
              "thumb-up.svg",
              "Cross-Platform Accessibility",
              "Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.",
            ],
            [
              "global.svg",
              "Customizable Templates",
              "Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.",
            ],
            [
              "flag.svg",
              "Secure Cloud Storage",
              "Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.",
            ],
            [
              "circle.svg",
              "Real-Time Collaboration",
              "Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.",
            ],
            [
              "hashtag.svg",
              "AI-Powered Organization",
              "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.",
            ],
            [
              "git-branch.svg",
              "Integrations",
              "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.c",
            ],
          ].map(([image, title, text], i) => {
            return (
              <article
                className="py-[24px] px-[24px] md:py-[32px] border border-secondary-200 rounded-[12px]"
                key={i}
              >
                <Image
                  src={`/icons/${image}`}
                  width={32}
                  height={32}
                  alt={image}
                ></Image>
                <h4 className="mt-[24px]">{title}</h4>
                <p className="mt-[16px] text-primary-100">{text}</p>
              </article>
            )
          })}
        </section>
      </div>
    </section>
  )
}
