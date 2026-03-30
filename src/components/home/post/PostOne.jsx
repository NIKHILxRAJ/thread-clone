import { Avatar, Badge, Stack, Box, Stepper, AvatarGroup } from "@mui/material";

const PostOne = () => {
    return (
        <Stack 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="flex-start"
            height="100%"
        >
            <Badge 
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                    <Avatar 
                        sx={{
                            width: 16,
                            height: 16,
                            bgcolor: "green",
                            border: "2px solid white",
                            fontSize: "12px",
                        }}
                    >
                        {" "}
                        +{" "}
                    </Avatar>
                }
            >
                <Avatar 
                    alt="AJ" 
                    src="" 
                    sx={{ width: 40, height: 40 }} 
                />
            </Badge>
            <Stack 
            flexDirection={"column"}
            alignItems={"center"}
            gap={2}
            height={"100%"}
             >
                <Stepper orientation={'vertical'}
                activeStep={0}
                sx={{
                    border:'0.1rem solid gray',
                    width:'0px',
                    height:'100%'
                }}
                
                
                ></Stepper>
                <AvatarGroup 
                // total={2}
                max={1}
                sx={{
                    '&.mui-root':{
                        width:24,
                        height:24,
                        fontSize:12,
                    },
                }}>
                    <Avatar src="" alt=""/>
                    <Avatar src="" alt=""/>
                    <Avatar src="" alt=""/>
                    <Avatar src="" alt=""/>
                    <Avatar src="" alt=""/>
                    <Avatar src="" alt=""/>
                    <Avatar src="" alt=""/>
                    <Avatar src="" alt=""/>
                </AvatarGroup>

            </Stack>

            
        </Stack>
    );
};

export default PostOne;