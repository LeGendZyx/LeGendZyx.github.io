import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particleOptions = {
    background: {
        color: {
            value: "transparent",
        },
    },
    detectRetina: true,
    fpsLimit: 60,
    fullScreen: {
        enable: false,
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "bubble",
            },
            resize: {
                enable: true,
            },
        },
        modes: {
            bubble: {
                distance: 140,
                duration: 2,
                opacity: 0.8,
                size: 3,
            },
        },
    },
    particles: {
        color: {
            value: ["#ffffff", "#9ec5ff", "#b7a9ff", "#7fe2ff"],
        },
        links: {
            enable: false,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "out",
            },
            random: true,
            speed: 0.18,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1000,
            },
            value: 46,
        },
        opacity: {
            value: {
                min: 0.08,
                max: 0.4,
            },
            animation: {
                enable: true,
                speed: 0.5,
                sync: false,
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                min: 0.6,
                max: 2,
            },
        },
    },
};

const ParticlesBackground = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setReady(true);
        });
    }, []);

    if (!ready) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
            <Particles id="tsparticles" className="h-full w-full" options={particleOptions} />
        </div>
    );
};

export default ParticlesBackground;
