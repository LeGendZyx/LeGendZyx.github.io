import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";

const profile = {
    name: "庄以煊",
    label: "LeGendZ",
    title: "关注机器人感知、多模态交互与智能系统集成，也持续参与 Web 与实时交互系统开发。",
    intro: "我是庄以煊（LeGendZ），目前关注机器人感知、多模态交互与智能系统集成，也持续进行 Web 与实时交互系统开发。",
    summary:
        "具备扎实的计算机、数学与机器学习基础，能够将算法理解、实验验证与工程实现结合到实际项目中。适应英文沟通与跨学科协作环境，并善用 AI 辅助工具提升信息检索、代码开发与实验迭代效率。",
    contacts: [
        { label: "邮箱", value: "zhuangyixuan46@163.com", href: "mailto:zhuangyixuan46@163.com" },
        { label: "手机", value: "+86 18359735953", href: "tel:+8618359735953" },
        { label: "微信", value: "zyx43ksdy" },
        { label: "网站", value: "legendz.vercel.com", href: "https://legendz.vercel.com" },
    ],
};

const educationList = [
    {
        title: "King's College London 伦敦国王学院，英国",
        subtitle: "机器人 | 硕士研究生",
        time: "2025.09 - 2026.09",
    },
    {
        title: "University of Twente 特文特大学，荷兰",
        subtitle: "计算机科学 | 本科",
        time: "2019.09 - 2024.09",
    },
];

const projectList = [
    {
        title: "Furhat 社交机器人对话系统",
        role: "机器人交互开发",
        time: "2025.09 - 至今",
        highlights: [
            "构建 Furhat 在多人对话场景中的交互流程，重点研究轮次切换、响应时机与用户体验。",
            "围绕说话状态、视线方向与会话时序等多模态线索进行交互建模，用于提升机器人在群体对话中的自然性。",
            "基于 RGBD 视频与音频数据重构对话数据流程，为后续 turn-taking 预测与机器学习建模提供数据支持。",
        ],
    },
    {
        title: "TIAGo 服务机器人系统集成",
        role: "机器人系统集成",
        time: "2025.11 - 至今",
        highlights: [
            "参与基于 TIAGo 的辅助机器人系统开发，负责 Webots 仿真环境构建，以及从感知到导航执行的系统集成。",
            "基于 ROS 2、Nav2 与服务场景任务逻辑，搭建面向化疗病房辅助场景的人机交互流程，实现从用户请求识别到自主接近的闭环。",
            "融合 Mediapipe 招手检测与语音触发的多模态感知结果，并将目标位姿传递至导航模块，支持机器人完成接近用户与后续预设响应。",
        ],
    },
    {
        title: "基于 HRI30 数据集的工业行为识别",
        role: "机器学习研究",
        time: "2025.09 - 2025.12",
        highlights: [
            "基于 ResNet-18、BiLSTM 与 Attention 构建 RGB 视频动作识别模型，用于 30 类工业行为分类。",
            "完成数据预处理、数据增强、模型训练与验证流程，并在 early stopping 条件下取得 95% 的验证准确率。",
        ],
    },
    {
        title: "基于机器学习的社交触摸分类研究",
        role: "研究项目",
        time: "2024.05 - 2024.07",
        highlights: [
            "采集并分析触摸传感器数据，围绕社交触摸识别任务调研时间序列机器学习与情感交互相关方法。",
            "使用 TensorFlow 实现并比较 LSTM、随机森林等模型在分类任务中的表现，完成实验代码、结果分析与论文撰写。",
        ],
    },
    {
        title: "用于管道监测设备管理的网页应用程序",
        role: "全栈开发",
        time: "2024.02 - 2024.05",
        highlights: [
            "为德国 Rosen 公司设计并开发网页应用，可视化管道部署及标记设备。",
            "使用 SCSS、React、HTML5 开发前端，使用 MongoDB、Node.js 设计后端数据库与 API。",
            "使用 Selenium、Supertest 与 Jest 测试前后端功能，最终交付完整可用的设备管理系统。",
        ],
    },
    {
        title: "2D 模拟经营游戏《宠爱归路》",
        role: "主程序",
        time: "2024.10 - 2025.02",
        highlights: [
            "带领程序团队基于 Unity 引擎开发 2D 模拟经营游戏，并参与 TapTap 2024 Game Jam。",
            "负责与策划、美术对接，协同拆分开发任务，并完成游戏后端与任务系统设计开发。",
        ],
    },
];

const projectShowcaseList = [
    {
        title: "网页应用：Rosen 管道可视化平台",
        time: "2024.02 - 2024.05",
        tech: "React, Node.js, MongoDB, SCSS, Selenium",
        description:
            "为德国 Rosen 公司开发的网页应用，用于可视化标记管道部署设备，支持完整的前后端交互和测试流程。",
    },
    {
        title: "Unity 2D 模拟经营游戏《宠爱归路》",
        time: "2024.10 - 至今",
        tech: "Unity, C#, 游戏架构设计",
        description:
            "任主程完成任务系统、团队协作与核心功能，参加 TapTap Game Jam。",
    },
    {
        title: "AI 跑酷游戏《岁月悬丝》",
        time: "2023.08",
        tech: "Unity, ML-Agents",
        description:
            "使用 AI 模拟玩家行为，48 小时完成的横版跑酷合作游戏。",
    },
    {
        title: "Ultrapark 停车系统",
        time: "2022.09 - 2022.11",
        tech: "Raspberry Pi, OpenCV, Python",
        description:
            "基于摄像头和字符识别的车牌检测系统，完成后端 API 设计。",
    },
];

