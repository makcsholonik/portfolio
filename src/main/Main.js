import React from 'react';
import style from './Main.module.scss';

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am <span>Maxim Sholonik</span></h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
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