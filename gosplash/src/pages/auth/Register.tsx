import React from "react";
import { Form } from "../../components/Form";
import { Box, Container, Button, Typography, TextField } from '@mui/material';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

interface FormInput {
    name: string
    email: string
    password: string
}

const schema = yup.object({
    name: yup
    .string()
    .required('名前は必ず入力してください。'),
    email: yup
    .string()
    .required('メールアドレスは必ず入力してください。')
    .email('正しいメールアドレスを入力してください。'),
    password: yup
    .string()
    .required('パスワードは必ず入力してください。')
    .min(6, 'パスワードが短すぎます。')
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
        '推測されやすいパスワードが使用されています。'
    ),
})

export const Register: React.FC = () => {
    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm<FormInput>({
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(data)
    }
    
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
                <Typography component="p" variant="body1">
                    アカウントを既に持っている方はログインから
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        id="name"
                        required
                        variant="outlined"
                        label="お名前"
                        margin="normal"
                        error={"name" in errors} 
                        {...register('name')} 
                        helperText={errors.name?.message} 
                    />
                    <TextField
                        id="email"
                        required
                        variant="outlined"
                        label="メールアドレス"
                        margin="normal"
                        error={"email" in errors} 
                        {...register('email')} 
                        helperText={errors.email?.message} 
                    />
                    <TextField
                        id="email"
                        required
                        variant="outlined"
                        label="パスワード"
                        margin="normal"
                        error={"password" in errors} 
                        {...register('password')} 
                        helperText={errors.password?.message} 
                    />
                    <Button
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
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