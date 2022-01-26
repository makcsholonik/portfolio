import React from 'react';
import style from './Projects.module.scss';
import { Project } from './project/Project';
import { Title } from '../common/components/title/Title';
import socialImg from './../assets/images/socialNetwork.png';
import todoImg from './../assets/images/todolist.png';


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`
    };
    const todolist = {
        backgroundImage: `url(${todoImg})`
    };
    return (
        <div id={'projects'} className={style.projectsBlock}>
            <div className={style.container}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        style={social}
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
};
