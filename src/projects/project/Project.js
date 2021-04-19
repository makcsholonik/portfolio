import React from "react";
import style from './../project/Project.module.css'


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image}>image</div>
            <div className={style.button}>Смотреть</div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}
