import React from 'react'
import { Container, Close } from './style/Cart.module.scss'
import {CartProps} from "./interface";

const Cart = ({onCartClose} : CartProps):JSX.Element => {
    return (
        <div className={Container}>
            <div>

            </div>
            <span className={Close} onClick={onCartClose}>&times;</span>
        </div>
    )
}

export {Cart}