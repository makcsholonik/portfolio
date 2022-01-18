import React from "react";
import style from './Hire.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
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


// function Hire() {
//     return (
//         <div className={style.hireBlock}>
//             <div className= {style.container} >
//                 <Title text={"I am available for Freelance"}/>
//                 <Button text={"Hire me"}/>
//             </div>
//         </div>
//     );
// }