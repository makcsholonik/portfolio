import React from 'react'
import styleContainer from '../common/styles/Container.module.scss'
import style from './Projects.module.scss'
import { Project } from './project/Project'
import { Title } from '../common/components/title/Title'
import socialImg from './../assets/images/socialNetwork.png'
import todoImg from './../assets/images/todolist.png'


export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImg})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImg})`,
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        style={socialNetwork}
                        title={'social network'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}/>
                    <Project
                        style={todolist}
                        title={'todolist'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}/>
                </div>
            </div>
        </div>
    );
}


//function Projects() {
//     const social = {
//         backgroundImage: `url(${socialImage})`,
//     };
//     const todolist = {
//         backgroundImage: `url(${todoImage})`,
//     };
//
//     return (
//         <div className={style.projectsBlock}>
//             <div className={style.container} >
//                 <Title text={"Projects"}/>
//                 <div className={style.projects}>
//                     <Project style={social} title={"Social network"} description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
//                     <Project style={todolist} title={"Todo list"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, "}/>
//                 </div>
//             </div>
//         </div>
//     );
// }