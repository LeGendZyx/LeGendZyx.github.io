import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        fetch('https://legendz.up.railway.app/api/visit', {
            method: 'POST'
        });
    }, []);

    return (
        <div className="h-[calc(100vh-80px)] bg-transparent text-blue-100 flex justify-center px-4 relative z-10 pt-12">
            <div className="text-center max-w-xl">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4">
                    欢迎来到庄以煊的个人网站
                </h1>
                <p className="text-blue-200 mb-8 text-base sm:text-lg">
                    我是庄以煊（LeGendZ），目前关注机器人感知、多模态交互与智能系统集成，也持续进行 Web 与实时交互系统开发。
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/resume"
                        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition"
                    >
                        查看简历
                    </Link>
                    {/*<Link*/}
                    {/*    to="/projects"*/}
                    {/*    className="px-6 py-2 bg-transparent border border-blue-500 hover:bg-blue-500 rounded-full text-blue-400 hover:text-white font-semibold transition"*/}
                    {/*>*/}
                    {/*    查看项目*/}
                    {/*</Link>*/}
                </div>
            </div>
        </div>
    );
};

export default Home;
