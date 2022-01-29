import React from 'react';
import style from './Social.module.scss';

export const Social = (props) => {
    return (
        <div className={style.socialIcon}>
            <a target={'_blank'} href={props.url}>
                <img src={props.img} alt=""/>
            </a>
        </div>
    );
};