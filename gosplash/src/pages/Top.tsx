import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {BaseAxios} from "../common-axios";

export const Top:React.FC = () => {
    let loginUser
    const getMyInfo = async () => {
        const res = await BaseAxios.get('users/me')
        console.log(res)
    }
    useEffect(() => {
        getMyInfo()
    })
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