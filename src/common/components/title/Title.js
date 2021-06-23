import React from "react";
import style from './../title/Title.module.css';

export const Title = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    );
}
