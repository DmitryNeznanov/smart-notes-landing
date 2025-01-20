export default function Testimonials() {
  return (
    <section className="py-[64px] flex flex-col items-center justify-center">
      <blockquote
        className="max-w-[310px] md:max-w-[475px] before:content-[url('/shape/quote.svg')]"
        cite="https://google.com"
      >
        <p className=" text-[20px]/[150%] md:text-[24px]/[140%] text-accent font-bold text-center">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </p>
      </blockquote>
      <p className="mt-[24px] md:mt-[32px] text-accent text-center">
        Sarah Johnson
        <cite className="ml-[16px] text-primary-200 not-italic">
          TechSavvy Solutions
        </cite>
      </p>
    </section>
  )
}
