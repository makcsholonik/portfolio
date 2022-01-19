import React from 'react';
import style from './Contacts.module.scss';
import { Title } from '../common/components/title/Title';
import Button from '../common/components/button/Button';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title title={'Contacts'}/>
                <form className={style.form}>
                    <input type="text" className={style.formArea} placeholder="Name"/>
                    <input type="text" className={style.formArea} placeholder="e-mail"/>
                    <textarea className={style.messageArea} placeholder="Message"/>
                </form>
                <Button text={'Send message'} type="submit"/>
            </div>
        </div>
    )
}
