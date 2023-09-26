import { useState } from "react";
import Swal from "sweetalert2";
import { StyledForm } from "./styled";
import { LoginInput } from "../../components/styles/Inputs";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";





export function RegisterPage() {
    const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    function handleChangeUser(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function confirmPassword(e) {
        e.preventDefault();
        if(user.name === "" || user.email === "" || user.password === "" || user.confirmPassword === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Preencha todos os campos!",
                width: "80%",
                background: "#272727",
            });
        } else if(user.email.indexOf("@") === -1 || user.email.indexOf(".com") === -1){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Insira um email válido!",
                width: "80%",
                background: "#272727",
            });
        } else if(user.password.length < 8 && user.confirmPassword.length < 8){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "A senha deve ter no mínimo 8 caracteres!",
                background: "#272727",
            });
        } else if (user.password !== user.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "As senhas não coincidem!",
                background: "#272727",
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Cadastro realizado com sucesso!",
                showConfirmButton: false,
                timer: 1500,
                background: "#272727",
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
            }}>
            <StyledForm>
                <h1>Faça o seu registro</h1>
                <LoginInput type="text" placeholder="Nome" name="name" onChange={handleChangeUser} />
                <LoginInput type="email" placeholder="Email" name="email" onChange={handleChangeUser} />
                <LoginInput type="password" placeholder="Senha" name="password" onChange={handleChangeUser} id="passW"/>
                <LoginInput type="password" placeholder="Confirmar senha" name="confirmPassword" onChange={handleChangeUser}/>
                <Link href="/login" underline="none" sx={{cursor:"pointer"}}>Já tem uma conta? Faça login</Link>
                <button onClick={confirmPassword}>Registrar</button>
            </StyledForm></Paper>
    )

}