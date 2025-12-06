interface SectionProps {
  title: string;
  text: string[];
}

export default function Section({ title, text }: SectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">{title}</h2>

        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          {text.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
