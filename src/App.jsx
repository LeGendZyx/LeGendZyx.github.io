import { useEffect, useRef, useState } from "react";
import {
    ArrowDown,
    ArrowUpRight,
    Braces,
    BriefcaseBusiness,
    Cpu,
    Globe,
    GraduationCap,
    Languages,
    Layers,
    Mail,
    MapPin,
    Menu,
    MessageSquareText,
    Phone,
    Sparkles,
    X,
} from "lucide-react";
import ParticlesBackground from "./components/ParticlesBackground";
import { content } from "./content";
import "./App.css";

const useTypewriter = (words, { typeSpeed = 78, deleteSpeed = 38, pause = 1700 } = {}) => {
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
            setIndex((current) => (current + 1) % words.length);
        } else {
            timeout = setTimeout(
                () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
                deleting ? deleteSpeed : typeSpeed,
            );
        }

        return () => clearTimeout(timeout);
    }, [deleteSpeed, deleting, index, pause, text, typeSpeed, words]);

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
            { threshold: 0.1 },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
};

function App() {
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem("lang");
        return saved === "en" || saved === "zh" ? saved : "zh";
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const t = content[lang];

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.lang = t.htmlLang;
        document.title = t.documentTitle;
    }, [lang, t]);

    useEffect(() => {
        const closeMenu = (event) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", closeMenu);
        return () => window.removeEventListener("keydown", closeMenu);
    }, []);

    return (
        <div className="app-shell min-h-screen text-[#f3f5fa]">
            <div className="aurora pointer-events-none fixed inset-0 z-0" aria-hidden="true">
                <span className="aurora-blob blob-1" />
                <span className="aurora-blob blob-2" />
                <span className="aurora-blob blob-3" />
            </div>
            <ParticlesBackground />

            <header className="site-header">
                <nav className="nav-glass">
                    <a href="#home" className="brand-mark" aria-label="LeGendZ home">
                        <span className="brand-icon">
                            <img src={`${import.meta.env.BASE_URL}icon.png`} alt="" className="h-7 w-7" />
                        </span>
                        <span className="hidden sm:flex flex-col leading-tight">
                            <span className="brand-name">{t.profile.name}</span>
                            <span className="brand-sub">{t.ui.roles[0]}</span>
                        </span>
                    </a>

                    <div className="nav-links hidden lg:flex">
                        {t.navItems.map((item) => (
                            <a key={item.href} href={item.href} className="nav-link">
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="lang-switch" aria-label={t.ui.switchTo}>
                            <Languages size={14} aria-hidden="true" />
                            <button type="button" className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")}>中</button>
                            <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMenuOpen((current) => !current)}
                            aria-label={t.ui.menuLabel}
                            aria-expanded={menuOpen}
                            className="icon-button lg:hidden"
                        >
                            {menuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </nav>

                {menuOpen ? (
                    <div className="mobile-menu lg:hidden">
                        {t.navItems.map((item) => (
                            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                                {item.label}
                                <ArrowUpRight size={15} />
                            </a>
                        ))}
                    </div>
                ) : null}
            </header>

            <main className="relative z-10 mx-auto max-w-[1180px] px-5 pb-28 sm:px-8">
                <Hero t={t} />

                <section id="summary" className="scroll-mt-28 py-16 sm:py-24">
                    <Reveal>
                        <SectionHeading number="01" eyebrow="PROFILE" title={t.ui.profileTitle} />
                    </Reveal>
                    <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                        <Reveal>
                            <GlassCard className="h-full">
                                <div className="card-label"><Sparkles size={15} /> {t.ui.profileTitle}</div>
                                <p className="profile-copy">{t.profile.summary}</p>
                                <div className="role-chips mt-8">
                                    {t.ui.roles.map((role) => (
                                        <span key={role}>{role}</span>
                                    ))}
                                </div>
                            </GlassCard>
                        </Reveal>
                        <Reveal delay={100}>
                            <GlassCard className="h-full">
                                <div className="card-label"><MapPin size={15} /> {t.ui.contactTitle}</div>
                                <div className="contact-list mt-5">
                                    {t.profile.contacts.map((contact, index) => (
                                        <ContactItem key={contact.label} {...contact} index={index} />
                                    ))}
                                </div>
                            </GlassCard>
                        </Reveal>
                    </div>
                </section>

                <section id="experience" className="scroll-mt-28 py-16 sm:py-24">
                    <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
                        <Reveal>
                            <div className="lg:sticky lg:top-28">
                                <SectionHeading number="02" eyebrow="EXPERIENCE" title={t.ui.resumeTitle} />
                                <p className="mt-6 max-w-sm text-[15px] leading-7 text-[var(--text-3)]">{t.ui.resumeNote}</p>
                            </div>
                        </Reveal>
                        <div className="grid gap-5">
                            <Reveal>
                                <TimelineBlock icon={<GraduationCap size={16} />} title={t.ui.educationTitle} items={t.educationList} />
                            </Reveal>
                            <Reveal delay={120}>
                                <TimelineBlock icon={<BriefcaseBusiness size={16} />} title={t.ui.workTitle} items={t.experienceList} />
                            </Reveal>
                        </div>
                    </div>
                </section>

                <section id="projects" className="scroll-mt-28 py-16 sm:py-24">
                    <Reveal>
                        <SectionHeading number="03" eyebrow="PROJECTS" title={t.ui.projectsTitle} />
                    </Reveal>
                    <div className="mt-10 grid gap-4">
                        {t.projectList.map((project, index) => (
                            <Reveal key={`${project.title}-${project.time}`} delay={(index % 2) * 70}>
                                <ProjectRecord index={index} {...project} />
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="mt-16">
                        <div className="subsection-title">
                            <h3>{t.ui.showcaseTitle}</h3>
                            <span />
                        </div>
                    </Reveal>
                    <div className="mt-7 grid gap-5 md:grid-cols-2">
                        {t.projectShowcaseList.map((project, index) => (
                            <Reveal key={`${project.title}-${project.time}`} delay={(index % 2) * 100}>
                                <ShowcaseCard index={index} techLabel={t.ui.techLabel} {...project} />
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section id="skills" className="scroll-mt-28 py-16 sm:py-24">
                    <Reveal>
                        <SectionHeading number="04" eyebrow="SKILLS" title={t.ui.stackTitle} />
                    </Reveal>
                    <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
                        <Reveal>
                            <GlassCard className="h-full">
                                <div className="card-label"><Layers size={15} /> {t.ui.stackTitle}</div>
                                <div className="skill-matrix mt-6">
                                    {t.skillGroups.map((group) => (
                                        <div key={group.title} className="skill-group">
                                            <h3>{group.title}</h3>
                                            <div className="skill-tags">
                                                {group.items.map((item) => (
                                                    <span key={item}>{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </Reveal>
                        <Reveal delay={100}>
                            <GlassCard className="h-full">
                                <div className="card-label"><Globe size={15} /> {t.ui.languageTitle}</div>
                                <div className="language-list mt-6">
                                    {t.languages.map((item, index) => (
                                        <div key={item} className="language-row">
                                            <strong>{item}</strong>
                                            <i><b style={{ width: index === 0 ? "100%" : "78%" }} /></i>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </Reveal>
                    </div>
                </section>
            </main>

            <footer className="site-footer relative z-10">
                <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-2 px-5 py-9 text-[13px] sm:flex-row sm:px-8">
                    <span>{t.ui.footer}</span>
                    <span className="footer-status"><i /> {t.profile.name}</span>
                </div>
            </footer>
        </div>
    );
}

const Hero = ({ t }) => {
    const typed = useTypewriter(t.ui.roles);

    return (
        <section id="home" className="hero grid min-h-[calc(100vh-96px)] scroll-mt-28 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
                <div className="hero-badge"><span className="dot" /> {t.ui.roles[0]} · {t.ui.roles[1]}</div>
                <p className="hero-greeting mt-8">{t.ui.heroGreeting}</p>
                <h1 className="hero-name mt-3">{t.ui.heroName}</h1>
                <div className="hero-typing mt-6">
                    <Sparkles size={17} />
                    <strong>{typed}</strong>
                    <span className="caret" aria-hidden="true" />
                </div>
                <p className="hero-intro mt-7 max-w-xl">{t.profile.intro}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                    <a href="#projects" className="btn btn-primary">
                        <Braces size={17} /> {t.ui.viewProjects} <ArrowUpRight size={16} />
                    </a>
                    <a href="#summary" className="btn btn-ghost">
                        <BriefcaseBusiness size={17} /> {t.ui.viewResume}
                    </a>
                </div>
                <div className="hero-stats mt-12">
                    {t.ui.roles.map((role) => (
                        <div key={role}>
                            <b>{role}</b>
                        </div>
                    ))}
                </div>
            </div>

            <GlassOrb name={t.profile.name} />

            <a href="#summary" className="scroll-hint" aria-label={t.ui.scrollHint}>
                <span>{t.ui.scrollHint}</span><ArrowDown size={15} />
            </a>
        </section>
    );
};

const GlassOrb = ({ name }) => (
    <div className="orb-stage" aria-label={`${name} mark`}>
        <div className="orb-glow" />
        <div className="orb-ring ring-1" />
        <div className="orb-ring ring-2" />
        <div className="orb-ring ring-3" />
        <div className="orb-orbit orbit-1"><span /></div>
        <div className="orb-orbit orbit-2"><span /></div>
        <div className="orb-core">
            <img src={`${import.meta.env.BASE_URL}icon.png`} alt="LeGendZ logo" />
        </div>
    </div>
);

const SectionHeading = ({ number, eyebrow, title }) => (
    <div className="section-heading">
        <span className="section-eyebrow">{number} — {eyebrow}</span>
        <h2>{title}</h2>
    </div>
);

const GlassCard = ({ children, className = "" }) => (
    <div className={`glass-card ${className}`}>{children}</div>
);

const ContactItem = ({ label, value, href, index }) => {
    let Icon = MessageSquareText;
    if (href?.startsWith("mailto:")) Icon = Mail;
    if (href?.startsWith("tel:")) Icon = Phone;
    if (href?.startsWith("http")) Icon = Globe;

    const inner = (
        <>
            <span className="contact-icon"><Icon size={17} aria-hidden="true" /></span>
            <span className="contact-text"><b>{label}</b><em>{value}</em></span>
            {href ? <ArrowUpRight size={16} className="contact-arrow" /> : null}
        </>
    );

    if (!href) return <div className="contact-row">{inner}</div>;

    return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="contact-row">
            {inner}
        </a>
    );
};

const TimelineBlock = ({ icon, title, items }) => (
    <GlassCard>
        <div className="card-label">{icon} {title}</div>
        <div className="timeline mt-6">
            {items.map((item, index) => (
                <TimelineItem key={`${item.title}-${item.time}`} index={index} last={index === items.length - 1} {...item} />
            ))}
        </div>
    </GlassCard>
);

const TimelineItem = ({ title, subtitle, role, time, highlights, last }) => (
    <article className={`timeline-item ${last ? "is-last" : ""}`}>
        <div className="timeline-dot" />
        <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h4>{title}</h4>
                    {subtitle ? <p className="muted">{subtitle}</p> : null}
                    {role ? <p className="role">{role}</p> : null}
                </div>
                <time>{time}</time>
            </div>
            {highlights?.length ? (
                <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            ) : null}
        </div>
    </article>
);

const ProjectRecord = ({ title, role, time, highlights, index }) => (
    <article className="project-card">
        <div className="project-head">
            <div>
                <span className="project-no">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{role}</p>
            </div>
            <time>{time}</time>
        </div>
        <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
);

const ShowcaseCard = ({ title, time, tech, description, techLabel, image }) => (
    <article className="showcase-card group">
        <div className="showcase-media">
            <img src={`${import.meta.env.BASE_URL}${image}`} alt={title} loading="lazy" />
        </div>
        <div className="showcase-body">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h4>{title}</h4><time>{time}</time>
            </div>
            <p className="tech-line"><Cpu size={14} /> {techLabel}{tech}</p>
            <p className="description">{description}</p>
        </div>
    </article>
);

export default App;
