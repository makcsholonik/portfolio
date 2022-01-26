import React from 'react';
import style from './Contacts.module.scss';
import { Title } from '../common/components/title/Title';

export const Contacts = () => {
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={style.container}>
                <Title title={'Contacts'}/>
                <form className={style.form}>
                    <input type="text" className={style.formArea} placeholder="Name"/>
                    <input type="text" className={style.formArea} placeholder="e-mail"/>
                    <textarea className={style.messageArea} placeholder="Message"/>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
};
