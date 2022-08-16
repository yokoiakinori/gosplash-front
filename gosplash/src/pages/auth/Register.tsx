import React from "react";
import { Form } from "../../components/Form";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Typography component="h1" variant="h5">
                    アカウント作成
                </Typography>
                <Typography component="body" variant="body1">
                    アカウントを既に持っている方はログインから
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Form name="name" label="お名前" />
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
            </Box>
        </Container>
        </>
    )
}