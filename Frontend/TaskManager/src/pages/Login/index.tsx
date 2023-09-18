import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { FormLogin } from "../../components/forms/login";

export function Login() {
  return (
    <Box
        component={"div"}
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            }}

    >
        <Paper
      elevation={3}
      style={{
        backgroundColor: "#272727",
        height: "50%",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <h1>Login</h1>
        <FormLogin />
    </Paper>
    </Box>
    
  );
}
