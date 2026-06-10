const zh = {
    htmlLang: "zh-CN",
    documentTitle: "庄以煊的个人网站",
    profile: {
        name: "庄以煊",
        title: "关注具身智能、多模态交互与 AI 算法，致力于让智能系统理解人、走进真实场景。",
        intro: "我是庄以煊，研究方向是具身智能、多模态交互与 AI 算法，关注如何让机器人和智能系统在真实场景中理解人、并与人自然交互。",
        summary:
            "具备扎实的计算机、数学与机器学习基础，能够将算法理解、实验验证与工程实现结合到实际项目中。适应英文沟通与跨学科协作环境，并善用 AI 辅助工具提升信息检索、代码开发与实验迭代效率。",
        contacts: [
            { label: "邮箱", value: "zhuangyixuan46@163.com", href: "mailto:zhuangyixuan46@163.com" },
            { label: "手机", value: "+86 18359735953", href: "tel:+8618359735953" },
            { label: "微信", value: "zyx43ksdy" },
            { label: "网站", value: "legendzyx.github.io", href: "https://legendzyx.github.io/" },
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
    projectList: [
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
    ],
    projectShowcaseList: [
        {
            title: "TIAGo 服务机器人：病房辅助场景",
            time: "2025.11 - 至今",
            tech: "ROS 2, Nav2, Webots, Mediapipe",
            description:
                "面向化疗病房辅助场景的服务机器人，融合招手检测与语音触发的多模态感知，实现从用户请求到自主接近的闭环。",
            image: "projects/tiago.jpg",
        },
        {
            title: "Unity 2D 模拟经营游戏《宠爱归路》",
            time: "2024.10 - 至今",
            tech: "Unity, C#, 游戏架构设计",
            description: "任主程完成任务系统、团队协作与核心功能，参加 TapTap Game Jam。",
            image: "projects/pet-way-home.jpg",
        },
    ],
    experienceList: [
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
            highlights: ["参与公司新产品开发计划。", "编制新产品相关的技术、工艺文件及检验标准。"],
        },
    ],
    skillGroups: [
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
        roles: ["具身智能", "多模态交互", "AI 算法"],
        scrollHint: "向下滚动",
        footer: "© 2026 庄以煊 · 用 React + Vite + Tailwind 构建",
        viewProjects: "查看项目",
        viewResume: "查看简历",
        profileTitle: "个人概况",
        contactTitle: "联系方式",
        resumeTitle: "教育与工作经历",
        resumeNote: "以具身智能、多模态交互与 AI 算法为主线，持续把研究理解落到工程实践里。",
        educationTitle: "教育经历",
        workTitle: "工作与实习经历",
        projectsTitle: "项目经历",
        showcaseTitle: "项目展示 · Projects",
        stackTitle: "技术栈",
        languageTitle: "语言",
        techLabel: "技术栈：",
        switchLabel: "EN",
        switchTo: "Switch to English",
    },
};

const en = {
    htmlLang: "en",
    documentTitle: "Yixuan Zhuang's Personal Website",
    profile: {
        name: "Yixuan Zhuang",
        title: "Focused on embodied AI, multimodal interaction and AI algorithms — building intelligent systems that understand people in real-world scenarios.",
        intro: "I'm Yixuan Zhuang. My research interests are embodied AI, multimodal interaction and AI algorithms, with a focus on enabling robots and intelligent systems to understand and naturally interact with people in real-world settings.",
        summary:
            "Solid foundation in computer science, mathematics and machine learning, with the ability to combine algorithmic understanding, experimental validation and engineering implementation in real projects. Comfortable working in English-speaking, cross-disciplinary teams, and skilled at using AI-assisted tools to speed up information retrieval, coding and experiment iteration.",
        contacts: [
            { label: "Email", value: "zhuangyixuan46@163.com", href: "mailto:zhuangyixuan46@163.com" },
            { label: "Phone", value: "+86 18359735953", href: "tel:+8618359735953" },
            { label: "WeChat", value: "zyx43ksdy" },
            { label: "Website", value: "legendzyx.github.io", href: "https://legendzyx.github.io/" },
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
    projectList: [
        {
            title: "Furhat Social Robot Dialogue System",
            role: "Robot Interaction Development",
            time: "2025.09 - Present",
            highlights: [
                "Built Furhat's interaction flow for multi-party conversation scenarios, focusing on turn-taking, response timing and user experience.",
                "Modeled interaction around multimodal cues such as speaking state, gaze direction and conversational timing to make the robot more natural in group conversations.",
                "Rebuilt the dialogue data pipeline from RGBD video and audio data to support downstream turn-taking prediction and machine learning modeling.",
            ],
        },
        {
            title: "TIAGo Service Robot System Integration",
            role: "Robot System Integration",
            time: "2025.11 - Present",
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
            time: "2025.11 - Present",
            tech: "ROS 2, Nav2, Webots, Mediapipe",
            description:
                "A service robot for chemotherapy-ward assistance, fusing hand-wave detection and voice triggers to close the loop from user request to autonomous approach.",
            image: "projects/tiago.jpg",
        },
        {
            title: "Unity 2D Management Sim \"The Way Home for Pets\"",
            time: "2024.10 - Present",
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
            time: "2025.06 - Present",
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
            items: ["Java", "Python", "C++", "JavaScript", "Git"],
        },
        {
            title: "Robotics & AI",
            items: ["ROS 2", "Mediapipe", "TensorFlow", "PyTorch"],
        },
        {
            title: "Platforms & Tools",
            items: ["Linux / Ubuntu", "Unity", "React", "Node.js"],
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
        roles: ["Embodied AI", "Multimodal Interaction", "AI Algorithms"],
        scrollHint: "Scroll Down",
        footer: "© 2026 Yixuan Zhuang · Built with React + Vite + Tailwind",
        viewProjects: "View Projects",
        viewResume: "View Resume",
        profileTitle: "Profile",
        contactTitle: "Contact",
        resumeTitle: "Education & Work Experience",
        resumeNote:
            "Centered on embodied AI, multimodal interaction and AI algorithms, turning research understanding into engineering practice.",
        educationTitle: "Education",
        workTitle: "Work & Internships",
        projectsTitle: "Projects",
        showcaseTitle: "Project Showcase",
        stackTitle: "Tech Stack",
        languageTitle: "Languages",
        techLabel: "Tech: ",
        switchLabel: "中",
        switchTo: "切换到中文",
    },
};

export const content = { zh, en };
