import { InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <TextField
            placeholder="search"
            sx={{
                width: "90%",
                maxHeight: "750px",
                boxShadow: "5px 5px 5px gray",
                borderRadius: "15px",
                px:2,
                py:1,
                my: 5,
                mx: 'auto',
                display: 'flex',
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" sx={{ color: "black" }}>
                        <FaSearch />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchInput; 