import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { specialtyBySlug } from "../../data/specialties";

export const Route = createFileRoute("/especialidades/$slug")({
  component: SpecialtyDetailPage,
});

function SpecialtyDetailPage() {
  const { slug } = Route.useParams();
  const specialty = specialtyBySlug[slug];

  if (!specialty) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-lavender">Especialidade</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em]">Não encontrada</h1>
          <p className="mt-4 text-base text-black/60">
            Essa especialidade ainda não foi adicionada ao portfolio.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 border-2 border-black bg-lavender px-5 py-3 text-xs font-black uppercase text-white shadow-brutalist transition-transform hover:translate-x-[-2px]"
          >
            <ArrowLeft size={14} />
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b-2 border-black bg-white px-4 py-5 sm:px-6 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-black transition-colors hover:text-lavender"
          >
            <ArrowLeft size={14} />
            Voltar
          </Link>
          <div className="text-right">
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-black/50">Especialidade</p>
            <h1 className="text-sm font-black uppercase tracking-[-0.04em] sm:text-base">
              {specialty.title}
            </h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16">
        <section
          className="overflow-hidden border-2 border-black p-6 sm:p-8 md:p-10"
          style={{ backgroundColor: specialty.backgroundColor, color: specialty.textColor }}
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-current bg-black/5">
                  <specialty.icon size={22} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">
                  Oferta estratégica
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-4xl md:text-6xl">
                {specialty.title}
              </h2>

              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed opacity-85 sm:text-lg">
                {specialty.intro}
              </p>
            </div>

            <div className="border-2 border-current bg-black/5 p-4 sm:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] opacity-75">
                Como trabalho isso
              </p>
              <ul className="mt-5 space-y-4">
                {specialty.focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-bold leading-relaxed">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-current" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-none border-2 border-black bg-cream p-6 sm:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-black/55">
              Sobre a atuação
            </p>
            <div className="mt-6 space-y-5 text-base font-medium leading-relaxed text-black/75">
              {specialty.details.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {specialty.gallery.map((item) => (
              <figure key={`${specialty.slug}-${item.caption}`} className="overflow-hidden border-2 border-black bg-white">
                {item.type === "image" ? (
                  <img src={item.url} alt={item.alt} className="h-64 w-full object-cover" />
                ) : (
                  <div className="relative">
                    <video src={item.url} controls className="h-64 w-full object-cover bg-black" />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <PlayCircle size={44} className="text-white/80 drop-shadow-lg" />
                    </div>
                  </div>
                )}
                <figcaption className="border-t-2 border-black bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-black/70">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-12 border-2 border-black bg-black p-6 text-white sm:p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-lavender">Resultados</p>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.05em] sm:text-3xl md:text-4xl">
                Comunicação com impacto real.
              </h3>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border-2 border-white bg-transparent px-4 py-3 text-[10px] font-black uppercase text-white transition-all hover:bg-lavender hover:border-lavender"
            >
              Voltar para o portfolio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
