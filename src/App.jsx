import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
// import Projects from "./pages/Projects";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
    return (
        <Router>
            <ParticlesBackground />
            <nav className="fixed h-16 top-0 left-0 right-0 bg-blue-900 bg-opacity-100 text-white p-4 z-50 flex justify-center space-x-8 shadow-md">
                <Link to="/" className="hover:text-blue-300">主页</Link>
                <Link to="/resume" className="hover:text-blue-300">简历</Link>
                {/*<Link to="/projects" className="hover:text-blue-300">项目</Link>*/}
            </nav>
            <div className="pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    {/*<Route path="/projects" element={<Projects />} />*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
