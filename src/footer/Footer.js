import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Maxim</h2>
                <div className={style.network}>
                    <div>facebook</div>
                    <div>twitter</div>
                    <div>linkedin</div>
                </div>
                <div className={style.copyright}>
                    <img src="#" alt="image"/>
                    <div>2021 Все права защищены</div>
                </div>
            </div>
        </div>
    )
}


// function Footer() {
//     return (
//         <div className={styles.footer}>
//             <div className={styles.container} >
//                 <Title text={"Svetlana Dyablo"}/>
//                 <div className={styles.socialIcons}>
//                     <div className={styles.socialIcon}>
//                         <a href="">
//                             <img src={telegramIcon} alt=""/>
//                         </a>
//                     </div>
//                     <div className={styles.socialIcon}>
//                         <a href="">
//                             <img src={facebookIcon} alt=""/>
//                         </a>
//                     </div>
//                     <div className={styles.socialIcon}>
//                         <a href="">
//                             <img src={likedinIcon} alt=""/>
//                         </a>
//                     </div>
//                     <div className={styles.socialIcon}>
//                         <a href="">
//                             <img src={vkIcon} alt=""/>
//                         </a>
//                     </div>
//                 </div>
//                 <span className={styles.copyright}>2020 All Rights Reserved.</span>
//             </div>
//         </div>
//     );
// }