import React from 'react';
import style from './Skills.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../common/components/title/Title';
import htmlIcon from '../assets/images/html-icon.svg';
import cssIcon from '../assets/images/css-icon.svg';
import jsIcon from '../assets/images/js-icon.svg';
import tsIcon from '../assets/images/ts-icon.svg';
import reactIcon from '../assets/images/react-icon.svg';
import reduxIcon from '../assets/images/redux-icon.svg';


export const Skills = () => {
    let html = htmlIcon;
    let css = cssIcon;
    let js = jsIcon;
    let ts = tsIcon;
    let react = reactIcon;
    let redux = reduxIcon;

    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={style.container}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill
                        title={'html'}
                        icon={html}
                        description={''}
                    />
                    <Skill
                        title={'css'}
                        icon={css}
                        description={''}
                    />
                    <Skill
                        title={'js'}
                        icon={js}
                        description={''}
                    />
                    <Skill
                        title={'ts'}
                        icon={ts}
                        description={''}
                    />
                    <Skill
                        title={'react'}
                        icon={react}
                        description={''}
                    />
                    <Skill
                        title={'redux'}
                        icon={redux}
                        description={''}
                    />
                </div>
            </div>
        </div>
    );
};