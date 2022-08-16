import React from "react";
import { Form } from "../../components/Form";
import Box from '@mui/material/Box';

export const Register: React.FC = () => {
    return (
        <>
        <h1>アカウント作成</h1>
        <Box>
            <Form name="name" label="ユーザー名" />
            <Form name="mail" label="メールアドレス" />
            <Form name="password" label="パスワード" />
            <Form name="password_confirmation" label="確認用パスワード" />
        </Box>
        </>
    )
}