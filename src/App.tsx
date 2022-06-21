import React from 'react';
import {AppBody} from './App.module.scss';
import {Header} from "./components/Header";
import {BannerPage} from "./components/BannerPage";
import {PreviewShopProducts} from "./components/PreviewShopProducts";

function App() {
    return (
        <div className={AppBody}>
            <Header/>
            <BannerPage/>
            <PreviewShopProducts/>
        </div>
    );
}

export default App;
