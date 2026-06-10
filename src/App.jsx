import { useEffect, useRef, useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import { content } from "./content";
import "./App.css";

const useTypewriter = (words, { typeSpeed = 90, deleteSpeed = 45, pause = 1800 } = {}) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        setIndex(0);
        setText("");
        setDeleting(false);
    }, [words]);

    useEffect(() => {
        const word = words[index % words.length];
        let timeout;

        if (!deleting && text === word) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === "") {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
        } else {
            timeout = setTimeout(
                () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
                deleting ? deleteSpeed : typeSpeed,
            );
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

    return text;
};

const Reveal = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${
                visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } ${className}`}
        >
            {children}
        </div>
    );
};

const AuroraBackground = () => (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aurora-blob absolute -left-24 -top-32 h-[420px] w-[420px] bg-cyan-400/20" />
        <div className="aurora-blob absolute -right-32 top-1/3 h-[480px] w-[480px] bg-violet-500/15" style={{ animationDelay: "-7s" }} />
        <div className="aurora-blob absolute bottom-0 left-1/3 h-[380px] w-[380px] bg-amber-300/10" style={{ animationDelay: "-13s" }} />
    </div>
);

function App() {
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem("lang");
        return saved === "en" || saved === "zh" ? saved : "zh";
    });
    const t = content[lang];

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.lang = t.htmlLang;
        document.title = t.documentTitle;
    }, [lang, t]);

    const toggleLang = () => setLang((prev) => (prev === "zh" ? "en" : "zh"));

    return (
        <div className="min-h-screen overflow-hidden bg-[#08111f] text-slate-100">
            <ParticlesBackground />
            <AuroraBackground />
            <div className="fixed inset-0 z-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />

            <header className="sticky top-0 z-30 border-b border-white/10 bg-[#08111f]/85 backdrop-blur">
                <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
                    <a
                        href="#home"
                        className="shrink-0 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(248,113,113,0.45)]"
                    >
                        <img src={`${import.meta.env.BASE_URL}icon.png`} alt="LeGendZ" className="h-9 w-9" />
                    </a>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.04] p-1">
                            {t.navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={toggleLang}
                            title={t.ui.switchTo}
                            aria-label={t.ui.switchTo}
                            className="flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3.5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/20 hover:shadow-[0_0_18px_rgba(103,232,249,0.25)]"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
                            </svg>
                            {t.ui.switchLabel}
                        </button>
                    </div>
                </nav>
            </header>

            <main className="relative z-10 mx-auto max-w-6xl px-5 pb-20 sm:px-8">
                <Hero t={t} />

                <section id="summary" className="scroll-mt-24 py-12">
                    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
                        <Reveal>
                            <Panel className="h-full">
                                <SectionHeading number="01" eyebrow="Profile" title={t.ui.profileTitle} />
                                <p className="mt-5 text-base leading-8 text-slate-300">{t.profile.summary}</p>
                            </Panel>
                        </Reveal>
                        <Reveal delay={120}>
                            <Panel className="h-full">
                                <SectionHeading number="02" eyebrow="Contact" title={t.ui.contactTitle} />
                                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                    {t.profile.contacts.map((contact) => (
                                        <ContactItem key={contact.label} {...contact} />
                                    ))}
                                </div>
                            </Panel>
                        </Reveal>
                    </div>
                </section>

                <section id="experience" className="scroll-mt-24 py-12">
                    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                        <Reveal>
                            <SectionHeading number="03" eyebrow="Resume" title={t.ui.resumeTitle} />
                            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">{t.ui.resumeNote}</p>
                        </Reveal>
                        <div className="space-y-5">
                            <Reveal>
                                <Timeline title={t.ui.educationTitle} items={t.educationList} />
                            </Reveal>
                            <Reveal delay={120}>
                                <Timeline title={t.ui.workTitle} items={t.experienceList} />
                            </Reveal>
                        </div>
                    </div>
                </section>

                <section id="projects" className="scroll-mt-24 py-12">
                    <Reveal>
                        <SectionHeading number="04" eyebrow="Projects" title={t.ui.projectsTitle} />
                    </Reveal>
                    <div className="mt-7 grid gap-5">
                        {t.projectList.map((project, index) => (
                            <Reveal key={`${project.title}-${project.time}`} delay={(index % 2) * 100}>
                                <ProjectCard {...project} />
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-10">
                        <Reveal>
                            <h3 className="text-xl font-semibold text-slate-100">{t.ui.showcaseTitle}</h3>
                        </Reveal>
                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                            {t.projectShowcaseList.map((project, index) => (
                                <Reveal key={`${project.title}-${project.time}`} delay={(index % 2) * 120}>
                                    <ShowcaseCard techLabel={t.ui.techLabel} {...project} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="skills" className="scroll-mt-24 py-12">
                    <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
                        <Reveal>
                            <Panel className="h-full">
                                <SectionHeading number="05" eyebrow="Stack" title={t.ui.stackTitle} />
                                <div className="mt-6 grid gap-5 md:grid-cols-3">
                                    {t.skillGroups.map((group) => (
                                        <div key={group.title}>
                                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                                                {group.title}
                                            </h3>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {group.items.map((item) => (
                                                    <Badge key={item}>{item}</Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Panel>
                        </Reveal>
                        <Reveal delay={120}>
                            <Panel className="h-full">
                                <SectionHeading number="06" eyebrow="Language" title={t.ui.languageTitle} />
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {t.languages.map((item) => (
                                        <Badge key={item}>{item}</Badge>
                                    ))}
                                </div>
                            </Panel>
                        </Reveal>
                    </div>
                </section>
            </main>

            <footer className="relative z-10 border-t border-white/10 py-8 text-center font-mono text-xs tracking-wide text-slate-500">
                {t.ui.footer}
            </footer>
        </div>
    );
}

const Hero = ({ t }) => {
    const typed = useTypewriter(t.ui.roles);

    return (
        <section
            id="home"
            className="relative grid min-h-[calc(100vh-76px)] scroll-mt-24 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]"
        >
            <div>
                <h1 className="text-5xl font-semibold leading-tight text-white sm:text-7xl">
                    {t.ui.heroGreeting}
                    <br />
                    <span className="gradient-text">{t.ui.heroName}</span>
                </h1>
                <div className="mt-6 flex items-center font-mono text-lg text-cyan-200 sm:text-xl">
                    <span className="mr-3 select-none text-slate-500">&gt;</span>
                    <span>{typed}</span>
                    <span className="typing-cursor" aria-hidden="true" />
                </div>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.profile.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#projects"
                        className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(103,232,249,0.35)] transition hover:bg-cyan-200 hover:shadow-[0_0_40px_rgba(103,232,249,0.55)]"
                    >
                        {t.ui.viewProjects}
                    </a>
                    <a
                        href="#summary"
                        className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-200/70 hover:bg-white/10"
                    >
                        {t.ui.viewResume}
                    </a>
                </div>
            </div>

            <Panel className="lg:justify-self-end">
                <p className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Resume</p>
                <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">{t.profile.name}</h2>
                <p className="mt-5 text-base leading-8 text-slate-300">{t.profile.title}</p>
                <div className="mt-7 grid gap-3">
                    {t.profile.contacts.map((contact) => (
                        <ContactItem key={contact.label} {...contact} compact />
                    ))}
                </div>
            </Panel>

            <a
                href="#summary"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-cyan-200 lg:flex"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{t.ui.scrollHint}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 animate-bounce" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </a>
        </section>
    );
};

const SectionHeading = ({ number, eyebrow, title }) => (
    <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">
            {number ? <span className="mr-2 text-amber-200">{number}</span> : null}
            {"// "}
            {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <span className="mt-4 block h-px w-16 bg-gradient-to-r from-cyan-300/80 to-transparent" />
    </div>
);

const Panel = ({ children, className = "" }) => {
    const ref = useRef(null);

    const handleMouseMove = (event) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        node.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={`spotlight-card rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur transition-colors duration-300 hover:border-cyan-200/30 sm:p-7 ${className}`}
        >
            {children}
        </div>
    );
};

const ContactItem = ({ label, value, href, compact = false }) => {
    const inner = (
        <div className={`rounded-xl border border-white/10 bg-black/15 px-4 transition hover:border-cyan-200/40 ${compact ? "py-3" : "py-4"}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">{label}</p>
            <p className="mt-1 break-all text-sm text-slate-200">{value}</p>
        </div>
    );

    if (!href) {
        return inner;
    }

    return (
        <a
            href={href}
            className="block transition hover:-translate-y-0.5"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
            {inner}
        </a>
    );
};

