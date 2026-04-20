import { Dialog, useMediaQuery ,Box, DialogContent, DialogTitle, Stack, Avatar, Button, Typography} from "@mui/material";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const EditProfile =()=>
{
    const _700 = useMediaQuery("(min-width:700px)");

    const [pic,setPic]=useState();
    const [bio,setbio]=useState();

    const imgRef = useRef();

    const handlePhoto =()=>{
        imgRef.current.click();

    }
    
    const handleClose=()=>
    {

    };
    const handleUpdate=()=>
    {

    };
    return (
        <>
        <Dialog
        open={true}
        onClose={handleClose}
        fullScreen={_700 ? false : true}
        // Added props to increase size
        fullWidth={true}
        maxWidth="sm" 
        PaperProps={{
            sx: {
                minHeight: '600px' // Increases the height of the box
            }
        }}
        >
            <Box position={'absolute'}
            top={20}
            right={20}
            onClick={handleClose}>
                <RxCross2 size={28}/>
            </Box>
            <DialogTitle textAlign={'center'}
            mb={5}>
                Edit Profile
            </DialogTitle>
            <DialogContent>
               <Stack
               flexDirection={"column"}gap={1}>
                <Avatar src={pic ? URL.createObjectURL(pic):""} alt="" sx={{
                    width:96,
                    height:96,
                    alignSelf:"center"
                }}/>
                <Button size="large"
                sx={{
                    border:"2px solid gray",
                    borderRadius:"10px",
                    width:96,
                    height:40,
                    alignSelf:"center",
                    my:2,
                    ":hover":{cursor:"pointer"},
                }}
                onClick={handlePhoto}
                >
                    Change
                </Button>
                <input type="file" style={{display: 'none'}} accept="image/*" ref={imgRef} 
                onChange={(e)=>setPic(e.target.files[0])}
                /> 
                <Typography variant="subtitle1" fontWeight={"bold"}
                fontSize={'1.2rem'} my={2}>
                    Username
                </Typography>
                <input type="text" value={"nikhil_raaj_7"}
                readOnly
                className="text1"/>
               </Stack>
               <Stack flexDirection={'column'}
               gap={1}>
                <Typography variant="subtitle1" fontWeight={"bold"}
                fontSize={'1.2rem'} my={2}>
                    Email
                </Typography>
                <input type="text" value={"nikhil_raaj_7"}
                readOnly
                className="text1"/> 
               </Stack>

               <Stack flexDirection={'column'}
               gap={1}>
                <Typography variant="subtitle1" fontWeight={"bold"}
                fontSize={'1.2rem'} my={2}>
                    Bio
                </Typography>
                <input type="text" 
                
                className="text1"
                placeholder=""
                onChange={(e) => setbio(e.target.value)}/> 
               </Stack>
               <Button size="large"
               sx={{
                border:'2px solid gray',
                borderRadius:"10px",
                bgcolor:'GrayText',
                color:"white",
                width:"100%",
                my:2,
                fontSize:"1.2rem",
                ":hover":{cursor:"pointer",bgcolor:"gray"},
               }}
               onClick={handleUpdate}>
                {" "}
                Update
                </Button>
            </DialogContent>

        </Dialog>
        </>
    )
}
export default EditProfile;