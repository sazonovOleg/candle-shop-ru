import React from 'react';
import {AppBody} from './App.module.scss';
import {Header} from "./components/Header";
import {BannerPage} from "./components/BannerPage";

function App() {
    return (
        <div className={AppBody}>
            <Header/>
            <BannerPage/>
        </div>
    );
}

export default App;
