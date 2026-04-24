export default function Hero() {
  return (
    <section className="max-w-300 mx-25  pt-32 pb-2 -mt-33">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LADO ESQUERDO */}
        <div className="flex flex-col gap-8 max-w-129 w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-133">
            Navigating the digital landscape for success
          </h1>

          <p
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-base md:text-xl leading-7 max-w-125 text-text"
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "20px",
            }}
            className="bg-black text-white px-9 py-5 rounded-2xl w-fit
              transition-all duration-300 ease-in-out
              hover:bg-gray-800 hover:scale-105 hover:shadow-md
              active:scale-95 active:shadow-sm cursor-pointer"
          >
            Book a consultation
          </button>
        </div>

        {/* LADO DIREITO */}
        <div className="w-full  ml-10 lg:w-auto flex justify-center">
          <img
            src="/images/hero/hero-Illustration.svg"
            alt="hero illustration"
            className="w-full max-w-[320px] md:max-w-105 ml-20 mt-13  lg:max-w-160"
          />
        </div>
      </div>
    </section>
  );
}
