import React from "react";

const projects = [
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

const Projects = () => {
    return (
        <div className="min-h-screen bg-[#0a1128] text-blue-100 py-10 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-400 mb-10">项目展示 · Projects</h1>

                <div className="grid gap-6 sm:grid-cols-2">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-[#112240] p-6 rounded-xl border border-blue-500 shadow-md hover:shadow-blue-400 transition-all duration-300"
                        >
                            <h2 className="text-xl font-semibold text-blue-300">{project.title}</h2>
                            <p className="text-sm text-blue-400 mb-1">{project.time}</p>
                            <p className="text-sm italic text-blue-300 mb-2">技术栈：{project.tech}</p>
                            <p className="text-blue-100 text-sm">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
