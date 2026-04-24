export default function CTA() {
  return (
    <section className="max-w-310 mx-auto px-10 py-16">
      <div className="bg-[#F3F3F3] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-15   overflow-hidden">
        {/* LADO ESQUERDO */}
        <div className="flex relative flex-col ml-15 gap-10 max-w-110">
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="font-bold text-3xl text-black"
          >
            Let's make things happen
          </h2>
          <p
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-base text-text text-2xl leading-6"
          >
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "18px",
            }}
            className="bg-black text-white px-8 py-4 rounded-2xl w-fit
              transition-all duration-300 ease-in-out
              hover:bg-gray-800 hover:scale-105 hover:shadow-md
              active:scale-95 cursor-pointer"
          >
            Get your free proposal
          </button>
        </div>

        {/* IMAGEM */}
        <div className="shrink-0 absolute right-10 pa-5  bottom- flex items-center">
          <img
            src="/images/Case-Studies/lets-make-things-happen.svg"
            alt="lets make things happen"
            className=" lg:w-10  xl:w-110 2xl:w-120 right-10 -top-6 bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
