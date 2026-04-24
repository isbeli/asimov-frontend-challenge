export default function Brands() {
  const brands = [
    { src: "/images/icons/amazon.svg", alt: "Amazon" },
    { src: "/images/icons/dribbble.svg", alt: "Dribbble" },
    { src: "/images/icons/HubSpot.svg", alt: "HubSpot" },
    { src: "/images/icons/notion.svg", alt: "Notion" },
    { src: "/images/icons/netflix.svg", alt: "Netflix" },
    { src: "/images/icons/zoom.svg", alt: "Zoom" },
  ];

  return (
    <section className="max-w-300 mx-auto px-6 py-10 ">
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 md:gap-10">
        {brands.map((brand) => (
          <img
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            className="h-8 md:h-12 object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
}
