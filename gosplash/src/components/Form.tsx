import React from "react";
import TextField from '@mui/material/TextField';

type Props = {
    name:string
    label:string
    isError: boolean
    message: string|undefined
}
export const Form: React.FC<Props> = ({name, label, isError, message}) => {
    return (
        <>
        <TextField
            id={name} 
            margin="normal" 
            fullWidth 
            error={isError}
            helperText={message}
            required 
            label={label} 
            variant="outlined" 
        />
        </>
    )
}