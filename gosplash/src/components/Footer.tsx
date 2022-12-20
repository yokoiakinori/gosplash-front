import React from 'react'
import cssFooter from "../css/common/Footer.module.css"
import {Link} from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <div className={cssFooter.wrapper}>
            <ul className={cssFooter.nav_link}>
                <li><Link to="#">about</Link></li>
                <li><Link to="#">お問合せ</Link></li>
                <li><Link to="#">プライバシーポリシー</Link></li>
                <li><Link to="#">ガイドライン</Link></li>
            </ul>
            <small className={cssFooter.copylight}>© 2022 monopo.</small>
        </div>
    )
}