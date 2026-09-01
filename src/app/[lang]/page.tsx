import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Locale } from "@/i18n.config";
import MobileNavMenu from "@/components/MobileNavMenu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "CYBER0",
    type: "Plataforma institucional",
    description: "Presença digital redesenhada de raiz, com UI/UX de alto impacto, performance e arquitetura preparada para escalar.",
    tags: ["Next.js", "TypeScript", "UI/UX"],
    href: "https://cyber0.vercel.app",
    featured: true,
  },
  {
    title: "CyberZ AI",
    type: "Produtos de inteligência artificial",
    description: "Desenvolvimento principal do projeto autónomo de IA da CYBER0 — da arquitetura de software à criação de novos produtos.",
    tags: ["AI", "Python", "Architecture"],
    href: "#contact",
    featured: true,
  },
  {
    title: "Prosefa",
    type: "Sistema estatal",
    description: "Emissão, rastreamento e controlo de selos fiscais para produtos como tabacos e bebidas, com foco em segurança e conformidade.",
    tags: ["Full Stack", "Security", "Performance"],
    href: "#experience",
    featured: false,
  },
  {
    title: "Yunit",
    type: "Simulador de incentivos",
    description: "Aplicação construída de raiz para simular incentivos, desenvolvida com Laravel e Vue.",
    tags: ["Laravel", "Vue", "Product"],
    href: "#experience",
    featured: false,
  },
  {
    title: "Sheelty Mobile",
    type: "Gestão de folhas de cálculo",
    description: "Aplicação mobile para gerir planilhas, ligando uma experiência React Native a uma API Laravel.",
    tags: ["React Native", "Laravel", "Mobile"],
    href: "#experience",
    featured: false,
  },
];

const skills = [
  ["Frontend", "TypeScript", "React", "Next.js", "Vue", "HTML / CSS"],
  ["Backend", "Node.js", "Python", "Laravel", "APIs REST", "Arquitetura"],
  ["AI & Data", "Artificial Intelligence", "AI Products", "Automação", "Data flows"],
  ["Outros", "React Native", "Unreal Engine", "DevOps", "Git", "UI/UX"],
];

