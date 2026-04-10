import { Avatar, Button, Stack, Typography, useMediaQuery } from "@mui/material";

const ProfileBar = () => {
   const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={2}
        py={2}
        mx={"auto"}
        boxShadow={"5px 5px 5px gray"}
        width={_700 ? "80%" :"90%" }
        borderRadius={"15px"}
        sx={{
          ":hover": { cursor: "pointer" },
        }}
      >
        <Stack flexDirection={"row"} gap={2} >
          <Avatar src="" alt=""  />
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontWeight={"bold"} 
            fontSize={_700 ? "1rem " : "0.9rem" }>
              Nikhil_raaj_7
            </Typography>

            <Typography variant="caption" 
            fontSize={_700 ? "1rem" :"0.9rem"} color="gray">
              Aka Karrachi
            </Typography>
            <Typography variant="caption" fontSize={_700 ? "1rem " :"0.9rem"}>
              3 followers
            </Typography>
          </Stack>
        </Stack>
        <Button
          size="medium"
          sx={{
            border: '1px solid gray',
            color: "black",
            borderRadius: "10px",
            px: 3,
            height: 40,
            textTransform: "none",
            fontWeight: "bold"
          }}
        >
          Follow
        </Button>
      </Stack>
    </>
  );
};

export default ProfileBar;