const Timeline = ({ title, items }) => (
    <Panel>
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
        <div className="mt-5 space-y-4">
            {items.map((item) => (
                <TimelineItem key={`${item.title}-${item.time}`} {...item} />
            ))}
        </div>
    </Panel>
);

const TimelineItem = ({ title, subtitle, role, time, highlights }) => (
    <article className="relative border-l border-cyan-200/30 pl-5">
        <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <h4 className="font-semibold text-white">{title}</h4>
                {subtitle ? <p className="mt-1 text-sm text-slate-300">{subtitle}</p> : null}
                {role ? <p className="mt-1 text-sm text-cyan-200">{role}</p> : null}
            </div>
            <span className="w-fit rounded-full border border-amber-200/25 bg-amber-200/10 px-3 py-1 text-xs text-amber-100">
                {time}
            </span>
        </div>
        {highlights?.length ? (
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                {highlights.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        ) : null}
    </article>
);

const ProjectCard = ({ title, role, time, highlights }) => (
    <Panel>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm font-medium text-cyan-200">{role}</p>
            </div>
            <span className="w-fit rounded-full border border-amber-200/25 bg-amber-200/10 px-3 py-1 text-xs text-amber-100">
                {time}
            </span>
        </div>
        <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
            {highlights.map((item) => (
                <li key={item} className="rounded-xl bg-black/15 p-4">
                    {item}
                </li>
            ))}
        </ul>
    </Panel>
);

const ShowcaseCard = ({ title, time, tech, description, techLabel, image }) => (
    <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-[0_8px_32px_rgba(103,232,249,0.12)]">
        <div className="relative aspect-video overflow-hidden border-b border-white/10">
            {image ? (
                <img
                    src={`${import.meta.env.BASE_URL}${image}`}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-400/15 via-violet-500/10 to-amber-300/10">
                    <span className="select-none font-mono text-4xl text-slate-500/70">&lt;/&gt;</span>
                </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08111f]/45 to-transparent" />
        </div>
        <div className="p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h4 className="text-lg font-semibold text-white">{title}</h4>
                <span className="w-fit shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{time}</span>
            </div>
            <p className="mt-4 font-mono text-sm font-medium text-amber-100">
                {techLabel}
                {tech}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
        </div>
    </article>
);

const Badge = ({ children }) => (
    <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-sm text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-200/20">
        {children}
    </span>
);

export default App;