const experience = [
  {
    period: "05.2026 — presente",
    company: "CYBER0",
    role: "Developer",
    text: "Liderança técnica e desenvolvimento de plataformas web modernas, soluções orientadas a IA e propostas corporativas estratégicas.",
  },
  {
    period: "07.2025 — 10.2025",
    company: "Mirantes.io",
    role: "Full Stack Developer",
    text: "Contribuição no Prosefa, sistema estatal de selos fiscais, e desenvolvimento do módulo de vagas da plataforma de recrutamento.",
  },
  {
    period: "03.2024 — 01.2025",
    company: "The CodingMachine",
    role: "Full Stack Developer",
    text: "Desenvolvimento e manutenção da Atlas Blue, gestão de tickets, deployment de features e colaboração direta com clientes.",
  },
  {
    period: "06.2022 — 12.2022",
    company: "Sota & SLAC",
    role: "Frontend Developer",
    text: "Design e implementação da interface de utilizador para uma aplicação freelancer.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
      <span className="h-px w-6 bg-cyan-400" />
      <span>{children}</span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={project.href}
        target={project.href.startsWith("http") ? "_blank" : undefined}
        className={project.featured ? "block h-full" : "block h-full"}
      >
        <Card
          className={[
            "group h-full overflow-hidden border border-white/10 bg-slate-900/80 p-0 shadow-[0_20px_40px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900",
            project.featured ? "min-h-[360px]" : "min-h-[300px]",
          ].join(" ")}
        >
          <div className="flex h-full flex-col justify-between p-5 md:p-6">
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                0{index + 1}
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <div className="mt-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                {project.type}
              </p>
              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">{project.description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const en = lang === "en";
  const t = (pt: string, english: string) => (en ? english : pt);
  const cvHref = en ? "/cv-en-aurimar-lopes.pdf" : "/cv-pt-aurimar-lopes.pdf";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-[min(1160px,calc(100%-32px))] items-center justify-between gap-4 py-4 md:w-[min(1160px,calc(100%-48px))]">
          <Link href="#top" className="text-2xl font-black tracking-[-0.08em] text-white">
            AL<span className="text-cyan-400">.</span>
          </Link>

          <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300 md:flex">
            <Link href="#work" className="transition hover:text-cyan-400">
              {t("Trabalho", "Work")}
            </Link>
            <Link href="#about" className="transition hover:text-cyan-400">
              {t("Sobre", "About")}
            </Link>
            <Link href="#contact" className="transition hover:text-cyan-400">
              {t("Contacto", "Contact")}
            </Link>
            <a href={cvHref} download className="transition hover:text-cyan-400">
              {t("CV", "Resume")}
            </a>
            <Link href={en ? "/pt" : "/en"} className="rounded-full border border-white/15 px-3 py-1.5 text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/10">
              {en ? "PT" : "EN"}
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button className="rounded-full border border-cyan-400/40 bg-cyan-400 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300">
              <Link href="#contact" className="inline-flex items-center gap-2">
                {t("Disponível para projetos", "Available for projects")}
                <MoveUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <MobileNavMenu
              ariaLabel={t("Abrir menu", "Open menu")}
              links={[
                { title: t("Trabalho", "Work"), href: "#work" },
                { title: t("Sobre", "About"), href: "#about" },
                { title: t("Contacto", "Contact"), href: "#contact" },
                { title: t("CV", "Resume"), href: cvHref },
                { title: en ? "PT" : "EN", href: en ? "/pt" : "/en" },
              ]}
              extraContent={
                <Link
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  {t("Disponível para projetos", "Available for projects")}
                </Link>
              }
            />
          </div>
        </div>
      </header>

      <div className="mx-auto w-[min(1160px,calc(100%-32px))] md:w-[min(1160px,calc(100%-48px))]">
        <motion.section
          id="top"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex min-h-[calc(100vh-88px)] flex-col justify-center py-16 md:py-20"
        >
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-400">
                Luanda, Angola <span className="mx-2 text-slate-500">•</span> 2026
              </p>

              <h1 className="max-w-xl text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white md:text-[6.2rem]">
                {t("Construo produtos", "I build products")} <span className="text-cyan-400">{t("que importam.", "that matter.")}</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                {t(
                  "Sou Aurimar Lopes, Full Stack Developer especializado em transformar ideias complexas em experiências digitais claras, robustas e escaláveis.",
                  "I am Aurimar Lopes, a Full Stack Developer who turns complex ideas into clear, robust, and scalable digital experiences."
                )}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button className="rounded-full bg-cyan-400 px-5 py-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-300">
                  <Link href="#work" className="inline-flex items-center gap-2">
                    {t("Ver trabalho", "View work")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>

                <a href={cvHref} download className="inline-flex items-center gap-2 text-sm font-medium text-slate-100 transition hover:text-cyan-400">
                  {t("Baixar CV", "Download resume")}
                  <span className="text-cyan-400">↓</span>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-[0_30px_60px_rgba(14,165,233,0.08)]"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <p className="ml-auto text-[10px] uppercase tracking-[0.2em] text-slate-500">aurimar@portfolio ~</p>
              </div>

              <div className="space-y-2 bg-slate-950/70 p-6 font-mono text-sm leading-7 text-slate-300">
                <p>
                  <span className="text-violet-300">const</span> developer = {'{'}
                </p>
                <p className="pl-6">
                  name: <span className="text-amber-300">&quot;Aurimar Lopes&quot;</span>,
                </p>
                <p className="pl-6">
                  focus: <span className="text-amber-300">&quot;full-stack&quot;</span>,
                </p>
                <p className="pl-6">craft: [</p>
                <p className="pl-10 text-slate-200">&quot;web&quot;, &quot;mobile&quot;, &quot;desktop&quot;,</p>
                <p className="pl-10 text-slate-200">&quot;ai&quot;, &quot;games&quot;</p>
                <p className="pl-6">],</p>
                <p className="pl-6">
                  status: <span className="text-cyan-400">&quot;open_to_build&quot;</span>
                </p>
                <p>{'}'}</p>
                <p className="text-cyan-400">_</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
            <span className="h-px w-12 bg-slate-600" />
            Scroll para explorar
          </div>
        </motion.section>

        <motion.section id="work" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="py-20 md:py-28">
          <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>{t("01 — TRABALHO SELECIONADO", "01 — SELECTED WORK")}</SectionLabel>
              <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
                {t("Feito com", "Made with")} <span className="text-cyan-400">{t("intenção.", "intention.")}</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-300 md:text-base">
              {t(
                "Uma seleção de produtos e sistemas onde tecnologia, estratégia e detalhe se encontram.",
                "A selection of products and systems where technology, strategy, and detail meet."
              )}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="rounded-[28px] bg-slate-200 px-5 py-12 text-slate-900 md:px-10 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <SectionLabel>{t("02 — SOBRE MIM", "02 — ABOUT ME")}</SectionLabel>
              <h2 className="text-4xl font-black tracking-[-0.06em] text-slate-900 md:text-6xl">
                {t("Curioso por", "Curious by")} <span className="text-cyan-700">{t("natureza.", "nature.")}</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-2xl font-medium leading-tight tracking-[-0.04em] text-slate-800 md:text-3xl">
                {t(
                  "Mais de 5 anos a criar soluções para web, desktop, mobile e jogos cross-platform. Gosto de entender o problema antes de escrever a primeira linha de código.",
                  "Over 5 years creating solutions for web, desktop, mobile, and cross-platform games. I like to understand the problem before writing the first line of code."
                )}
              </p>
              <p className="text-base leading-7 text-slate-700">
                {t(
                  "Trabalho entre produto e engenharia — desenhando arquiteturas sólidas, interfaces intuitivas e sistemas que continuam a funcionar quando a escala chega.",
                  "I work between product and engineering — shaping solid architectures, intuitive interfaces, and systems that keep working as they scale."
                )}
              </p>

              <div className="flex items-center gap-2 border-t border-slate-300 pt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-700">
                <MapPin className="h-4 w-4 text-cyan-700" />
                Luanda, Angola <span className="text-cyan-700">•</span> Disponível globalmente
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="py-20 md:py-28">
          <div className="mb-8">
            <SectionLabel>03 — EXPERTISE</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
              As ferramentas <span className="text-cyan-400">do ofício.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {skills.map(([category, ...items]) => (
              <Card key={category} className="border border-white/10 bg-slate-900/80 p-5 shadow-none">
                <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-2 border-b border-white/5 pb-2 text-sm text-slate-300 last:border-0 last:pb-0">
                      <Code2 className="h-4 w-4 text-slate-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="py-20 md:py-28">
          <div className="mb-10">
            <SectionLabel>04 — EXPERIÊNCIA</SectionLabel>
            <h2 className="text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
              Onde deixei <span className="text-cyan-400">marca.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {experience.map((item) => (
              <div key={item.company} className="grid gap-4 border-t border-white/10 py-6 md:grid-cols-[200px_1fr] md:gap-8">
                <div className="flex items-start justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  <span>{item.period}</span>
                  <span className="mt-1 h-2.5 w-2.5 rounded-full border border-cyan-400 bg-transparent" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{item.company}</h3>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-400">{item.role}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 rounded-[28px] bg-cyan-400 px-5 py-12 text-slate-950 md:px-10 md:py-16">
          <SectionLabel>05 — CONTACTO</SectionLabel>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-6xl">Tem um projeto<br />em mente?</h2>
          <p className="mt-4 text-base text-slate-800">Vamos transformar a próxima ideia em algo real.</p>

          <a href="mailto:aurimardev@gmail.com" className="mt-8 inline-flex items-center gap-3 border-b border-slate-900/40 pb-2 text-xl font-medium tracking-[-0.04em] md:text-3xl">
            aurimardev@gmail.com
            <ArrowUpRight className="h-5 w-5" />
          </a>

          <div className="mt-10 flex flex-wrap gap-5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-900">
            <a href="https://github.com/AurimarL" target="_blank" className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/aurimarl" target="_blank" className="inline-flex items-center gap-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="tel:+351915791512" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> +351 915 791 512
            </a>
          </div>
        </motion.section>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 md:flex-row">
          <span>© 2026 Aurimar Lopes</span>
          <span>Full Stack Developer</span>
          <span className="inline-flex items-center gap-2">
            Built with curiosity <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          </span>
        </footer>
      </div>
    </main>
  );
}
