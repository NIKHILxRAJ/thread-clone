import ProfileBar from "../../components/search/ProfileBar";
import SearchInput from "../../components/Search/SearchInput";
import { Avatar, Button, Stack, Typography } from "@mui/material";


const Search =()=>
{
    return (
        <>
         <SearchInput/>
        
         <Stack flexDirection={'column'}
         gap={1}
         mb={5}
         width={'90%'}
         maxWidth={"750px"}
         mx={'auto'}>
            <ProfileBar/>
            <ProfileBar/>
            <ProfileBar/>
            
         </Stack>
         </>
    )
}
export default Search; 