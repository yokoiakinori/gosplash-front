import React, {useEffect} from 'react'
import { Link } from "react-router-dom"
import {useRecoilState} from "recoil";
import {loginUserAtom} from "../atoms/LoginUser";
import {BaseAxios} from "../common-axios";

export const Header: React.FC = () => {
    const [info, setInfo] = useRecoilState(loginUserAtom)

    const getMyInfo = async () => {
        const res = await BaseAxios.get('users/me')
        setInfo(res.data)
    }
    useEffect(() => {
        if (info !== null) {
            getMyInfo()
        }
    })
    return (
        <div>
            <Link to="/signin">ログイン</Link>
            <Link to="/register">会員登録</Link>
        </div>
    )
}