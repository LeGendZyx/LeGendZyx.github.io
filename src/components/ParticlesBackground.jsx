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
                mode: "connect",
            },
            resize: {
                enable: true,
            },
        },
        modes: {
            connect: {
                distance: 90,
                links: {
                    opacity: 0.35,
                },
                radius: 125,
            },
        },
    },
    particles: {
        color: {
            value: ["#44f1ff", "#ff3f52", "#b8ff6a", "#e9f4f5"],
        },
        links: {
            color: "#44f1ff",
            distance: 138,
            enable: true,
            opacity: 0.1,
            width: 0.7,
        },
        move: {
            direction: "right",
            enable: true,
            outModes: {
                default: "out",
            },
            random: false,
            speed: 0.32,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 1100,
            },
            value: 52,
        },
        opacity: {
            value: {
                min: 0.1,
                max: 0.35,
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                min: 1,
                max: 2.2,
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