const experienceList = [
    {
        title: "清华大学五天晴工作室",
        role: "前端开发工程师",
        time: "2025.06 - 至今",
        highlights: [
            "开发基于浏览器的实时交互系统，利用 Mediapipe 手部跟踪实现手势驱动的数字皮影控制。",
        ],
    },
    {
        title: "南方航空物流股份有限公司",
        role: "信息技术岗实习生",
        time: "2022.02 - 2022.07",
        highlights: [
            "负责公司机房管理，以及路由器、交换机、防火墙等网络设备的运维与维护。",
            "协助信息技术小组发布公司内部专用工作微信小程序。",
        ],
    },
    {
        title: "广东易达电子科技有限公司",
        role: "软件工程师实习生",
        time: "2021.09 - 2022.01",
        highlights: [
            "参与公司新产品开发计划。",
            "编制新产品相关的技术、工艺文件及检验标准。",
        ],
    },
];

const skillGroups = [
    {
        title: "编程与工程",
        items: ["Java", "Python", "C++", "JavaScript", "Git"],
    },
    {
        title: "机器人与 AI",
        items: ["ROS 2", "Mediapipe", "TensorFlow", "PyTorch"],
    },
    {
        title: "平台与工具",
        items: ["Linux / Ubuntu", "Unity", "React", "Node.js"],
    },
];

const languages = ["中文：母语", "英文：雅思 7.5 分"];

const navItems = [
    { label: "首页", href: "#home" },
    { label: "概况", href: "#summary" },
    { label: "经历", href: "#experience" },
    { label: "项目", href: "#projects" },
    { label: "技能", href: "#skills" },
];

function App() {
    return (
        <div className="min-h-screen overflow-hidden bg-[#08111f] text-slate-100">
            <ParticlesBackground />
            <div className="fixed inset-0 z-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />

            <header className="sticky top-0 z-30 border-b border-white/10 bg-[#08111f]/85 backdrop-blur">
                <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
                    <a href="#home" className="text-sm font-semibold tracking-[0.24em] text-cyan-200">
                        LeGendZ
                    </a>
                    <div className="flex gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.04] p-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>
            </header>

            <main className="relative z-10 mx-auto max-w-6xl px-5 pb-20 sm:px-8">
                <Hero />
                <section id="summary" className="scroll-mt-24 py-12">
                    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
                        <Panel>
                            <SectionHeading eyebrow="Profile" title="个人概况" />
                            <p className="mt-5 text-base leading-8 text-slate-300">{profile.summary}</p>
                        </Panel>
                        <Panel>
                            <SectionHeading eyebrow="Contact" title="联系方式" />
                            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                {profile.contacts.map((contact) => (
                                    <ContactItem key={contact.label} {...contact} />
                                ))}
                            </div>
                        </Panel>
                    </div>
                </section>

                <section id="experience" className="scroll-mt-24 py-12">
                    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <SectionHeading eyebrow="Resume" title="教育与工作经历" />
                            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                                以机器人、机器学习和实时交互系统为主线，持续把研究理解落到工程实践里。
                            </p>
                        </div>
                        <div className="space-y-5">
                            <Timeline title="教育经历" items={educationList} />
                            <Timeline title="工作与实习经历" items={experienceList} />
                        </div>
                    </div>
                </section>

                <section id="projects" className="scroll-mt-24 py-12">
                    <SectionHeading eyebrow="Projects" title="项目经历" />
                    <div className="mt-7 grid gap-5">
                        {projectList.map((project) => (
                            <ProjectCard key={`${project.title}-${project.time}`} {...project} />
                        ))}
                    </div>

                    <div className="mt-10">
                        <h3 className="text-xl font-semibold text-slate-100">项目展示 · Projects</h3>
                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                            {projectShowcaseList.map((project) => (
                                <ShowcaseCard key={`${project.title}-${project.time}`} {...project} />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="skills" className="scroll-mt-24 py-12">
                    <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
                        <Panel>
                            <SectionHeading eyebrow="Stack" title="技术栈" />
                            <div className="mt-6 grid gap-5 md:grid-cols-3">
                                {skillGroups.map((group) => (
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
                            <SectionHeading eyebrow="Language" title="语言" />
                            <div className="mt-6 flex flex-wrap gap-2">
                                {languages.map((item) => (
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

const Hero = () => (
    <section id="home" className="grid min-h-[calc(100vh-76px)] scroll-mt-24 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-amber-200">{profile.label}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight text-white sm:text-7xl">
                欢迎来到庄以煊的个人网站
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
                <a
                    href="#projects"
                    className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                    查看项目
                </a>
                <a
                    href="#summary"
                    className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-200/70 hover:bg-white/10"
                >
                    查看简历
                </a>
            </div>
        </div>

        <Panel className="lg:justify-self-end">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Resume</p>
            <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">{profile.name}</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{profile.title}</p>
            <div className="mt-7 grid gap-3">
                {profile.contacts.map((contact) => (
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

const ShowcaseCard = ({ title, time, tech, description }) => (
    <article className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{time}</span>
        </div>
        <p className="mt-4 text-sm font-medium text-amber-100">技术栈：{tech}</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
);

const Badge = ({ children }) => (
    <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-sm text-cyan-50">
        {children}
    </span>
);

export default App;
