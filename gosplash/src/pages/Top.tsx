import React from "react";
import cssTop from "../css/page/Top.module.css"
import {ListCard} from "../components/ListCard";

export const Top:React.FC = () => {
    const photoNameList = [
        250,
        400,
        250,
        600,
        250,
        600,
        300,
        550,
        250,
        600,
        250,
        600,
        300,
        550,
    ]
    const photoListDom = []
    photoNameList.forEach (size => {
        photoListDom.push(<ListCard size={size} />)
    })

    return (
        <div className={cssTop.wrapper}>
            { photoListDom }
        </div>
    )
}