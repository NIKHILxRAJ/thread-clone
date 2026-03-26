
import { Button, Stack, TextField, Typography } from "@mui/material";
import { RxHeight } from "react-icons/rx";


const Register=()=>
{
    return(
        <>
            <Stack width={'100%'}
               height={'100vh'}
               flexDirection={'row'}
               justifyContent={"center"}
               alignItems={'center'}
               sx={{backgroundImage:'url("/public/register-bg.webp")',
            backgroundSize:"100%,600px ",
            backgroundRepeat:"no-repeat"
               }}
            > 
            <Stack flexDirection={'column'}width={"40%"}gap={2}mt={20}>
                

                <Typography 
                variant="h5"
                fontSize={"1.5rem"}
                fontWeight={"bold"}
                alignSelf={"center"}
                >
                    Login with E-mail
                </Typography>
                <TextField variant="outlined" placeholder="Enter your userName...."
                sx={{bgcolor:"#93fbf6"}}/>
                <TextField variant="outlined" placeholder="Enter your E-mail...."
                sx={{bgcolor:"#93fbf6"}}/>
                <TextField variant="outlined" placeholder="Enter your Password...."
                sx={{bgcolor:"#93fbf6"}}/>
               <Button size="large" 
               sx={{
                width:"100%",
                height:52,
                bgcolor:"green",
                color:"white",
                borderRadius:"50px",
                fontSize:"1rem",
                ":hover":{
                    bgcolor:"blue",
                    cursor:"pointer",
                }
               }}> SIGN -UP
               </Button>
               <Typography variant="subtitle2"
                fontSize={"1.3rem"}
                alignSelf={"center"}
               
                >
                    Already have an account ? 
                    <span  className="login-link">
                        Login
                    </span>
               </Typography>
            </Stack>

            </Stack>
        </>
    )
}
export default Register;