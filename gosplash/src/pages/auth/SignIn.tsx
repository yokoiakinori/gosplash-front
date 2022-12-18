import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link, useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {SubmitHandler, useForm} from "react-hook-form";
import {BaseAxios} from "../../common-axios";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FormInput {
  email: string
  password: string
}

const schema = yup.object({
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

export const SignIn: React.FC = () => {
  const navigate = useNavigate()

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

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const res = await BaseAxios.post('users/login', data)
    navigate('/')
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="メールアドレス"
              autoComplete="email"
              {...register('email')}
              autoFocus
            />
            <FormControl
                variant={"outlined"}
                fullWidth
                error={"password" in errors}
                margin="normal"
            >
              <InputLabel htmlFor="password">パスワード</InputLabel>
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
                  {...register('password')}
              />
              <FormHelperText>{errors.password?.message}</FormHelperText>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
            >
              ログイン
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#">
                  パスワードを忘れましたか？
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register">
                  {"アカウントが無い方はこちら"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}