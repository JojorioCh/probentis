interface HeroProps {
  title?: string; // <-- Optional prop
  description?: string; // <-- Optional prop
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="pt-32 pb-24 bg-linear-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Advancing Prostate Cancer Detection
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Probentis is developing a breakthrough minimally invasive device that
          empowers physicians with real-time in-vivo cancer assessment.
        </p>
      </div>
    </section>
  );
}
