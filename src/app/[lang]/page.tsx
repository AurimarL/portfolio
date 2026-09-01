import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Locale } from "@/i18n.config";

const projects = [
  { title: "CYBER0", type: "Plataforma institucional", description: "Presença digital redesenhada de raiz, com UI/UX de alto impacto, performance e arquitetura preparada para escalar.", tags: ["Next.js", "TypeScript", "UI/UX"], href: "https://cyber0.vercel.app", featured: true },
  { title: "CyberZ AI", type: "Produtos de inteligência artificial", description: "Desenvolvimento principal do projeto autónomo de IA da CYBER0 — da arquitetura de software à criação de novos produtos.", tags: ["AI", "Python", "Architecture"], href: "#contact", featured: true },
  { title: "Prosefa", type: "Sistema estatal", description: "Emissão, rastreamento e controlo de selos fiscais para produtos como tabacos e bebidas, com foco em segurança e conformidade.", tags: ["Full Stack", "Security", "Performance"], href: "#experience", featured: false },
  { title: "Yunit", type: "Simulador de incentivos", description: "Aplicação construída de raiz para simular incentivos, desenvolvida com Laravel e Vue.", tags: ["Laravel", "Vue", "Product"], href: "#experience", featured: false },
  { title: "Sheelty Mobile", type: "Gestão de folhas de cálculo", description: "Aplicação mobile para gerir planilhas, ligando uma experiência React Native a uma API Laravel.", tags: ["React Native", "Laravel", "Mobile"], href: "#experience", featured: false },
];

const skills = [
  ["Frontend", "TypeScript", "React", "Next.js", "Vue", "HTML / CSS"],
  ["Backend", "Node.js", "Python", "Laravel", "APIs REST", "Arquitetura"],
  ["AI & Data", "Artificial Intelligence", "AI Products", "Automação", "Data flows"],
  ["Outros", "React Native", "Unreal Engine", "DevOps", "Git", "UI/UX"],
];

