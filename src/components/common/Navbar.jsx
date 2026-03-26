 import { Stack } from "@mui/material";
 import { RiHomeSmileFill } from "react-icons/ri"; 
 import { IoIosSearch } from "react-icons/io";
 import { TbEdit } from "react-icons/tb";
 import { CiHeart } from "react-icons/ci";
 import { RxAvatar } from "react-icons/rx";
import  {Link} from "react-router-dom";

const Navbar=()=>
{
    return(
            <>
            <Stack flexDirection={"row"}
            maxWidth={"100%"}
            justifyContent={"space-around"}
            alignItem={'center'}>

                <Link to={'/'}>
                <RiHomeSmileFill size={32} color="black"/>
                </Link>

                <Link to={'/search'}>
                <IoIosSearch  size={32}/>
                </Link>
               <Link to ={'/NewThreads'}>
                <TbEdit  size={32}/>
                </Link>

                <Link to={'/Like'}>
                <CiHeart size={32}/>
                </Link>

                <Link to={'/User'}>
                <RxAvatar size={32}/>
                </Link>
                

            </Stack>
            
            </>
    )
}
export default Navbar;