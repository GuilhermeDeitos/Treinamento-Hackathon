import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export function FormLogin(){
    return(
        <Box 
            component={"form"}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <Stack spacing={2} direction="column" sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}>
                <TextField id="outlined-basic" label="Email"  sx={{
                    width: "70%",
                    color: "white",
                    borderColor: "white",

                }}/>
                <TextField id="outlined-basic" label="Senha" variant="outlined"sx={{
                    width: "70%",
                }} />
                <Button variant="outlined">Login</Button>
            </Stack>
        </Box>

    )
}