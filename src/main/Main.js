import React from 'react';
import style from './Main.module.scss';
import Fade from 'react-reveal/Fade';

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <Fade left>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <h1>I am <span>Maxim Sholonik</span></h1>
                        <p>Front-end developer</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className={style.photo}>
                        <div className={style.image}></div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};