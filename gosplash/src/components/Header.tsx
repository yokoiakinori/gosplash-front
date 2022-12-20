import React, {useEffect} from 'react'
import { Link } from "react-router-dom"
import {useRecoilState} from "recoil";
import {loginUserAtom} from "../atoms/LoginUser";
import {BaseAxios} from "../common-axios";
import cssHeader from "../css/common/Header.module.css"

interface UserProps {
    info?: any
}

export const Header: React.FC = () => {
    const [info, setInfo] = useRecoilState(loginUserAtom)

    const getMyInfo = async () => {
        const res = await BaseAxios.get('users/me')
        setInfo(res.data)
    }
    useEffect(() => {
        if (info === null) {
            getMyInfo()
        }
    })

    let link
    if (info === null) {
        link = <UnLoggedLink />
    } else {
        link = <LoggedLink info={info} />
    }
    return (
        <div className={cssHeader.wrapper}>
            <p>ロゴ</p>
            {link}
        </div>
    )
}

function LoggedLink(props: UserProps) {
    return (
        <div className={cssHeader.link_wrapper}>
            <Link to="#" className={cssHeader.link}>{props.info.user.name}</Link>
        </div>
    )
}

function UnLoggedLink() {
    return (
        <div className={cssHeader.link_wrapper}>
            <Link to="/signin" className={cssHeader.link}>ログイン</Link>
            <p>/</p>
            <Link to="/register" className={cssHeader.link}>会員登録</Link>
        </div>
    )
}