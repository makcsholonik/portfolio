import React from "react";
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { Title } from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <form className={style.formContainer} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id=""></textarea>
                    <button className={style.submitBtn} type="submit">Отправить</button>
                </form>
            </div>
        </div>
    )
}

// function Contacts() {
//     return (
//         <div className={styles.contactsBlock}>
//             <div className={styles.container}>
//                 <Title text={"Contacts"}/>
//                 <form className={styles.form}>
//                     <input type="text" className={styles.formArea} placeholder="Name"/>
//                     <input type="text" className={styles.formArea} placeholder="e-mail"/>
//                     <textarea className={styles.messageArea} placeholder="Message"/>
//                     <button type="submit" >Send message</button>
//                 </form>
//             </div>
//         </div>
//     );
// }