import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMore } from "react-icons/io";

const Comments = ({ e, darkMode, isAdmin, setAnchorEl }) => {
    const _700 = useMediaQuery("(min-width:700px)");
    return (
        <>
            <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                px={2}
                pb={4}
                borderBottom={"1px solid gray"}
                mx={"auto"}
                width={"90%"}
            >
                <Stack flexDirection={"row"} gap={_700 ? 2 : 1}>
                    <Avatar
                        src={e ? e.admin.profilePic : ""}
                        alt={e ? e.admin.userName : ""}
                    />
                    <Stack flexDirection={"column"}>
                        <Typography variant="h6" fontWeight={"bold"} fontSize={"0.9rem"}>
                            {e ? e.admin.userName : ""}
                        </Typography>
                        <Typography variant="subtitle2" fontSize={"0.9rem"}>
                            {e ? e.text : ""}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    flexDirection={"row"}
                    gap={1}
                    alignItems={"center"}
                    color={darkMode ? "white" : "GrayText"}
                    fontSize={"0.9rem"}
                >
                    <p>24min</p>
                    {isAdmin ? (
                        <IoIosMore
                            size={_700 ? 28 : 20}
                            className="image-icon"
                            onClick={(event) => setAnchorEl(event.currentTarget)}
                        />
                    ) : (
                        <IoIosMore size={_700 ? 28 : 20} className="image-icon" />
                    )}
                </Stack>
            </Stack>
        </>
    );
};

export default Comments;