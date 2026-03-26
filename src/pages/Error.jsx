import { Stack, Typography, Button, colors } from "@mui/material";
import { Link } from "react-router-dom";
import Home from "./Procted/Home";

const Error = () => {
    return (
        <Stack 
            width="100%"
            height="100vh"
            direction="column" 
            justifyContent="center"
            alignItems="center"
            spacing={2}  
            sx={{
               background:'url("/error-bg.png")',
               backgroundRepeat:"no-repeat",
               backgroundSize:"cover"
            }}    
        >
            <Stack padding={5}
            border={'2px solid black'}
            bgcolor={'wheat'}
            borderRadius={"20px"}
            flexDirection={'column'}
            alignItems={'center'}
            gap={2}
            boxShadow={'7px 7px 7px white'}
            >
            <Typography variant="h3" fontWeight="bold">
                OOP's
            </Typography>
            <Typography variant="h6" color="text.secondary">
                You entered the wrong location!
            </Typography>
            <Button size="large"
             sx={{bgcolor:"blue",color:"white",borderRadius:"20px",p:2,":hover":{
                bgcolor:"pink",cursor:"pointer"
             }}}
             > <Home/></Button>


            </Stack>
            
        </Stack>
    );
}

export default Error;