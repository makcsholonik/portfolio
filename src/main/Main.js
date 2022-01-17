import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import maxImg from './../assets/image/maxim.png'

export const Main = () => {
    const maxim = {
        backgroundImage: `url(${maxImg})`
    };
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am <span>Maxim Sholonik</span></h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo} style={maxim}></div>
            </div>
        </div>
    );
}
