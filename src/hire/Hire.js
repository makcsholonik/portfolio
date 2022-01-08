import React from "react";
import style from './Hire.module.css';
import styleContainer from './../common/styles/Container.module.css';
import { Title } from "../common/components/title/Title";



export const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <Title title={"I am available for Freelancer"}/>
                <div className={style.button}>Нанять меня</div>
            </div>
        </div>
    );
}
