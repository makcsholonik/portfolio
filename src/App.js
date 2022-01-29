import React from 'react';
import style from './App.module.scss';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Hire } from './hire/Hire';
import { Contacts } from './contacts/Contacts';
import { Footer } from './footer/Footer';

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            {/*<Hire/>*/}
            <Contacts/>
            <Footer/>
        </div>
    );
}