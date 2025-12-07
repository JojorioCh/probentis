import FadeInSection from "./FadeInSection";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  img?: string;
  reverse?: boolean;
}

export default function Section({ title, children, img, reverse }: SectionProps) {
  return (
    <FadeInSection>
      <section className="py-20 bg-white">
        <div
          className={`container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-probentis-dark mb-4">{title}</h2>
            <div className="text-gray-700 text-lg leading-relaxed">{children}</div>
          </div>

          {/* Optional image */}
          {img && (
            <img
              src={img}
              alt={title}
              className="flex-1 rounded-2xl shadow-xl w-full max-w-md"
            />
          )}
        </div>
      </section>
    </FadeInSection>
  );
}
