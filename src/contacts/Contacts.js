import React from "react";
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.formContainer} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id=""></textarea>
                    <button className={style.send} type="submit">Отправить</button>
                </form>
            </div>
        </div>
    )
}