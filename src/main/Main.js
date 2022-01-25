import React from 'react';
import style from './Main.module.scss';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <Fade left>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <h1>I am <span>Maxim Sholonik</span></h1>
                        <ReactTypingEffect
                            text={['Front-end developer']}
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