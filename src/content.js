const zh = {
    htmlLang: "zh-CN",
    documentTitle: "庄以煊的个人网站",
    profile: {
        name: "庄以煊",
        title: "关注机器人感知、多模态交互与智能系统集成，致力于让智能系统理解人、走进真实场景。",
        intro: "我是庄以煊，研究方向是机器人感知、多模态交互与智能系统集成，关注如何让机器人和智能系统在真实场景中理解人、并与人自然交互。",
        summary:
            "具备扎实的计算机、数学与机器学习基础，能够将算法理解、实验验证与工程实现结合到实际项目中。具备良好的自驱力、学习能力与团队协作意识，适应英文沟通与跨学科合作环境，并善用 AI 辅助工具提升信息检索、代码开发与实验迭代效率。",
        contacts: [
            { label: "邮箱", value: "zhuangyixuan46@163.com", href: "mailto:zhuangyixuan46@163.com" },
            { label: "手机", value: "+86 18359735953", href: "tel:+8618359735953" },
            { label: "微信", value: "zyx43ksdy" },
            { label: "网站", value: "legendzyx.github.io", href: "https://legendzyx.github.io/" },
            { label: "GitHub", value: "github.com/LeGendZyx", href: "https://github.com/LeGendZyx" },
        ],
    },
    educationList: [
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
    ],
    publicationList: [
        {
            title: "M³I：面向多人接待交互的多模态基准",
            role: "共同第二作者 · ICASSP 2027 在审",
            time: "2026.09",
            highlights: [
                "负责多机位参与者级头姿数据管线，结合 YOLOv8 / YuNet、solvePnP 与多视角三角化，提取逐帧 Head Pose 及三维头部位置，为多人轮次预测构建视觉时序特征。",
                "完成跨相机轨迹关联与稳定 Person ID 映射，并通过音频 / 运动互相关将头姿轨迹对齐至共享音频时间轴，统一不同设备的匿名参与者身份与时间基准。",
                "参与构建包含 23 组、8 小时 42 分钟连续交互及 6 类非脚本接待场景的 M³I 数据集与多人轮次预测基准。",
            ],
        },
    ],
    projectList: [
        {
            title: "面向 Furhat 的多人对话轮次预测系统",
            role: "多模态交互与机器学习",
            time: "2025.09 - 至今",
            highlights: [
                "面向 3-4 人服务对话，开发预测式轮次管理模型，提前判断每位参与者未来 2 秒的说话趋势，辅助机器人选择接话时机。",
                "整合多视角视频、头部朝向、领夹麦音频和人工对话标注，完成约 6.4 万帧真实数据的同步、清洗与质量检查。",
                "完成音频、视觉及融合方案的分组对比测试，发现头姿信息能改善整体帧级预测，但直接融合未带来稳定提升。",
            ],
        },
        {
            title: "TIAGo 服务机器人系统集成",
            role: "机器人系统集成",
            time: "2025.11 - 2026.04",
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
            title: "PaperAudit - 多智能体论文诚信筛查工具",
            role: "黑客松项目 · UK AI Agent Hackathon",
            time: "2026.07",
            highlights: [
                "开发开源多智能体论文诚信筛查工具参与 UK AI Agent Hackathon，面向科研论文中的统计异常、图像复用与引用完整性问题，辅助审稿人进行 evidence-based screening。",
                "实现 PDF 解析、GRIM 检验、p-value 重算、图像重复检测与 Crossref 引用检查，并通过 CLI 和 FastAPI Web UI 生成 Markdown / JSON 审核报告。",
                "设计 specialist AI reviewer 与 adjudicator agent 协同分析流程，输出带证据链的风险评估结果，用于支持人工复核。",
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
    ],
    projectShowcaseList: [
        {
            title: "TIAGo 服务机器人：病房辅助场景",
            time: "2025.11 - 2026.04",
            tech: "ROS 2, Nav2, Webots, Mediapipe",
            description:
                "面向化疗病房辅助场景的服务机器人，融合招手检测与语音触发的多模态感知，实现从用户请求到自主接近的闭环。",
            image: "projects/tiago.jpg",
        },
        {
            title: "Furhat 社交机器人：多人对话轮次预测",
            time: "2025.09 - 至今",
            tech: "Furhat SDK, 多模态轮次预测, Head Pose, Audio",
            description:
                "面向 3-4 人服务对话，结合多视角视频、头部朝向与音频开发预测式轮次管理模型，提前判断参与者的说话趋势，辅助机器人选择接话时机。",
            image: "projects/furhat.jpg",
        },
        {
            title: "数字皮影：手势驱动的实时交互",
            time: "2025.06 - 2026.06",
            tech: "Web, Mediapipe, 实时手部跟踪",
            description:
                "清华大学五天晴工作室实习项目，开发基于浏览器的实时交互系统，利用 Mediapipe 手部跟踪实现手势驱动的数字皮影控制。",
            image: "projects/shadow-puppet.jpg",
        },
        {
            title: "Unity 2D 模拟经营游戏《宠爱归路》",
            time: "2024.10 - 2025.02",
            tech: "Unity, C#, 游戏架构设计",
            description: "任主程完成任务系统、团队协作与核心功能，参加 TapTap Game Jam。",
            image: "projects/pet-way-home.jpg",
        },
    ],
    experienceList: [
        {
            title: "清华大学五天晴工作室",
            role: "前端开发工程师",
            time: "2025.06 - 2026.06",
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
            highlights: ["参与公司新产品开发计划。", "编制新产品相关的技术、工艺文件及检验标准。"],
        },
    ],
    skillGroups: [
        {
            title: "编程与工程",
            items: ["Java", "Python", "C++", "Git"],
        },
        {
            title: "机器人与 AI",
            items: ["ROS 2", "Mediapipe", "PyTorch"],
        },
        {
            title: "平台与工具",
            items: ["Linux / Ubuntu", "Webots", "Isaac Sim", "Unity"],
        },
    ],
    languages: ["中文：母语", "英文：雅思 7.5 分"],
    navItems: [
        { label: "首页", href: "#home" },
        { label: "概况", href: "#summary" },
        { label: "经历", href: "#experience" },
        { label: "项目", href: "#projects" },
        { label: "技能", href: "#skills" },
    ],
    ui: {
        heroGreeting: "你好，我是",
        heroName: "庄以煊",
        roles: ["机器人感知", "多模态交互", "智能系统集成"],
        scrollHint: "向下滚动",
        footer: "© 2026 庄以煊 · 用 React + Vite + Tailwind 构建",
        viewProjects: "查看项目",
        viewResume: "查看简历",
        profileTitle: "个人概况",
        contactTitle: "联系方式",
        resumeTitle: "教育、论文与工作经历",
        resumeNote: "以机器人感知、多模态交互与智能系统集成为主线，持续把研究理解落到工程实践里。",
        educationTitle: "教育经历",
        publicationTitle: "论文",
        workTitle: "工作与实习经历",
        projectsTitle: "项目经历",
        showcaseTitle: "项目展示 · Projects",
        stackTitle: "技术栈",
        languageTitle: "语言",
        techLabel: "技术栈：",
        switchLabel: "EN",
        switchTo: "Switch to English",
        menuLabel: "菜单",
    },
};

const en = {
    htmlLang: "en",
    documentTitle: "Yixuan Zhuang's Personal Website",
    profile: {
        name: "Yixuan Zhuang",
        title: "Focused on robot perception, multimodal interaction and intelligent system integration, building systems that understand people in real-world scenarios.",
        intro: "I'm Yixuan Zhuang. My research interests are robot perception, multimodal interaction and intelligent system integration, with a focus on enabling robots and intelligent systems to understand and naturally interact with people in real-world settings.",
        summary:
            "Solid foundation in computer science, mathematics and machine learning, with the ability to combine algorithmic understanding, experimental validation and engineering implementation in real projects. Self-driven, quick to learn and comfortable working in English-speaking, cross-disciplinary teams, with experience using AI-assisted tools to speed up information retrieval, coding and experiment iteration.",
        contacts: [
            { label: "Email", value: "zhuangyixuan46@163.com", href: "mailto:zhuangyixuan46@163.com" },
            { label: "Phone", value: "+86 18359735953", href: "tel:+8618359735953" },
            { label: "WeChat", value: "zyx43ksdy" },
            { label: "Website", value: "legendzyx.github.io", href: "https://legendzyx.github.io/" },
            { label: "GitHub", value: "github.com/LeGendZyx", href: "https://github.com/LeGendZyx" },
        ],
    },
    educationList: [
        {
            title: "King's College London, UK",
            subtitle: "Robotics | MSc",
            time: "2025.09 - 2026.09",
        },
        {
            title: "University of Twente, Netherlands",
            subtitle: "Computer Science | BSc",
            time: "2019.09 - 2024.09",
        },
    ],
    publicationList: [
        {
            title: "M³I: A Multimodal Benchmark for Multi-Party Reception Interaction",
            role: "Co-second author · ICASSP 2027 under review",
            time: "2026.09",
            highlights: [
                "Developed the multi-camera, participant-level head-pose data pipeline, combining YOLOv8 / YuNet, solvePnP and multi-view triangulation to extract frame-level head pose and 3D head positions for visual turn-taking features.",
                "Built cross-camera trajectory association and stable Person ID mapping, then aligned head-pose tracks to a shared audio timeline through audio / motion cross-correlation to unify anonymous participant identities and timing across devices.",
                "Contributed to the M³I dataset and multi-party turn-taking benchmark, comprising 23 groups, 8 hours 42 minutes of continuous interaction and six unscripted reception scenarios.",
            ],
        },
    ],
    projectList: [
        {
            title: "Predictive Multi-Party Turn-Taking for Furhat",
            role: "Multimodal Interaction & Machine Learning",
            time: "2025.09 - Present",
            highlights: [
                "Developed a predictive turn-management model for 3-4 person service conversations, forecasting each participant's speaking tendency two seconds ahead to help the robot choose when to respond.",
                "Integrated multi-view video, head orientation, lapel-microphone audio and manual dialogue annotations, synchronizing, cleaning and quality-checking approximately 64,000 frames of real interaction data.",
                "Compared audio-only, visual-only and multimodal variants, finding that head-pose features improved overall frame-level prediction while direct fusion did not deliver consistent gains.",
            ],
        },
        {
            title: "TIAGo Service Robot System Integration",
            role: "Robot System Integration",
            time: "2025.11 - 2026.04",
            highlights: [
                "Contributed to an assistive robot system based on TIAGo, building the Webots simulation environment and integrating the pipeline from perception to navigation execution.",
                "Built a human-robot interaction flow for a chemotherapy-ward assistance scenario on top of ROS 2, Nav2 and service-task logic, closing the loop from user request recognition to autonomous approach.",
                "Fused multimodal perception from Mediapipe hand-wave detection and voice triggers, passing target poses to the navigation module so the robot can approach users and run preset responses.",
            ],
        },
        {
            title: "Industrial Action Recognition on the HRI30 Dataset",
            role: "Machine Learning Research",
            time: "2025.09 - 2025.12",
            highlights: [
                "Built an RGB video action recognition model with ResNet-18, BiLSTM and Attention for classifying 30 industrial action categories.",
                "Completed data preprocessing, augmentation, training and validation, reaching 95% validation accuracy under early stopping.",
            ],
        },
        {
            title: "PaperAudit - Multi-Agent Research Integrity Screening Tool",
            role: "Hackathon Project · UK AI Agent Hackathon",
            time: "2026.07",
            highlights: [
                "Developed an open-source multi-agent tool for screening scientific papers for research-integrity anomalies, focusing on statistical errors, image reuse and citation integrity.",
                "Implemented PDF ingestion, GRIM tests, p-value recomputation, image-duplication detection and Crossref checks, with CLI and FastAPI web interfaces for generating Markdown / JSON audit reports.",
                "Designed specialist AI reviewer and adjudicator agents to produce evidence-linked risk assessments for human review.",
            ],
        },
        {
            title: "Machine Learning for Social Touch Classification",
            role: "Research Project",
            time: "2024.05 - 2024.07",
            highlights: [
                "Collected and analyzed touch sensor data, surveying time-series machine learning and affective interaction methods for social touch recognition.",
                "Implemented and compared LSTM, random forest and other models in TensorFlow, delivering the experiment code, result analysis and a written paper.",
            ],
        },
        {
            title: "Web Application for Pipeline Monitoring Device Management",
            role: "Full-Stack Development",
            time: "2024.02 - 2024.05",
            highlights: [
                "Designed and developed a web application for Rosen (Germany) to visualize pipeline deployments and tag devices.",
                "Built the frontend with SCSS, React and HTML5, and designed the backend database and APIs with MongoDB and Node.js.",
                "Tested frontend and backend functionality with Selenium, Supertest and Jest, delivering a complete, working device management system.",
            ],
        },
        {
            title: "2D Management Sim Game \"The Way Home for Pets\"",
            role: "Lead Programmer",
            time: "2024.10 - 2025.02",
            highlights: [
                "Led the programming team to build a 2D management simulation game in Unity and entered the TapTap 2024 Game Jam.",
                "Coordinated with designers and artists to split development tasks, and built the game backend and quest system.",
            ],
        },
    ],
    projectShowcaseList: [
        {
            title: "TIAGo Service Robot: Ward Assistance",
            time: "2025.11 - 2026.04",
            tech: "ROS 2, Nav2, Webots, Mediapipe",
            description:
                "A service robot for chemotherapy-ward assistance, fusing hand-wave detection and voice triggers to close the loop from user request to autonomous approach.",
            image: "projects/tiago.jpg",
        },
        {
            title: "Furhat Social Robot: Multi-Party Turn-Taking",
            time: "2025.09 - Present",
            tech: "Furhat SDK, Multimodal Turn-Taking, Head Pose, Audio",
            description:
                "A predictive turn-management model for 3-4 person service conversations, combining multi-view video, head orientation and audio to forecast speaking tendencies and help the robot choose when to respond.",
            image: "projects/furhat.jpg",
        },
        {
            title: "Digital Shadow Puppetry: Gesture-Driven Interaction",
            time: "2025.06 - 2026.06",
            tech: "Web, Mediapipe, Real-Time Hand Tracking",
            description:
                "Internship project at Wutianqing Studio, Tsinghua University: a browser-based real-time interactive system using Mediapipe hand tracking for gesture-driven digital shadow-puppet control.",
            image: "projects/shadow-puppet.jpg",
        },
        {
            title: "Unity 2D Management Sim \"The Way Home for Pets\"",
            time: "2024.10 - 2025.02",
            tech: "Unity, C#, Game Architecture",
            description:
                "Served as lead programmer for the quest system, team coordination and core features; entered the TapTap Game Jam.",
            image: "projects/pet-way-home.jpg",
        },
    ],
    experienceList: [
        {
            title: "Wutianqing Studio, Tsinghua University",
            role: "Frontend Developer",
            time: "2025.06 - 2026.06",
            highlights: [
                "Developed a browser-based real-time interactive system using Mediapipe hand tracking for gesture-driven digital shadow puppetry.",
            ],
        },
        {
            title: "China Southern Airlines Logistics Co., Ltd.",
            role: "IT Intern",
            time: "2022.02 - 2022.07",
            highlights: [
                "Managed the company server room and maintained network equipment including routers, switches and firewalls.",
                "Helped the IT team launch an internal WeChat mini program for company workflows.",
            ],
        },
        {
            title: "Guangdong Yida Electronic Technology Co., Ltd.",
            role: "Software Engineer Intern",
            time: "2021.09 - 2022.01",
            highlights: [
                "Contributed to the company's new product development program.",
                "Drafted technical and process documentation and inspection standards for new products.",
            ],
        },
    ],
    skillGroups: [
        {
            title: "Programming & Engineering",
            items: ["Java", "Python", "C++", "Git"],
        },
        {
            title: "Robotics & AI",
            items: ["ROS 2", "Mediapipe", "PyTorch"],
        },
        {
            title: "Platforms & Tools",
            items: ["Linux / Ubuntu", "Webots", "Isaac Sim", "Unity"],
        },
    ],
    languages: ["Chinese: Native", "English: IELTS 7.5"],
    navItems: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#summary" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
    ],
    ui: {
        heroGreeting: "Hi, I'm",
        heroName: "Yixuan Zhuang",
        roles: ["Robot Perception", "Multimodal Interaction", "Intelligent Systems"],
        scrollHint: "Scroll Down",
        footer: "© 2026 Yixuan Zhuang · Built with React + Vite + Tailwind",
        viewProjects: "View Projects",
        viewResume: "View Resume",
        profileTitle: "Profile",
        contactTitle: "Contact",
        resumeTitle: "Education, Publications & Work Experience",
        resumeNote:
            "Centered on robot perception, multimodal interaction and intelligent system integration, turning research understanding into engineering practice.",
        educationTitle: "Education",
        publicationTitle: "Publications",
        workTitle: "Work & Internships",
        projectsTitle: "Projects",
        showcaseTitle: "Project Showcase",
        stackTitle: "Tech Stack",
        languageTitle: "Languages",
        techLabel: "Tech: ",
        switchLabel: "中",
        switchTo: "切换到中文",
        menuLabel: "Menu",
    },
};

export const content = { zh, en };
