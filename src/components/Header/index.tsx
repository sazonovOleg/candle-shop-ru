import React from 'react'
import {
    Logo,
    Item,
    Menu,
    Container,
    Cart,
    Wrapper,
    BoxSpacer,
    LogoImg,
    Column,
    ColumnLeft,
    ColumnRight,
    ContainerTop,
    SocialIcon,
    SocialLink
} from './style/Header.module.scss'
import cart from '../../assets/icon/cart.png'
import logo from '../../assets/icon/candle.png'
import instagram from '../../assets/icon/instagram.png'
import telegram from '../../assets/icon/telegram.png'
import vk from '../../assets/icon/vk-social-logotype.png'
import mail from '../../assets/icon/email.png'

const Header = (): JSX.Element => {
    return (
        <div className={Wrapper}>
            <div className={BoxSpacer}>
                <div className={Container + " " + ContainerTop}>
                    <a href="#" className={Column + " " + ColumnLeft}>
                        <span className={Logo}>
                            Candle-Shop
                        </span>
                        <img className={LogoImg} src={logo} alt=""/>
                    </a>
                    <div className={Column + " " + ColumnRight}>
                        <a className={SocialLink} href="#">
                            <img className={SocialIcon} src={instagram} alt=""/>
                        </a>
                        <a className={SocialLink} href="#">
                            <img className={SocialIcon} src={telegram} alt=""/>
                        </a>
                        <a className={SocialLink} href="#">
                            <img className={SocialIcon} src={vk} alt=""/>
                        </a>
                        <a className={SocialLink} href="#">
                            <img className={SocialIcon} src={mail} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={Container}>
                <nav className={Menu}>
                    <a href="#" className={Item}>
                        О Нас
                    </a>
                    <a href="#" className={Item}>
                        Товары
                    </a>
                    <a href="#" className={Item}>
                        Контакты
                    </a>
                    <a href="#" className={Item}>
                        Отзывы
                    </a>
                    <a href="#" className={Item}>
                        Доставка
                    </a>
                    <a href="#" className={Item}>
                        Сотрудничество
                    </a>
                </nav>
                <img src={cart} className={Cart}/>
            </div>
        </div>
    )
}

export {Header}