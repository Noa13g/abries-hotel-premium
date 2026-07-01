export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#1d211c]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
        <nav className="flex items-center justify-between text-sm uppercase tracking-[0.18em] text-[#5d6759]">
          <span>Abriès Hôtel</span>
          <span>Audit en cours</span>
        </nav>

        <div className="grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.24em] text-[#697f76]">
              Refonte premium du site
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-[#151a17] sm:text-6xl lg:text-7xl">
              Refuge contemporain du Queyras, prêt pour un audit autonome.
            </h1>
          </div>

          <div className="border-l border-[#c8c1b0] pl-6 text-lg leading-8 text-[#4e554b]">
            <p>
              Le repo est configuré pour crawler les sources publiques,
              structurer le contenu, puis construire une expérience hôtelière
              rapide, élégante et mobile-first.
            </p>
          </div>
        </div>

        <div className="grid gap-4 border-t border-[#d7d0bf] pt-6 text-sm text-[#5d6759] sm:grid-cols-3">
          <p>Next.js App Router + TypeScript</p>
          <p>Tailwind, shadcn/ui, Motion, GSAP, Lenis</p>
          <p>SEO, tunnel contact/réservation, Playwright</p>
        </div>
      </section>
    </main>
  );
}
