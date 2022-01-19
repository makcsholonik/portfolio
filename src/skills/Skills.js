import React from 'react';
import style from './Skills.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../common/components/title/Title';
import reactIcon from '../assets/images/react-icon.svg'
import jsIcon from '../assets/images/js-icon.svg'
import htmlIcon from '../assets/images/html-icon.svg'


export const Skills = () => {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;

    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill
                        title={'html & css'}
                        icon={html}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                    <Skill
                        title={'js'}
                        icon={js}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                    <Skill
                        title={'react'}
                        icon={react}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                </div>
            </div>
        </div>
    );
}