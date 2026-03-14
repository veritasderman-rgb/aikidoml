export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-gray-200 mt-2 text-lg">{subtitle}</p>}
      </div>
    </div>
  );
}
