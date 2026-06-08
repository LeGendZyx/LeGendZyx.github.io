import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const options = {
        autoPlay: true,
        background: {
            color: { value: "#043564" },
            image: "url('https://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
            position: "0 50%",
            repeat: "no-repeat",
            size: "60%",
            opacity: 1
        },
        backgroundMask: {
            composite: "destination-out",
            cover: { opacity: 1, color: { value: "" } },
            enable: false
        },
        clear: true,
        fullScreen: {
            enable: true,
            zIndex: 0
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
            detectsOn: "window",
            events: {
                onClick: { enable: false, mode: [] },
                onHover: {
                    enable: true,
                    mode: "repulse",
                    parallax: { enable: false, force: 2, smooth: 10 }
                },
                resize: { enable: true, delay: 0.5 }
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    divs: {
                        distance: 100,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: "ease-out-quad",
                        selectors: []
                    }
                },
                trail: { delay: 1, pauseOnStop: false, quantity: 1 },
                attract: {
                    distance: 200,
                    duration: 0.4,
                    easing: "ease-out-quad",
                    factor: 1,
                    maxSpeed: 50,
                    speed: 1
                },
                connect: {
                    distance: 80,
                    links: { opacity: 0.5 },
                    radius: 60
                },
                grab: {
                    distance: 100,
                    links: {
                        blink: false,
                        consent: false,
                        opacity: 1
                    }
                }
            }
        },
        particles: {
            number: {
                density: { enable: false, width: 1920, height: 1080 },
                value: 150
            },
            color: { value: "#ffffff" },
            shape: {
                type: "star",
                options: { star: { sides: 5 } }
            },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            move: {
                enable: true,
                speed: 6,
                direction: "left",
                outModes: { default: "out" },
                straight: true
            },
            zIndex: { value: 0 }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        zLayers: 100
    };

    return (
        <Particles id="tsparticles" init={particlesInit} options={options} />
    );
};

export default ParticlesBackground;
