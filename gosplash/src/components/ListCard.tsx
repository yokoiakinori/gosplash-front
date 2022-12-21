import React, {useState} from 'react'
import cssListCard from "../css/component/ListCard.module.css"
import {IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Size {
    size: number
}

export const ListCard: React.FC<Size> = (props) => {
    const widthStyle = {
        width: props.size + 'px',
    }

    const [isShow, setIsShow] = useState(false)

    return (
        <a
            className={cssListCard.wrapper}
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            <img src="#" alt="" style={widthStyle}/>
            <div className={`${cssListCard.reactions} ${isShow? cssListCard.show : cssListCard.hidden}`}>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </div>
        </a>
    )
}