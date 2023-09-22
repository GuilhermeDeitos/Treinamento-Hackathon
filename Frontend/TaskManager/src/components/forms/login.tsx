import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { LoginInput } from "../styles/Inputs";
import { useState } from "react";
import Swal from "sweetalert2";
import Link from "@mui/material/Link";

type LoginData = {
  email: string;
  password: string;
};

export function FormLogin() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [hasPassword, setHasPassword] = useState<boolean>(true);

  const handleHasPassword = () => {
    setHasPassword(!hasPassword);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (loginData.email === "" || loginData.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos!",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Login realizado com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(loginData);

    window.location.href = "/";
  };

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Stack
        spacing={2}
        direction="column"
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          width: "100%",
        }}
      >
        {hasPassword ? (
          <>
            <LoginInput
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChangeForm}
            />
            <LoginInput
              type="password"
              placeholder="Senha"
              name="password"
              onChange={handleChangeForm}
            />
          </>
        ) : (
          <>
            <LoginInput
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChangeForm}
            />

            <LoginInput
              type="password"
              placeholder="Nova senha"
              name="password"
              onChange={handleChangeForm}
            />
            <LoginInput
              type="password"
              placeholder="Confirmar senha"
              name="password"
              onChange={handleChangeForm}
            />
          </>
        )}
        <Link
          underline="always"
          color="#cdcd"
          onClick={handleHasPassword}
          sx={{ cursor: "pointer" }}
        >
          {hasPassword ? "Esqueceu sua senha" : "Voltar"}
        </Link>
        {hasPassword ? (
          <>
            <Link href="/register" underline="none" sx={{ cursor: "pointer" }}>
              Não tem conta? Cadastre-se
            </Link>

            <Button variant="outlined" onClick={handleLogin} type="submit">
              Login
            </Button>
          </>
        ) : (
          <>
            <>
              <Button variant="outlined" onClick={handleLogin} type="submit">
                Enviar
              </Button>
            </>
          </>
        )}
      </Stack>
    </Box>
  );
}
