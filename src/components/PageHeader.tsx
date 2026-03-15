export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="ink-wash text-washi py-16 relative overflow-hidden">
      {/* Decorative kanji watermark */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white/[0.04] select-none pointer-events-none"
        style={{ fontSize: "12rem", fontFamily: "serif", lineHeight: 1 }}
      >
        道
      </div>
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="flex items-center gap-4">
          <div className="w-1 h-12 bg-vermillion rounded-full" />
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
              {title}
            </h1>
            {subtitle && <p className="text-tatami/70 mt-2 text-lg font-light">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
