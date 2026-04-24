const cases = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseStudies() {
  return (
    <section id="caseStudies" className="max-w-300 mx-auto mt-10 px-1 py-16">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-12">
        <h2
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="bg-[#B9FF66] text-black text-4xl font-bold px-3 py-1 rounded-lg whitespace-nowrap"
        >
          Case Studies
        </h2>
        <p
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-text md:text-xl font-medium max-w-130 leading-7"
        >
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {/* CARDS */}
      <div className="bg-[#1a1a2e] rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8  mt-1.5md:gap-0">
        {cases.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between gap-8 px-0 md:px-8
              ${index !== cases.length - 1 ? "border-b md:border-b-0 md:border-r border-[#B9FF66] pb-8 md:pb-0" : ""}`}
          >
            <p
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-white text-base leading-7"
            >
              {item.text}
            </p>

            <button
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="flex items-center gap-2 text-[#B9FF66] text-base font-medium
                hover:gap-4 transition-all duration-300 cursor-pointer w-fit"
            >
              Learn more
              <img
                src="/images/Case-Studies/case-studies-green-arrow.svg"
                alt="arrow"
                className="w-5 h-5"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
