import React from "react";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <h1>О нас</h1>
            <ul>
                <li>
                    <a href="#">
                        <SlSocialVkontakte size={"2em"} />
                        <div>Вконтакте</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <AiOutlineInstagram size={"2em"} />
                        <div>Инстаграм</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FiTwitter size={"2em"} />
                        <div>Твиттер</div>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;