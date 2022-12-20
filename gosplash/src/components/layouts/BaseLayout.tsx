import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import cssBaseLayout from "../../css/common/BaseLayout.module.css"

export const BaseLayout: React.FC = () => {
    return (
        <div className={cssBaseLayout.wrapper}>
            <Header />
            <div className={cssBaseLayout.container}>
                <Outlet />
            </div>
        </div>
    )
}