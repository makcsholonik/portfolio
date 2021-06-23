import React from "react";
import styleContainer from './../common/styles/Container.module.css';
import style from './../projects/Projects.module.css';
import { Project } from "./project/Project";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>Projects</h2>
                </div>
                <div className={style.projects}>
                    <Project
                        title={"social network"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}/>
                    <Project
                        title={"todolist"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}/>
                </div>
            </div>
        </div>
    );
}
