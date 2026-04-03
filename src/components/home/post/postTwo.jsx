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
                <img src="https://instagram.fbho1-1.fna.fbcdn.net/v/t51.82787-15/611290710_18552534856018497_4243418728669008518_n.jpg?stp=dst-jpg_e35_p480x480_tt6&_nc_cat=102&ig_cache_key=MzgwNTQxODE1MTc2OTk2Nzg4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=uwPs3qXsZdoQ7kNvwGob3Md&_nc_oc=AdoDHZoe5RP8pT6zf86qrExxIJ6gwVw7rUIJc6t6uYN7Uu4SxRixlFmqcUuBYQ8BQSXeBfMnIsvw6GSwMsYQXNF0&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fbho1-1.fna&_nc_gid=OCT82IHhdsvi74gMHMMMCw&_nc_ss=7a32e&oh=00_Af2y5rkMYjvKXndDkHiRjcm0VsTpWEGmYn57LALasAVCFg&oe=69D59A8D" alt=""  loading="lazy"
                width={"400px"}
                height={"auto"}/>
                <video src="/sexy.mp4"/>

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