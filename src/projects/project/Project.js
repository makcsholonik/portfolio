import React from 'react';
import style from './Project.module.scss'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer} style={props.style}>
                <a className={style.imageButton}></a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}


//function Project(props) {
// //
// //
// //     return (
// //         <div className={style.project}>
// //             <div className={style.image} style={props.style}>
// //                 <Button text={"view"}/>
// //             </div>
// //             <div className={style.projectInfo}>
// //                 <h3 className={style.projectTitle}>{props.title}</h3>
// //                 <span className={style.description}>{props.description}</span>
// //             </div>
// //         </div>
// //     );
// // }