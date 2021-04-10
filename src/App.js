import React from "react";
import style from'./App.module.css';
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./skills/Skills";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

