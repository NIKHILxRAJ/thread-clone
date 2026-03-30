import { Stack, Typography } from "@mui/material";
import{FaRegHeart,FaRegComment,FaRetweet} from "react-icons/fa6";
import{IoMdSend} from "react-icons/io"

const PostTwo=()=>
{
    return(
        <>
        
        <Stack flexDirection={'column'}
        justifyContent={"space-between"}
        >
            <Stack flexDirection={"column"}
            gap={2}>
                <Stack flexDirection={'column'}
                
                >
                    <Typography variant="h6"
                    fontSize={"1rem"}
                    fontWeight={"bold"}>
                        nikhil_raj_7
                    </Typography>
                    <Typography variant="h5"
                    fontSize={"1.2rem"}
                    >
                        Hi guys ! my self nikhil raj 
                    </Typography>
                </Stack>
                <img src="https://4kwallpapers.com/images/walls/thumbs_3t/19795.jpg" alt=""  loading="lazy"
                width={"400px"}
                height={"auto"}/>

            </Stack>
            <Stack flexDirection={'column'}
            gap={1}>
                <Stack flexDirection={'row'}
                gap={2}
                m={1}>
                    <FaRegHeart size={32}/>
                    <FaRegComment size={32}/>
                    <FaRetweet size={32}/>
                    <IoMdSend size={32}/>
                </Stack>
                <Stack
                flexDirection={"row"}
                gap={1}
                position={"relative"}
                top={-3}
                left={4}
                >
                    <Typography variant="capital"
                    color={'grayText'}
                    fontSize={'1.2rem'}>2 likes</Typography>
                    <Typography variant="capital"
                    color={'grayText'}
                    fontSize={'1.2rem'}>1 comments</Typography>
                </Stack>

            </Stack>

        </Stack>
        
        </>
    )
}
export default PostTwo;