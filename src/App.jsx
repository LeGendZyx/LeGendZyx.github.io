import { useEffect, useRef, useState } from "react";
import {
    ArrowDown,
    ArrowUpRight,
    Braces,
    BriefcaseBusiness,
    Cpu,
    Globe2,
    Languages,
    Mail,
    Menu,
    MessageSquareText,
    Phone,
    Radio,
    Terminal,
    X,
    Zap,
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
        <div className="future-shell min-h-screen overflow-hidden text-[#e9f4f5]">
            <ParticlesBackground />
            <div className="system-grid pointer-events-none fixed inset-0 z-0" />
            <div className="scan-overlay pointer-events-none fixed inset-0 z-20" />

            <header className="system-header sticky top-0 z-40">
                <nav className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
                    <a href="#home" className="brand-mark" aria-label="LeGendZ home">
                        <span className="brand-icon-frame">
                            <img src={`${import.meta.env.BASE_URL}icon.png`} alt="" className="h-9 w-9" />
                        </span>
                        <span className="hidden sm:block">
                            <span className="block font-mono text-xs text-[#44f1ff]">LEGENDZ://PROFILE</span>
                            <span className="mt-1 block text-[10px] text-[#73808a]">NODE 0X7A · ONLINE</span>
                        </span>
                    </a>

                    <div className="hidden items-center lg:flex">
                        {t.navItems.map((item, index) => (
                            <a key={item.href} href={item.href} className="nav-coordinate">
                                <span>{String(index).padStart(2, "0")}</span>
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="language-switch" aria-label={t.ui.switchTo}>
                            <Languages size={15} aria-hidden="true" />
                            <button type="button" className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")}>中</button>
                            <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMenuOpen((current) => !current)}
                            aria-label={t.ui.menuLabel}
                            aria-expanded={menuOpen}
                            className="icon-command lg:hidden"
                        >
                            {menuOpen ? <X size={19} /> : <Menu size={19} />}
                        </button>
                    </div>
                </nav>

                {menuOpen ? (
                    <div className="mobile-console lg:hidden">
                        <div className="mx-auto grid max-w-[1240px] px-5 py-3 sm:px-8">
                            {t.navItems.map((item, index) => (
                                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                                    <span>{String(index).padStart(2, "0")}</span>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : null}
            </header>

            <main className="relative z-10 mx-auto max-w-[1240px] px-5 pb-24 sm:px-8">
                <Hero t={t} />

                <section id="summary" className="scroll-mt-24 py-16 sm:py-24">
                    <Reveal>
                        <SectionHeading number="01" eyebrow="PROFILE MATRIX" title={t.ui.profileTitle} />
                    </Reveal>
                    <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                        <Reveal>
                            <SystemFrame className="h-full">
                                <div className="frame-label"><Terminal size={14} /> BIOGRAPHIC DATA</div>
                                <p className="profile-copy">{t.profile.summary}</p>
                                <div className="data-ruler mt-8">
                                    {t.ui.roles.map((role, index) => (
                                        <span key={role}><b>0{index + 1}</b>{role}</span>
                                    ))}
                                </div>
                            </SystemFrame>
                        </Reveal>
                        <Reveal delay={100}>
                            <SystemFrame className="h-full">
                                <div className="frame-label"><Radio size={14} /> {t.ui.contactTitle}</div>
                                <div className="contact-terminal mt-5">
                                    {t.profile.contacts.map((contact, index) => (
                                        <ContactItem key={contact.label} {...contact} index={index} />
                                    ))}
                                </div>
                            </SystemFrame>
                        </Reveal>
                    </div>
                </section>

                <section id="experience" className="scroll-mt-24 py-16 sm:py-24">
                    <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
                        <Reveal>
                            <div className="section-sticky lg:sticky lg:top-28">
                                <SectionHeading number="02" eyebrow="CHRONOLOGY" title={t.ui.resumeTitle} />
                                <p className="mt-5 max-w-sm text-sm leading-7 text-[#8d9aa3]">{t.ui.resumeNote}</p>
                                <div className="signal-meter mt-8" aria-hidden="true">
                                    <span /><span /><span /><span /><span /><span />
                                </div>
                            </div>
                        </Reveal>
                        <div className="timeline-channel">
                            <Reveal><TimelineBlock code="EDU" title={t.ui.educationTitle} items={t.educationList} /></Reveal>
                            <Reveal delay={120}><TimelineBlock code="EXP" title={t.ui.workTitle} items={t.experienceList} /></Reveal>
                        </div>
                    </div>
                </section>

                <section id="projects" className="scroll-mt-24 py-16 sm:py-24">
                    <Reveal>
                        <SectionHeading number="03" eyebrow="MISSION ARCHIVE" title={t.ui.projectsTitle} />
                    </Reveal>
                    <div className="mt-8 grid gap-4">
                        {t.projectList.map((project, index) => (
                            <Reveal key={`${project.title}-${project.time}`} delay={(index % 2) * 70}>
                                <ProjectRecord index={index} {...project} />
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="mt-16">
                        <div className="subsystem-title">
                            <span>VISUAL RECORDS</span>
                            <h3>{t.ui.showcaseTitle}</h3>
                            <div className="subsystem-line" />
                        </div>
                    </Reveal>
                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                        {t.projectShowcaseList.map((project, index) => (
                            <Reveal key={`${project.title}-${project.time}`} delay={(index % 2) * 100}>
                                <ShowcaseCard index={index} techLabel={t.ui.techLabel} {...project} />
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section id="skills" className="scroll-mt-24 py-16 sm:py-24">
                    <Reveal>
                        <SectionHeading number="04" eyebrow="CAPABILITY ARRAY" title={t.ui.stackTitle} />
                    </Reveal>
                    <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
                        <Reveal>
                            <SystemFrame className="h-full">
                                <div className="skills-matrix">
                                    {t.skillGroups.map((group, groupIndex) => (
                                        <div key={group.title} className="skill-channel">
                                            <div className="skill-heading">
                                                <span>CH.{String(groupIndex + 1).padStart(2, "0")}</span>
                                                <h3>{group.title}</h3>
                                            </div>
                                            <div className="skill-tags">
                                                {group.items.map((item, itemIndex) => (
                                                    <span key={item}><i style={{ width: `${46 + itemIndex * 9}%` }} />{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SystemFrame>
                        </Reveal>
                        <Reveal delay={100}>
                            <SystemFrame className="h-full">
                                <div className="frame-label"><Globe2 size={14} /> {t.ui.languageTitle}</div>
                                <div className="language-array mt-6">
                                    {t.languages.map((item, index) => (
                                        <div key={item}>
                                            <span>0{index + 1}</span>
                                            <strong>{item}</strong>
                                            <i><b style={{ width: index === 0 ? "100%" : "75%" }} /></i>
                                        </div>
                                    ))}
                                </div>
                            </SystemFrame>
                        </Reveal>
                    </div>
                </section>
            </main>

            <footer className="system-footer relative z-10">
                <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 px-5 py-7 font-mono text-[11px] sm:flex-row sm:px-8">
                    <span>{t.ui.footer}</span>
                    <span className="text-[#b8ff6a]">SYSTEM STATUS · NOMINAL</span>
                </div>
            </footer>
        </div>
    );
}

const Hero = ({ t }) => {
    const typed = useTypewriter(t.ui.roles);

    return (
        <section id="home" className="hero-system grid min-h-[calc(100vh-72px)] scroll-mt-24 items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative z-10">
                <div className="hero-status"><Radio size={14} /> IDENTITY SIGNAL ACQUIRED <span>LIVE</span></div>
                <p className="hero-greeting mt-9">{t.ui.heroGreeting}</p>
                <h1 className="mt-2" aria-label={t.ui.heroName}>
                    <span className="hero-name" data-text={t.ui.heroName} aria-hidden="true">{t.ui.heroName}</span>
                </h1>
                <div className="command-line mt-7">
                    <Terminal size={17} />
                    <span className="command-prompt">focus:</span>
                    <strong>{typed}</strong>
                    <span className="typing-cursor" aria-hidden="true" />
                </div>
                <p className="mt-7 max-w-2xl text-base leading-8 text-[#9aa8af] sm:text-lg">{t.profile.intro}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                    <a href="#projects" className="future-command primary">
                        <Braces size={17} /> {t.ui.viewProjects} <ArrowUpRight size={16} />
                    </a>
                    <a href="#summary" className="future-command secondary">
                        <BriefcaseBusiness size={17} /> {t.ui.viewResume}
                    </a>
                </div>
                <div className="hero-readout mt-10">
                    <span><b>DOMAIN</b>{t.ui.roles[0]}</span>
                    <span><b>INTERFACE</b>{t.ui.roles[1]}</span>
                    <span><b>ENGINE</b>{t.ui.roles[2]}</span>
                </div>
            </div>

            <RadarStage name={t.profile.name} />

            <a href="#summary" className="scroll-transmit" aria-label={t.ui.scrollHint}>
                <span>{t.ui.scrollHint}</span><ArrowDown size={15} />
            </a>
        </section>
    );
};

const RadarStage = ({ name }) => (
    <div className="radar-stage" aria-label={`${name} digital identity mark`}>
        <div className="radar-coordinate top-left">AZ 034.22</div>
        <div className="radar-coordinate top-right">EL 078.04</div>
        <div className="radar-coordinate bottom-left">SIG 98.7%</div>
        <div className="radar-coordinate bottom-right">SYNC 01</div>
        <div className="radar-ring ring-one" />
        <div className="radar-ring ring-two" />
        <div className="radar-ring ring-three" />
        <div className="radar-sweep" />
        <div className="orbit orbit-one"><span /></div>
        <div className="orbit orbit-two"><span /></div>
        <div className="radar-cross horizontal" />
        <div className="radar-cross vertical" />
        <div className="radar-core">
            <img src={`${import.meta.env.BASE_URL}icon.png`} alt="LeGendZ logo" />
        </div>
        <div className="radar-lock"><Zap size={13} /> TARGET LOCKED</div>
    </div>
);

const SectionHeading = ({ number, eyebrow, title }) => (
    <div className="section-heading">
        <div className="section-index"><span>{number}</span><i /></div>
        <div>
            <p>{eyebrow}</p>
            <h2>{title}</h2>
        </div>
    </div>
);

const SystemFrame = ({ children, className = "" }) => (
    <div className={`hud-frame ${className}`}>
        <span className="corner corner-tl" /><span className="corner corner-tr" />
        <span className="corner corner-bl" /><span className="corner corner-br" />
        {children}
    </div>
);

const ContactItem = ({ label, value, href, index }) => {
    let Icon = MessageSquareText;
    if (href?.startsWith("mailto:")) Icon = Mail;
    if (href?.startsWith("tel:")) Icon = Phone;
    if (href?.startsWith("http")) Icon = Globe2;

    const inner = (
        <>
            <span className="contact-index">0{index + 1}</span>
            <Icon size={17} aria-hidden="true" />
            <span><b>{label}</b><em>{value}</em></span>
            {href ? <ArrowUpRight size={15} className="contact-arrow" /> : null}
        </>
    );

    if (!href) return <div className="contact-row">{inner}</div>;

    return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="contact-row">
            {inner}
        </a>
    );
};

const TimelineBlock = ({ code, title, items }) => (
    <SystemFrame>
        <div className="timeline-header"><span>{code}</span><h3>{title}</h3><i /></div>
        <div className="timeline-list">
            {items.map((item, index) => <TimelineItem key={`${item.title}-${item.time}`} index={index} {...item} />)}
        </div>
    </SystemFrame>
);

const TimelineItem = ({ title, subtitle, role, time, highlights, index }) => (
    <article className="timeline-entry">
        <div className="timeline-node"><span>{String(index + 1).padStart(2, "0")}</span></div>
        <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h4>{title}</h4>
                    {subtitle ? <p>{subtitle}</p> : null}
                    {role ? <p className="role-data">{role}</p> : null}
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
    <article className="project-record">
        <div className="project-id">
            <span>MISSION</span>
            <strong>{String(index + 1).padStart(2, "0")}</strong>
        </div>
        <div className="project-body">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div><h3>{title}</h3><p>{role}</p></div>
                <time>{time}</time>
            </div>
            <ul>{highlights.map((item, itemIndex) => <li key={item}><span>0{itemIndex + 1}</span>{item}</li>)}</ul>
        </div>
    </article>
);

const ShowcaseCard = ({ title, time, tech, description, techLabel, image, index }) => (
    <article className="visual-record group">
        <div className="visual-media">
            <img src={`${import.meta.env.BASE_URL}${image}`} alt={title} loading="lazy" />
            <span className="visual-id">IMG_{String(index + 1).padStart(2, "0")}</span>
            <span className="viewfinder top-left" /><span className="viewfinder top-right" />
            <span className="viewfinder bottom-left" /><span className="viewfinder bottom-right" />
        </div>
        <div className="visual-copy">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h4>{title}</h4><time>{time}</time>
            </div>
            <p className="tech-line"><Cpu size={14} /> {techLabel}{tech}</p>
            <p className="description">{description}</p>
        </div>
    </article>
);

export default App;
