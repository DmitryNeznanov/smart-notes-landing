export default function Hero() {
  return (
    <section id="hero">
      <div className="container lg:bg-[linear-gradient(to_bottom,rgb(8,_8,_8),rgba(255,_255,_255,_0),rgb(8,_8,_8)),url('/hero.svg')] bg-no-repeat bg-[right_92px_top] bg-contain">
        <article className="max-w-[350px] md:max-w-[700px]">
          <h1>
            <span className="text-gradient">Intelligent</span> cloud-based
            <span className="text-gradient"> note-taking</span> and
            collaboration tool
          </h1>
          <p className="max-w-[335px] md:max-w-[400px] lg:max-w-none pt-[16px] text-primary-100">
            Experience the power of smart note-taking and transform the way you
            work today.
          </p>
          <form className="mt-[50px] max-w-[434px] pt-[6px] pr-[6px] pb-[6px] pl-[24px] w-full flex items-center justify-between bg-accent rounded-[8px] border border-secondary-200">
            <input
              className="input-primary pr-[10px]"
              placeholder="Enter your email"
              type="text"
            />
            <button
              className="min-w-[140px] button-primary"
              type="button"
            >
              sign up
            </button>
          </form>
        </article>
      </div>
    </section>
  )
}
