import React from "react";
import style from './../project/Project.module.css'


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
                <a className={style.imageButton} href="#">Смотреть</a>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}
