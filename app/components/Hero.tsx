import FadeInSection from "./FadeInSection";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-probentis-dark text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-probentis-dark/80 via-probentis-mid/60 to-probentis-dark/90"></div>

      {/* Content */}
      <FadeInSection>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Transforming Prostate Cancer Detection
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Probentis is developing a minimally invasive Raman spectroscopy
            device enabling real-time, in-vivo assessment to support better
            surgical outcomes.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
