export function Section({ title, children }) {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <div className="text-lg leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}
