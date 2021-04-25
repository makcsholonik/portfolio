import React from "react";
import style from './App.module.css';
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Distant } from "./distant/Distant";
import { Contacts } from "./contacts/Contacts";
import { Footer } from "./footer/Footer";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Distant/>
            <Contacts/>
            <Footer/>
        </div>
    );
}
