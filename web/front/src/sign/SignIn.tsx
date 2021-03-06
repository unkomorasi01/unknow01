import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RestoreOutlined } from "@mui/icons-material";

const theme = createTheme();

// https://javascript.plainenglish.io/basic-react-login-using-external-api-e33322e480cd
async function loginUser(credentials: FormData) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: credentials,
    headers: {
      "Access-Control-Allow-Headers": "multipart/form-data",
    },
  })
    .then((res) => res)
    .then(
      (result) => {
        console.log(result);
        if (result.status === 200) {
          // window.location.href = "/";
        }
      },
      (error) => {
        console.log("Error:", error);
      }
    );
}

// 初期表示時にCSRFトークン取得
const response = async () => {
  await fetch("http://localhost:8080/csrf", {
    method: "GET",
    mode: "cors",
    credentials: "include",
  })
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log("Error:", error);
      }
    );
};
response();

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const cookie = document.cookie;
    const csrfToken = cookie.split("=");
    data.set("_csrf", csrfToken[1]);
    await loginUser(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
