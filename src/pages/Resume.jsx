import React from "react";

const profile = {
    name: "庄以煊",
    title: "关注机器人感知、多模态交互与智能系统集成，也持续参与 Web 与实时交互系统开发。",
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

const Resume = () => {
    return (
        <div className="relative z-10 px-4 py-10 sm:px-10">
            <div className="mx-auto max-w-5xl rounded-2xl border border-blue-500 bg-[#112240]/85 p-6 shadow-xl sm:p-8">
                <header className="mb-10 border-b border-blue-500/40 pb-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-300">Resume</p>
                            <h1 className="text-4xl font-extrabold text-blue-100 sm:text-6xl">{profile.name}</h1>
                            <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-200 sm:text-lg">
                                {profile.title}
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {profile.contacts.map((item) => (
                                <ContactCard key={item.label} {...item} />
                            ))}
                        </div>
                    </div>
                </header>

                <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr]">
                    <div className="space-y-8">
                        <Section title="教育经历">
                            {educationList.map((item) => (
                                <EntryCard key={item.title} {...item} />
                            ))}
                        </Section>

                        <Section title="项目经历">
                            {projectList.map((item) => (
                                <EntryCard key={`${item.title}-${item.time}`} {...item} />
                            ))}
                        </Section>

                        <Section title="工作与实习经历">
                            {experienceList.map((item) => (
                                <EntryCard key={`${item.title}-${item.time}`} {...item} />
                            ))}
                        </Section>
                    </div>

                    <aside className="space-y-8">
                        <Section title="个人概况">
                            <InfoCard>
                                <p className="text-sm leading-7 text-blue-100 sm:text-base">{profile.summary}</p>
                            </InfoCard>
                        </Section>

                        <Section title="技术栈">
                            <div className="space-y-4">
                                {skillGroups.map((group) => (
                                    <InfoCard key={group.title}>
                                        <p className="text-sm uppercase tracking-[0.2em] text-blue-300">{group.title}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {group.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-sm text-blue-100"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </InfoCard>
                                ))}
                            </div>
                        </Section>

                        <Section title="语言">
                            <InfoCard>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-sm text-blue-100"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </InfoCard>
                        </Section>
                    </aside>
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <section>
        <h2 className="mb-4 text-2xl font-semibold text-blue-300 sm:text-3xl">{title}</h2>
        <div className="space-y-4">{children}</div>
    </section>
);

const InfoCard = ({ children }) => (
    <div className="rounded-xl border border-blue-500/30 bg-[#0f1d3c]/60 p-5">{children}</div>
);

const ContactCard = ({ label, value, href }) => {
    const isExternal = href?.startsWith("http");
    const card = (
        <InfoCard>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{label}</p>
            <p className="mt-2 break-all text-sm text-blue-100 sm:text-base">{value}</p>
        </InfoCard>
    );

    if (!href) {
        return card;
    }

    return (
        <a href={href} {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}>
            {card}
        </a>
    );
};

const EntryCard = ({ title, subtitle, role, time, highlights }) => (
    <InfoCard>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <h3 className="text-lg font-semibold text-blue-100 sm:text-xl">{title}</h3>
                {subtitle ? <p className="mt-2 text-blue-300">{subtitle}</p> : null}
                {role ? <p className="mt-2 text-sm uppercase tracking-[0.2em] text-blue-300">{role}</p> : null}
            </div>
            <span className="rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-sm text-blue-100">
                {time}
            </span>
        </div>

        {highlights?.length ? (
            <ul className="mt-4 space-y-3 text-sm leading-7 text-blue-100 sm:text-base">
                {highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        ) : null}
    </InfoCard>
);

export default Resume;
