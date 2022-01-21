import React from 'react';
import style from './Footer.module.scss';
import telegramIcon from '../assets/images/telegram.svg';
import facebookIcon from '../assets/images/facebook.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import vkIcon from '../assets/images/vk.svg';
import { Title } from '../common/components/title/Title';
import { Social } from './social/Social';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title title={'Maxim Sholonik'}/>
                <div className={style.socialIcons}>
                    <Social img={telegramIcon}/>
                    <Social img={facebookIcon}/>
                    <Social img={linkedinIcon}/>
                    <Social img={vkIcon}/>
                </div>
                <span className={style.copyright}>2020 All Rights Reserved.</span>
            </div>
        </div>
    );
};