import { useEffect, useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import { content } from "./content";
import "./App.css";

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
            <div className="fixed inset-0 z-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />

            <header className="sticky top-0 z-30 border-b border-white/10 bg-[#08111f]/85 backdrop-blur">
                <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
                    <a href="#home" className="text-sm font-semibold tracking-[0.24em] text-cyan-200">
                        LeGendZ
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
                            className="flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3.5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/20"
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
                        <Panel>
                            <SectionHeading eyebrow="Profile" title={t.ui.profileTitle} />
                            <p className="mt-5 text-base leading-8 text-slate-300">{t.profile.summary}</p>
                        </Panel>
                        <Panel>
                            <SectionHeading eyebrow="Contact" title={t.ui.contactTitle} />
                            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                {t.profile.contacts.map((contact) => (
                                    <ContactItem key={contact.label} {...contact} />
                                ))}
                            </div>
                        </Panel>
                    </div>
                </section>

                <section id="experience" className="scroll-mt-24 py-12">
                    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <SectionHeading eyebrow="Resume" title={t.ui.resumeTitle} />
                            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">{t.ui.resumeNote}</p>
                        </div>
                        <div className="space-y-5">
                            <Timeline title={t.ui.educationTitle} items={t.educationList} />
                            <Timeline title={t.ui.workTitle} items={t.experienceList} />
                        </div>
                    </div>
                </section>

                <section id="projects" className="scroll-mt-24 py-12">
                    <SectionHeading eyebrow="Projects" title={t.ui.projectsTitle} />
                    <div className="mt-7 grid gap-5">
                        {t.projectList.map((project) => (
                            <ProjectCard key={`${project.title}-${project.time}`} {...project} />
                        ))}
                    </div>

                    <div className="mt-10">
                        <h3 className="text-xl font-semibold text-slate-100">{t.ui.showcaseTitle}</h3>
                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                            {t.projectShowcaseList.map((project) => (
                                <ShowcaseCard
                                    key={`${project.title}-${project.time}`}
                                    techLabel={t.ui.techLabel}
                                    {...project}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="skills" className="scroll-mt-24 py-12">
                    <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
                        <Panel>
                            <SectionHeading eyebrow="Stack" title={t.ui.stackTitle} />
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
                        <Panel>
                            <SectionHeading eyebrow="Language" title={t.ui.languageTitle} />
                            <div className="mt-6 flex flex-wrap gap-2">
                                {t.languages.map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </div>
                        </Panel>
                    </div>
                </section>
            </main>
        </div>
    );
}

const Hero = ({ t }) => (
    <section id="home" className="grid min-h-[calc(100vh-76px)] scroll-mt-24 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-amber-200">{t.profile.label}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight text-white sm:text-7xl">
                {t.ui.heroHeading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
                <a
                    href="#projects"
                    className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Resume</p>
            <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">{t.profile.name}</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{t.profile.title}</p>
            <div className="mt-7 grid gap-3">
                {t.profile.contacts.map((contact) => (
                    <ContactItem key={contact.label} {...contact} compact />
                ))}
            </div>
        </Panel>
    </section>
);

const SectionHeading = ({ eyebrow, title }) => (
    <div>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </div>
);

const Panel = ({ children, className = "" }) => (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-7 ${className}`}>
        {children}
    </div>
);

const ContactItem = ({ label, value, href, compact = false }) => {
    const content = (
        <div className={`rounded-xl border border-white/10 bg-black/15 px-4 ${compact ? "py-3" : "py-4"}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">{label}</p>
            <p className="mt-1 break-all text-sm text-slate-200">{value}</p>
        </div>
    );

    if (!href) {
        return content;
    }

    return (
        <a
            href={href}
            className="block transition hover:-translate-y-0.5 hover:border-cyan-200"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
            {content}
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
    <article className="border-l border-cyan-200/30 pl-5">
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

const ShowcaseCard = ({ title, time, tech, description, techLabel }) => (
    <article className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{time}</span>
        </div>
        <p className="mt-4 text-sm font-medium text-amber-100">{techLabel}{tech}</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
);

const Badge = ({ children }) => (
    <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-sm text-cyan-50">
        {children}
    </span>
);

export default App;
