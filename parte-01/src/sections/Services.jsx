const services = [
  {
    titlePrimary: "Search engine",
    titleSecondary: "optimization",
    image: "/images/services/services-search-engine-optimization.svg",
    bg: "bg-gray-100",
    titleBg: "bg-[#B9FF66]",
    learnColor: "text-black",
    arrow: "/images/services/green-arrow-card-icons.svg",
    borderColor: "border border-black px-9 py-5 rounded-2xl",
  },
  {
    titlePrimary: "Pay-per-click",
    titleSecondary: "advertising",
    image: "/images/services/service-Pay-per-click-advertising.svg",
    bg: "bg-[#B9FF66]",
    titleBg: "bg-white",
    learnColor: "text-black",
    arrow: "/images/services/green-arrow-card-icons.svg",
  },
  {
    titlePrimary: "Social Media",
    titleSecondary: "Marketing",
    image: "/images/services/service-social-media-marketing.svg",
    bg: "bg-black",
    titleBg: "bg-white",
    learnColor: "text-white",
    arrow: "/images/services/black-arrow-card-icons.svg",
  },
  {
    titlePrimary: "Email",
    titleSecondary: "Marketing",
    image: "/images/services/service-Email-marketing.svg",
    bg: "bg-gray-100",
    titleBg: "bg-[#B9FF66]",
    learnColor: "text-black",
    arrow: "/images/services/green-arrow-card-icons.svg",
  },
  {
    titlePrimary: "Content",
    titleSecondary: "Creation",
    image: "/images/services/service-content-creation.svg",
    bg: "bg-[#B9FF66]",
    titleBg: "bg-white",
    learnColor: "text-black",
    arrow: "/images/services/green-arrow-card-icons.svg",
  },
  {
    titlePrimary: "Analytics",
    titleSecondary: "and Tracking",
    image: "/images/services/service-analytics and-tracking.svg",
    bg: "bg-black",
    titleBg: "bg-[#B9FF66]",
    learnColor: "text-white",
    arrow: "/images/services/black-arrow-card-icons.svg",
  },
];

const ServiceCard = ({
  titlePrimary,
  titleSecondary,
  image,
  bg,
  titleBg,
  learnColor,
  arrow,
}) => (
  <div
    className={`${bg} border-2 border-b-4 border-black rounded-3xl p-10 flex flex-col justify-between min-h-55 relative overflow-hidden
  transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer`}
  >
    <div className="flex justify-between items-start gap-4">
      {/* TÍTULO */}
      <div className="flex flex-col -space-y-1">
        <span
          className={`${titleBg} text-black text-3xl  font-medium px-2 leading-tight rounded-lg w-fit`}
        >
          {titlePrimary}
        </span>
        <span
          className={`${titleBg} text-black text-3xl  font-medium px-2 leading-tight rounded-lg   w-fit`}
        >
          {titleSecondary}
        </span>
      </div>

      {/* IMAGEM */}
      <img
        src={image}
        alt={titlePrimary}
        className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-contain shrink-0"
      />
    </div>

    <button
      className={`${learnColor} flex items-center gap-2 text-base font-medium mt-4 hover:gap-4 transition-all duration-300 cursor-pointer`}
    >
      <img src={arrow} alt="arrow" className="w-10 h-10" />
      Learn more
    </button>
  </div>
);
export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-20">
        <h2
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="bg-[#B9FF66] text-black text-4xl font-medium px-3 py-1 rounded-lg whitespace-nowrap mp-5 "
        >
          Services
        </h2>
        <p
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-black text-base max-w-145"
        >
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.titlePrimary} {...service} />
        ))}
      </div>
    </section>
  );
}
