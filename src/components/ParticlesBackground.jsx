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
                mode: "repulse",
            },
            resize: {
                enable: true,
            },
        },
        modes: {
            repulse: {
                distance: 110,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: ["#67e8f9", "#fbbf24", "#f8fafc"],
        },
        links: {
            color: "#67e8f9",
            distance: 145,
            enable: true,
            opacity: 0.16,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 0.45,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 900,
            },
            value: 70,
        },
        opacity: {
            value: {
                min: 0.12,
                max: 0.45,
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                min: 1,
                max: 3,
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
        <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
            <Particles id="tsparticles" className="h-full w-full" options={particleOptions} />
        </div>
    );
};

export default ParticlesBackground;
