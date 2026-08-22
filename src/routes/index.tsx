import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, ChevronRight, Star, Bell, Plus, Moon, Sun, Menu, X, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../lib/theme-provider";
import megPhoto from "../assets/meg-photo.jpg";
import { specialtyCards } from "../data/specialties";

const navItems = ["INÍCIO", "SOBRE", "ESPECIALIDADES", "CASES", "CONTATO"];

const caseStudies = [
  "Estratégia de Conteúdo",
  "Comunicação Institucional",
  "Gestão de Crise",
  "Produção de Vídeos",
  "Presença Digital",
  "Marca e Posicionamento",
];

const socialLinks = [
  { icon: Mail, href: "#contato", label: "E-mail" },
  { icon: ThumbsUp, href: "#contato", label: "Contato" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Mariana Chaluppe (Meg) | Portfolio",
    meta: [
      {
        name: "description",
        content:
          "Media Analyst, Journalist, Social Media and Corporate Communication specialist portfolio.",
      },
      { property: "og:title", content: "Mariana (Meg) Chaluppe | Portfolio" },
      {
        property: "og:description",
        content:
          "Media Analyst, Journalist, Social Media and Corporate Communication specialist portfolio.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["INÍCIO", "SOBRE", "ESPECIALIDADES", "CASES", "CONTATO"];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-lavender/30 selection:text-foreground">
      <header className="premium-shell sticky top-0 z-50 border-b-2 border-border bg-background/80 px-4 py-3 sm:px-6 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 transition-colors hover:bg-accent"
              aria-label="Alternar tema"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-border bg-lavender font-black text-white shadow-[0_12px_24px_rgba(197,120,211,0.34)] sm:h-12 sm:w-12"
            >
              MC
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-tight sm:text-sm">
                @megchaluppe
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-muted-foreground leading-none sm:text-[10px]">
                PORTFÓLIO
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[10px] font-black uppercase tracking-widest md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group relative transition-colors hover:text-lavender"
              >
                {link}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 scale-x-0 bg-lavender transition-transform duration-300 group-hover:w-full group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white p-2 shadow-brutalist transition-transform hover:scale-[1.02] md:hidden"
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-3 flex flex-col gap-3 border-t-2 border-border pt-3 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-black uppercase tracking-[0.2em] text-foreground transition-colors hover:text-lavender"
              >
                {link}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section
        id="início"
        className="relative flex min-h-[82vh] flex-col items-center justify-center overflow-hidden px-4 py-12 sm:px-8 md:min-h-[90vh] md:px-24 md:py-20"
      >
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 md:gap-12">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 hidden md:block"
          >
            <Star size={64} className="text-lavender fill-lavender/20" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 hidden md:block"
          >
            <Plus size={64} className="text-black/10" />
          </motion.div>

          <div className="group relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[450px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 overflow-hidden border-2 border-black bg-cream shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              <img
                src={megPhoto}
                alt="Mariana (Meg) Chaluppe"
                className="block h-auto w-full transition-all duration-700 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 z-20 hidden h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-lavender text-white shadow-brutalist md:flex md:h-20 md:w-20">
              <Bell size={28} className="md:size-8" />
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block border-2 border-black bg-lavender px-4 py-3 shadow-[0_18px_0_rgba(0,0,0,0.9)] sm:px-6 sm:py-4 md:px-8"
            >
              <h1 className="text-2xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-3xl md:text-5xl lg:text-7xl">
                Mariana Chaluppe (Meg)
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="premium-label mt-6 max-w-xl text-[10px] font-black text-black/60 sm:text-xs md:mt-8 md:text-sm"
            >
              Comunicação Estratégica • Jornalismo • Conteúdo • Marca
            </motion.p>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 -z-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </section>

      <section id="sobre" className="bg-cream/30 px-4 py-12 sm:px-6 md:px-24 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="premium-panel relative border-2 border-black bg-white/90 p-5 sm:p-8 md:p-12">
            <div className="absolute -top-5 -left-5 border-2 border-black bg-lavender px-3 py-2 text-xs font-black text-white shadow-brutalist sm:-top-6 sm:-left-6 sm:px-6 sm:text-xl">
              SOBRE A MEG
            </div>
            <div className="mt-10 grid gap-8 md:mt-8 md:grid-cols-[1fr_2fr] md:gap-12">
              <div className="flex flex-col gap-4">
                <div className="h-2 w-20 rounded-full bg-lavender" />
                <h3 className="text-2xl font-black uppercase leading-[1.02] tracking-[-0.05em] sm:text-3xl">
                  Comunicação que conecta pessoas, marcas e ideias.
                </h3>
              </div>
              <div className="text-base font-medium leading-relaxed text-black/80 sm:text-lg md:text-xl">
                <p className="whitespace-pre-line">
                  Olá, sou a Mariana, mas pode me chamar de Meg.
                  {"\n\n"}
                  Bacharel em Comunicação Social com foco em Jornalismo, com mais de 15 anos de
                  experiência em assessoria de imprensa, comunicação e produção de conteúdo.
                  {"\n\n"}
                  Trabalho com estratégia de presença digital, narrativa de marca, posicionamento
                  editorial e relacionamento com a imprensa, sempre com olhar crítico, estratégico e
                  humano.
                  {"\n\n"}
                  Também estudo Marketing Digital e Storytelling para fortalecer conteúdos que geram
                  conexão, relevância e resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="px-4 py-12 sm:px-6 md:px-24 md:py-24">
        <div className="mb-8 flex items-center justify-between md:mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-6xl">
            Especialidades
          </h2>
          <div className="mx-6 hidden h-0.5 flex-1 bg-black/10 md:block" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {specialtyCards.map((item, i) => (
            <Link key={item.slug} to={`/especialidades/${item.slug}`} className="block">
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="premium-card group relative h-full border-2 border-black p-6 sm:p-8"
                style={{
                  backgroundColor: item.backgroundColor,
                  color: item.textColor,
                  boxShadow:
                    item.backgroundColor === "#ffffff"
                      ? "0 18px 30px rgba(0,0,0,0.06)"
                      : "0 18px 30px rgba(0,0,0,0.12)",
                }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <item.icon
                    size={40}
                    className="transition-transform duration-300 group-hover:scale-110 sm:size-[48px]"
                  />
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-current/80 bg-black/5 text-current">
                    <ChevronRight size={14} />
                  </span>
                </div>
                <h3 className="text-base font-black uppercase leading-tight tracking-[-0.04em] sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80">{item.summary}</p>
                <div className="mt-5 flex items-center text-[10px] font-black uppercase opacity-100 transition-opacity sm:text-xs">
                  Ver mais <ChevronRight size={14} className="ml-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section id="cases" className="bg-black px-4 py-12 text-white sm:px-6 md:px-24 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-start gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="premium-label text-[10px] font-black text-lavender sm:text-xs">
                Trabalhos Recentes
              </span>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.06em] sm:text-4xl md:text-6xl">
                Cases que marcaram a trajetória
              </h2>
            </div>
            <p className="max-w-xs text-sm font-medium text-white/60">
              Estratégias de comunicação, conteúdo e relacionamento que ajudam marcas a ganharem
              presença e relevância.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="premium-card group border-2 border-white/20 bg-white/5 hover:border-lavender"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 mix-blend-multiply transition-opacity group-hover:opacity-20" />
                </div>
                <div className="p-4 sm:p-6">
                  <span className="premium-label mb-4 inline-block bg-lavender px-3 py-1 text-[10px] font-black text-white">
                    {title}
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-white/70">
                    Soluções de comunicação com foco em narrativa, clareza, visibilidade e conexão
                    com o público certo.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-4 py-12 sm:px-6 md:px-24 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-[-0.06em] sm:text-4xl md:text-6xl">
                Vamos criar algo com impacto?
              </h2>
              <p className="mt-6 text-base font-medium text-black/60 sm:text-lg">
                Estou aberta a novos projetos, colaborações, palestras e consultorias em comunicação
                estratégica.
              </p>

              <div className="mt-8 flex gap-4 sm:mt-12">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="flex h-12 w-12 items-center justify-center border-2 border-black bg-lavender text-white shadow-brutalist transition-colors hover:bg-black sm:h-14 sm:w-14"
                  >
                    <Icon size={22} className="sm:size-[24px]" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="premium-panel border-2 border-black bg-cream p-5 sm:p-8">
              <form className="flex flex-col gap-6">
                <div className="group relative">
                  <input
                    placeholder="Seu nome"
                    className="w-full border-b-2 border-black bg-transparent py-2 text-sm font-bold outline-none placeholder:text-black/30"
                  />
                  <div className="absolute bottom-0 h-0.5 w-0 bg-lavender transition-all duration-300 group-focus-within:w-full" />
                </div>
                <div className="group relative">
                  <input
                    placeholder="Seu e-mail"
                    className="w-full border-b-2 border-black bg-transparent py-2 text-sm font-bold outline-none placeholder:text-black/30"
                  />
                  <div className="absolute bottom-0 h-0.5 w-0 bg-lavender transition-all duration-300 group-focus-within:w-full" />
                </div>
                <div className="group relative">
                  <textarea
                    placeholder="Como posso ajudar?"
                    className="h-28 w-full resize-none border-b-2 border-black bg-transparent py-2 text-sm font-bold outline-none placeholder:text-black/30 sm:h-32"
                  />
                  <div className="absolute bottom-0 h-0.5 w-0 bg-lavender transition-all duration-300 group-focus-within:w-full" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="premium-label mt-2 border-2 border-black bg-black py-4 text-[10px] text-white shadow-brutalist transition-all hover:bg-lavender hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:text-xs"
                >
                  Enviar mensagem
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black bg-white px-4 py-10 sm:px-6 md:px-24 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-lavender font-black text-white">
              MC
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest sm:text-xs">
              Mariana Chaluppe
            </span>
          </div>

          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <Star key={i} size={16} className="text-lavender fill-lavender" />
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-[9px] font-black uppercase tracking-widest text-black/40 sm:text-[10px]">
              © 2026 • Mariana Chaluppe • Comunicação Estratégica
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
