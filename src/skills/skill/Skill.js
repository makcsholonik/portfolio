import React from 'react';
import style from './Skill.module.scss';

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={props.icon} alt=""/>
            </div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}

//function Skill(props) {
//     return (
//         <div className={styles.skill}>
//             <div className={styles.icon}>
//                 <img src={props.icon} alt=""/>
//             </div>
//             <h3 className={styles.skillTitle}>{props.title}</h3>
//             <span className={styles.description}>{props.description}</span>
//         </div>
//     );
// }