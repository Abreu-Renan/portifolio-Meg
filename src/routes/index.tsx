import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BarChart,
  PenTool,
  ThumbsUp,
  Megaphone,
  Mail,
  ChevronRight,
  Star,
  Bell,
  Plus,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../lib/theme-provider";
import megPhoto from "../assets/meg-photo.jpg";

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

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-lavender/30 selection:text-foreground">
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b-2 border-border bg-background/80 px-4 py-3 backdrop-blur-md sm:px-6 md:px-12">
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
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-border bg-lavender font-black text-white shadow-brutalist sm:h-12 sm:w-12"
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
        <nav className="hidden gap-6 text-[10px] font-black uppercase tracking-widest md:flex lg:gap-8">
          {["INÍCIO", "SOBRE", "ESPECIALIDADES", "CASES", "CONTATO"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative transition-colors hover:text-lavender group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 scale-x-0 bg-lavender transition-transform duration-300 group-hover:w-full group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </header>

      <section
        id="início"
        className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-12 sm:px-8 md:px-24 md:py-20"
      >
        <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12">
          {/* Floating Elements with refined animations */}
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

          <div className="group relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 overflow-hidden border-2 border-black bg-cream shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <img
                src={megPhoto}
                alt="Mariana (Meg) Chaluppe"
                className="block h-auto w-full grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
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
              className="inline-block border-2 border-black bg-lavender px-4 py-3 shadow-brutalist sm:px-6 sm:py-4 md:px-8"
            >
              <h1 className="text-2xl font-black uppercase leading-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
                Mariana Chaluppe (Meg)
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 max-w-2xl text-[10px] font-black uppercase tracking-[0.18em] text-black/60 sm:text-xs md:mt-8 md:text-sm"
            >
              Comunicação Estratégica • Jornalismo • Conteúdo • Marca
            </motion.p>
          </div>
        </div>

        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 -z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </section>

      <section id="sobre" className="bg-cream/30 px-8 py-24 md:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative border-2 border-black bg-white p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute -top-6 -left-6 border-2 border-black bg-lavender px-6 py-2 text-xl font-black text-white shadow-brutalist">
              SOBRE A MEG
            </div>
            <div className="mt-8 grid gap-12 md:grid-cols-[1fr_2fr]">
              <div className="flex flex-col gap-4">
                <div className="h-2 w-20 bg-lavender" />
                <h3 className="text-3xl font-black leading-tight uppercase">
                  Comunicação que conecta pessoas, marcas e ideias.
                </h3>
              </div>
              <div className="text-xl font-medium leading-relaxed text-black/80">
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
      <section id="especialidades" className="px-8 py-24 md:px-24">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
            Especialidades
          </h2>
          <div className="hidden h-0.5 flex-1 bg-black/10 mx-12 md:block" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "ANÁLISE DE MÍDIAS", bg: "bg-cream", icon: BarChart, color: "text-black" },
            { title: "JORNALISMO", bg: "bg-lavender", icon: PenTool, color: "text-white" },
            { title: "SOCIAL MEDIA", bg: "bg-white", icon: ThumbsUp, color: "text-black" },
            {
              title: "COMUNICAÇÃO CORPORATIVA",
              bg: "bg-black",
              icon: Megaphone,
              color: "text-white",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className={`group relative border-2 border-black p-8 shadow-brutalist transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${item.bg} ${item.color}`}
            >
              <item.icon size={48} className="mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-lg font-black leading-tight uppercase tracking-tight">
                {item.title}
              </h3>
              <div className="mt-4 flex items-center text-xs font-black uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Ver mais <ChevronRight size={14} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="cases" className="bg-black px-8 py-24 text-white md:px-24">
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-lavender">
              Trabalhos Recentes
            </span>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tighter md:text-6xl">
              Cases que marcaram a trajetória
            </h2>
          </div>
          <p className="max-w-xs text-sm font-medium text-white/60">
            Estratégias de comunicação, conteúdo e relacionamento que ajudam marcas a ganharem
            presença e relevância.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Estratégia de Conteúdo",
            "Comunicação Institucional",
            "Gestão de Crise",
            "Produção de Vídeos",
            "Presença Digital",
            "Marca e Posicionamento",
          ].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-2 border-white/20 bg-white/5 transition-colors hover:border-lavender"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply transition-opacity group-hover:opacity-20" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-lavender px-3 py-1 text-[10px] font-black text-white mb-4 uppercase tracking-widest">
                  {title}
                </span>
                <p className="text-sm font-medium leading-relaxed text-white/70">
                  Soluções de comunicação com foco em narrativa, clareza, visibilidade e conexão com
                  o público certo.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contato" className="px-8 py-24 md:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
                Vamos criar algo com impacto?
              </h2>
              <p className="mt-6 text-lg font-medium text-black/60">
                Estou aberta a novos projetos, colaborações, palestras e consultorias em comunicação
                estratégica.
              </p>

              <div className="mt-12 flex gap-4">
                {[Mail, ThumbsUp].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#contato"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="flex h-14 w-14 items-center justify-center border-2 border-black bg-lavender text-white shadow-brutalist transition-colors hover:bg-black"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border-2 border-black bg-cream p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
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
                    className="h-32 w-full resize-none border-b-2 border-black bg-transparent py-2 text-sm font-bold outline-none placeholder:text-black/30"
                  />
                  <div className="absolute bottom-0 h-0.5 w-0 bg-lavender transition-all duration-300 group-focus-within:w-full" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 border-2 border-black bg-black py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-brutalist transition-all hover:bg-lavender hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  Enviar mensagem
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black bg-white px-8 py-12 md:px-24">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-lavender font-black text-white">
              MC
            </div>
            <span className="text-xs font-black uppercase tracking-widest">Mariana Chaluppe</span>
          </div>

          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <Star key={i} size={16} className="text-lavender fill-lavender" />
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] font-black uppercase tracking-widest text-black/40">
              © 2026 • Mariana Chaluppe • Comunicação Estratégica
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
