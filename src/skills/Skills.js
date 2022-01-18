import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import { Skill } from "./skill/Skill";
import { Title } from "../common/components/title/Title";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
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


// function Skills() {
//     let react = reactIcon;
//     let js = jsIcon;
//     let html = htmlIcon;
//
//     return (
//         <div className={styles.skillsBlock}>
//             <div className={styles.container}>
//                 <Title text={"Skills"}/>
//                 <div className={styles.skills}>
//                     <Skill title={"Js"}
//                            icon={js}
//                            description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
//                     <Skill title={"html & Css"}
//                            icon={html}
//                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, "}/>
//                     <Skill title={"React"}
//                            icon={react}
//                            description={"ut labore et dolore magna aliqua Ut."}/>
//                 </div>
//             </div>
//         </div>
//     );
// }