import React from "react";
import {
    Box,
    Container,
    Button,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormHelperText
} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

interface FormInput {
    name: string
    email: string
    password: string
    password_confirmation: string
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
    password_confirmation: yup
        .string()
        .required('確認用パスワードは必ず入力してください。'),
})

export const Register: React.FC = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

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
                        fullWidth
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
                        fullWidth
                        margin="normal"
                        error={"email" in errors} 
                        {...register('email')} 
                        helperText={errors.email?.message} 
                    />
                    <FormControl
                        variant={"outlined"}
                        fullWidth
                        error={"password" in errors}
                        margin="normal"
                        {...register('password')}
                    >
                        <InputLabel>パスワード</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="パスワードの表示非表示を切り替えます"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="パスワード"
                        />
                        <FormHelperText>{errors.password?.message}</FormHelperText>
                    </FormControl>
                    <TextField
                        id="password_confirmation"
                        required
                        variant="outlined"
                        label="確認用パスワード"
                        fullWidth
                        margin="normal"
                        error={"password_confirmation" in errors}
                        {...register('password_confirmation')}
                        helperText={errors.password_confirmation?.message}
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