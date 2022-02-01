import React from 'react';
import style from './Footer.module.scss';
import telegramIcon from '../assets/images/telegram.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import githubIcon from '../assets/images/github.svg';
import { Title } from '../common/components/title/Title';
import { Social } from './social/Social';

export const Footer = () => {

    const telegramURL = 'https://t.me/makcsholonik/';
    const linkedinURL = 'https://www.linkedin.com/in/makcsholonik/';
    const githubURL = 'https://github.com/makcsholonik/';

    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title title={'Maxim Sholonik'}/>
                <div className={style.socialIcons}>
                    <Social img={telegramIcon} url={telegramURL}/>
                    <Social img={linkedinIcon} url={linkedinURL}/>
                    <Social img={githubIcon} url={githubURL}/>
                </div>
                <span className={style.copyright}>2022 All Rights Reserved.</span>
            </div>
        </div>
    );
};