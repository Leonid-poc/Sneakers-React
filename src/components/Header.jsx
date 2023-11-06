import React from "react";
import logo from "../assets/logo.jpg";
import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
    return (
    <header>
        <div className="header-logo">
            <img src={logo} />
            <div>
                <h1>React Sneakers</h1>
                <span>Магазин лучших кросовок</span>
            </div>
        </div>
        <ul className="header-bar">
            <li>
                <a href="#">
                    <AiOutlineShoppingCart size={"2em"} />
                    <div>0 руб.</div>
                </a>
            </li>
            <li>
                <a href="#">
                    <AiOutlineHeart size={"2em"} />
                    <div>Закладки</div>
                </a>
            </li>
            <li>
                <a href="#">
                    <AiOutlineUser size={"2em"} />
                    <div>Профиль</div>
                </a>
            </li>
        </ul>
    </header>
    )
}

export default Header;