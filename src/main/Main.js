import React from 'react';
import style from './Main.module.scss';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';
import Particles from 'react-tsparticles';

export const Main = () => {
    return (
        <div id={'main'} className={style.mainBlock}>
            <Particles
                className={style.particles}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 3,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }}
            />
            <div className={style.container}>
                <Fade left>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <h1>I am <span>Maxim Sholonik</span></h1>
                        <ReactTypingEffect
                            text={['Frontend developer']}
                        />
                    </div>
                </Fade>
                <Fade right>
                    <Tilt className="Tilt" options={{max: 15}}>
                        <div className={style.photo}>
                            <div className={style.image}></div>
                        </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
};