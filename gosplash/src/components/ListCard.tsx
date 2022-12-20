import React from 'react'
import cssListCard from "../css/component/ListCard.module.css"

interface Size {
    size: number
}

export const ListCard: React.FC<Size> = (props) => {
    const widthStyle = {
        width: props.size + 'px',
    }
    return (
        <a className={cssListCard.wrapper}>
            <img src="#" alt="" style={widthStyle}/>
        </a>
    )
}