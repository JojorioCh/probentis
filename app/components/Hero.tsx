export function Hero({ title, description }) {
  return (
    <header className="bg-white py-24 px-4 text-center border-b">
      <h1 className="text-5xl font-semibold mb-6">{title}</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </header>
  );
}
