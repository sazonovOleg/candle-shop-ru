import React from 'react'
import {Wrap, Image, Title, Description, Button, Price} from "./style/PreviewShopEl.module.scss"

interface PreviewShopProductsElementProps {
    image: string,
    title: string,
    description: string,
    price: number,
    btnText: string
}

//TODO счетчик вместо кнопки после добавления в корзину

const PreviewShopProductsElement = ({image, title, description, price, btnText}:PreviewShopProductsElementProps): JSX.Element => {
    return (
        <div className={Wrap}>
            <img src={image} className={Image} alt=""/>
            <h2 className={Title}>{title}</h2>
            <p className={Description}>{description}</p>
            <p className={Price}>{price + " руб."}</p>
            <button className={Button}>{btnText}</button>
        </div>
    )
}

export {PreviewShopProductsElement}