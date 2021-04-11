import React from "react";
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import { Skill } from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои скиллы</h2>
                <div className={style.skills}>
                    <Skill title={"HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"CSS"}
                           description={"Ipsum laborum laudantium molestiae? Autem beatae blanditiis delectus est ex molestiae nam numquam quibusdam vero voluptates"}/>
                    <Skill title={"HTML"} description={"Adipisci eum incidunt porro tempore vitae."}/>
                </div>
            </div>
        </div>
    );
}