import React from "react";
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.contacts}>Контакты</h2>
                <div className={style.input}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className={style.send}>Отправить</div>
            </div>
        </div>
    )
}