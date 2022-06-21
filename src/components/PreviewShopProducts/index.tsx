import React from 'react'
import {Wrapper, Container, Row} from "./style/PreviewShop.module.scss"
import {PreviewShopProductsElement} from "../PreviewShopProductsElement";
import {ElementShopData} from "./data";

const PreviewShopProducts = (): JSX.Element => {
    return (
        <div className={Wrapper}>
            <div className={Container}>
                <div className={Row}>
                    {ElementShopData.map((task => {
                        return(
                            <PreviewShopProductsElement
                                image={task.image}
                                title={task.title}
                                description={task.description}
                                price={task.price}
                                btnText={task.btnText}
                            />
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}

export {PreviewShopProducts}
