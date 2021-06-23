import React from "react";
import style from './Distant.module.css';
import styleContainer from './../common/styles/Container.module.css';
import { Title } from "../common/components/title/Title";



export const Distant = () => {
    return (
        <div className={style.distantBlock}>
            <div className={`${styleContainer.container} ${style.distantContainer}`}>
                <Title title={"I am available for Freelancer"}/>
                <div className={style.button}>Нанять меня</div>
            </div>
        </div>
    );
}
