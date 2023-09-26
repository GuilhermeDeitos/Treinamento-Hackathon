import { useState } from "react";
import Swal from "sweetalert2";
import { StyledForm } from "./styled";
import { LoginInput } from "../../components/styles/Inputs";
import Paper from "@mui/material/Paper";



export function RegisterPage() {
    const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    function handleChangeUser(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function confirmPassword(e) {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "As senhas não coincidem!",
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Cadastro realizado com sucesso!",
                showConfirmButton: false,
                timer: 1500,
            })
        }
        console.log(user)
    }
    return (

        <Paper
            elevation={3}
            style={{
                backgroundColor: "#272727",
                height: "80vh",
                width: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
            }}
        ><h1>Faça o seu registro</h1>

            <StyledForm>
                <LoginInput type="text" placeholder="Nome" name="name" onChange={handleChangeUser} />
                <LoginInput type="email" placeholder="Email" name="email" onChange={handleChangeUser} />
                <LoginInput type="password" placeholder="Senha" name="password" onChange={handleChangeUser} />
                <LoginInput type="password" placeholder="Confirmar senha" name="confirmPassword" onChange={handleChangeUser} />
                <button onClick={confirmPassword}>Registrar</button>
            </StyledForm></Paper>
    )

}