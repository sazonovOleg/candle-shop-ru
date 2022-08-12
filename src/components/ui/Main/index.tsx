import React from 'react'
import {BannerPage} from "../BannerPage";
import {PreviewShopProducts} from "../PreviewShopProducts";
import { } from './style/Main.module.scss'

const Main = ():JSX.Element => {
    return (
        <div>
            <BannerPage/>
            <PreviewShopProducts/>
        </div>
    )
}

export {Main}