import React from "react";
import style from './Distant.module.css';
import styleContainer from './../common/styles/Container.module.css';



export const Distant = () => {
    return (
        <div className={style.distantBlock}>
            <div className={`${styleContainer.container} ${style.distantContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удалённой работы</h2>
                <div className={style.button}>Нанять меня</div>
            </div>
        </div>
    );
}
