import React from "react";
import { Form } from "../../components/Form";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Register: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      
    return (
        <>
        <Container component="main" maxWidth="xs">
            <h1>アカウント作成</h1>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Form name="name" label="ユーザー名" />
                <Form name="mail" label="メールアドレス" />
                <Form name="password" label="パスワード" />
                <Form name="password_confirmation" label="確認用パスワード" />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                >
                会員登録
                </Button>
            </Box>
        </Container>
        </>
    )
}