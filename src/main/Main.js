import React from 'react';
import style from './Main.module.scss';

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am <span>Maxim Sholonik</span></h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
            </div>
        </div>
    );
};