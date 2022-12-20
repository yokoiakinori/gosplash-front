import React from "react";
import { Link } from "react-router-dom";

export const Top:React.FC = () => {
    return (
        <>
        <h1>Sample Home</h1>
        <nav>
            <ul>
                <li><Link to="register">アカウント作成</Link></li>
            </ul>
        </nav>
        </>
    )
}