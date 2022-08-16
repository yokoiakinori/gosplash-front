import React from "react";
import TextField from '@mui/material/TextField';

type Props = {
    name:string
    label:string
}
export const Form: React.FC<Props> = ({name, label}) => {
    return (
        <>
        <TextField
            id={name} 
            margin="normal" 
            fullWidth 
            error 
            required 
            label={label} 
            variant="outlined" 
        />
        </>
    )
}