const experience = [
  { period: "05.2026 — presente", company: "CYBER0", role: "Developer", text: "Liderança técnica e desenvolvimento de plataformas web modernas, soluções orientadas a IA e propostas corporativas estratégicas." },
  { period: "07.2025 — 10.2025", company: "Mirantes.io", role: "Full Stack Developer", text: "Contribuição no Prosefa, sistema estatal de selos fiscais, e desenvolvimento do módulo de vagas da plataforma de recrutamento." },
  { period: "03.2024 — 01.2025", company: "The CodingMachine", role: "Full Stack Developer", text: "Desenvolvimento e manutenção da Atlas Blue, gestão de tickets, deployment de features e colaboração direta com clientes." },
  { period: "06.2022 — 12.2022", company: "Sota & SLAC", role: "Frontend Developer", text: "Design e implementação da interface de utilizador para uma aplicação freelancer." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span />{children}</p>;
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <Link href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} className={`project-card ${project.featured ? "project-card-featured" : ""}`} style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}>
      <div className="project-top"><span className="project-index">0{index + 1}</span><ArrowUpRight aria-hidden="true" /></div>
      <div className="project-copy"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p></div>
      <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </Link>
  );
}

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const en = lang === "en";
  const t = (pt: string, english: string) => en ? english : pt;
  const cvHref = en ? "/cv-en-aurimar-lopes.pdf" : "/cv-pt-aurimar-lopes.pdf";

  return (
    <main>
      <nav className="site-nav"><Link href="#top" className="brand">AL<span>.</span></Link><div className="nav-links"><Link href="#work">{t("Trabalho", "Work")}</Link><Link href="#about">{t("Sobre", "About")}</Link><Link href="#contact">{t("Contacto", "Contact")}</Link><a href={cvHref} download>{t("CV", "Resume")}</a><Link href={en ? "/pt" : "/en"}>{en ? "PT" : "EN"}</Link></div><Link href="#contact" className="nav-cta">{t("Disponível para projetos", "Available for projects")} <MoveUpRight aria-hidden="true" /></Link><button className="mobile-menu" aria-label={t("Abrir menu", "Open menu")}><Menu aria-hidden="true" /></button></nav>

      <section id="top" className="hero section-shell"><div className="hero-grid"><div className="hero-copy"><p className="kicker reveal">LUANDA, ANGOLA <span>•</span> 2026</p><h1 className="reveal reveal-delay-1">{t("Construo produtos", "I build products")}<br /><em>{t("que importam.", "that matter.")}</em></h1><p className="hero-intro reveal reveal-delay-2">{t("Sou Aurimar Lopes, Full Stack Developer especializado em transformar ideias complexas em experiências digitais claras, robustas e escaláveis.", "I am Aurimar Lopes, a Full Stack Developer who turns complex ideas into clear, robust, and scalable digital experiences.")}</p><div className="hero-actions reveal reveal-delay-3"><Link href="#work" className="button button-primary">{t("Ver trabalho", "View work")} <ArrowUpRight aria-hidden="true" /></Link><a href={cvHref} download className="text-link">{t("Baixar CV", "Download resume")} <span>↓</span></a></div></div><div className="hero-terminal reveal reveal-delay-2"><div className="terminal-bar"><span /><span /><span /><p>aurimar@portfolio ~</p></div><div className="terminal-body"><p><i>const</i> developer = &#123;</p><p className="indent">name: <b>&quot;Aurimar Lopes&quot;</b>,</p><p className="indent">focus: <b>&quot;full-stack&quot;</b>,</p><p className="indent">craft: [</p><p className="indent2">&quot;web&quot;, &quot;mobile&quot;, &quot;desktop&quot;,</p><p className="indent2">&quot;ai&quot;, &quot;games&quot;</p><p className="indent">],</p><p className="indent">status: <strong>&quot;open_to_build&quot;</strong></p><p>&#125;</p><p className="terminal-cursor">_</p></div></div></div><div className="scroll-note"><span />SCROLL PARA EXPLORAR</div></section>

      <section id="work" className="section-shell work-section"><div className="section-heading"><div><SectionLabel>{t("01 — TRABALHO SELECIONADO", "01 — SELECTED WORK")}</SectionLabel><h2>{t("Feito com", "Made with")}<br /><em>{t("intenção.", "intention.")}</em></h2></div><p>{t("Uma seleção de produtos e sistemas onde tecnologia, estratégia e detalhe se encontram.", "A selection of products and systems where technology, strategy, and detail meet.")}</p></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section>

      <section id="about" className="about-section"><div className="section-shell about-grid"><div><SectionLabel>{t("02 — SOBRE MIM", "02 — ABOUT ME")}</SectionLabel><h2>{t("Curioso por", "Curious by")}<br /><em>{t("natureza.", "nature.")}</em></h2></div><div className="about-copy"><p className="large-copy">{t("Mais de 5 anos a criar soluções para web, desktop, mobile e jogos cross-platform. Gosto de entender o problema antes de escrever a primeira linha de código.", "Over 5 years creating solutions for web, desktop, mobile, and cross-platform games. I like to understand the problem before writing the first line of code.")}</p><p>{t("Trabalho entre produto e engenharia — desenhando arquiteturas sólidas, interfaces intuitivas e sistemas que continuam a funcionar quando a escala chega.", "I work between product and engineering — shaping solid architectures, intuitive interfaces, and systems that keep working as they scale.")}</p><div className="location"><MapPin aria-hidden="true" /> Luanda, Angola <span>•</span> Disponível globalmente</div></div></div></section>

      <section className="section-shell skills-section"><div className="section-heading"><div><SectionLabel>03 — EXPERTISE</SectionLabel><h2>As ferramentas<br /><em>do ofício.</em></h2></div></div><div className="skills-grid">{skills.map(([category, ...items]) => <div className="skill-group" key={category}><h3>{category}</h3>{items.map((item) => <p key={item}><Code2 aria-hidden="true" />{item}</p>)}</div>)}</div></section>

      <section id="experience" className="section-shell experience-section"><div className="section-heading"><div><SectionLabel>04 — EXPERIÊNCIA</SectionLabel><h2>Onde deixei<br /><em>marca.</em></h2></div></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><div className="timeline-meta"><span>{item.period}</span><span className="timeline-dot" /></div><div><h3>{item.company}</h3><p className="role">{item.role}</p><p>{item.text}</p></div></article>)}</div></section>

      <section id="contact" className="contact-section"><div className="section-shell contact-inner"><SectionLabel>05 — CONTACTO</SectionLabel><h2>Tem um projeto<br />em mente?</h2><p>Vamos transformar a próxima ideia em algo real.</p><a className="contact-email" href="mailto:aurimardev@gmail.com">aurimardev@gmail.com <ArrowUpRight aria-hidden="true" /></a><div className="contact-links"><a href="https://github.com/AurimarL" target="_blank"><Github aria-hidden="true" /> GitHub</a><a href="https://www.linkedin.com/in/aurimarl" target="_blank"><Linkedin aria-hidden="true" /> LinkedIn</a><a href="tel:+351915791512"><Mail aria-hidden="true" /> +351 915 791 512</a></div></div></section>
      <footer className="site-footer section-shell"><span>© 2026 Aurimar Lopes</span><span>Full Stack Developer</span><span>Built with curiosity <Sparkles aria-hidden="true" /></span></footer>
    </main>
  );
}
