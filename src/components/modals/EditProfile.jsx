 import { Dialog, useMediaQuery ,Box, DialogContent, DialogTitle, Stack, Avatar, Button, Typography} from "@mui/material";
import { RxCross2 } from "react-icons/rx";

const EditProfile =()=>
{
    const _700 = useMediaQuery("(min-width:700px)")
    const handleClose=()=>
    {

    }
    return (
        <>
        <Dialog
        open={true}
        onClose={handleClose}
        fullScreen={_700 ? false : true}
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
                <Avatar src="" alt="" sx={{
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
                }}>
                    Change
                </Button>
                <input type="file" classname="file-input" accept="image/*" /> 
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
                <input type="text" value={"nikhil_raaj_7"}
                readOnly
                className="text1"
                placeholder=""/> 
               </Stack>
               <Button size="large">Update</Button>
            </DialogContent>

        </Dialog>
        </>
    )
}
export default EditProfile;