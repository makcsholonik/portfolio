import React from 'react';
import style from './Footer.module.scss';
import telegramIcon from '../assets/images/telegram.svg';
import facebookIcon from '../assets/images/facebook.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import vkIcon from '../assets/images/vk.svg';
import { Title } from '../common/components/title/Title';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title title={'Maxim Sholonik'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={telegramIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={facebookIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={linkedinIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={vkIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={style.copyright}>2020 All Rights Reserved.</span>
            </div>
        </div>
    )
}