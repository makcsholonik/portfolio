import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import maxImg from './../assets/images/maxim.png'

export const Main = () => {
    const maxim = {
        backgroundImage: `url(${maxImg})`
    };
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am <span>Maxim Sholonik</span></h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo} style={maxim}></div>
            </div>
        </div>
    );
}


//function Main() {
// //     return (
// //         <div className={styles.mainBlock}>
// //             <div className={styles.container}>
// //                 <div className={styles.greeting}>
// //                     <span>Hi There</span>
// //                     <span>I am Svetlana <span>Dyablo</span></span>
// //                     <h1>Frontend Developer.</h1>
// //                 </div>
// //                 <div className={styles.photo}>
// //                     <div className={styles.image}>
// //
// //                     </div>
// //                 </div>
// //
// //             </div>
// //         </div>
// //     );
// // }