import { Avatar, Button, Stack, Typography } from "@mui/material";

const ProfileBar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={2}
        py={2}
        mx={"auto"}
        width={"90%"}
        maxWidth={"750px"}
        boxShadow={"5px 5px 5px gray"}
        borderRadius={"15px"}
        sx={{
          ":hover": { cursor: "pointer" },
        }}
      >
        <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
          <Avatar src="" alt="" sx={{ width: 50, height: 50 }} />
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"}>
              Nikhil_raaj_7
            </Typography>

            <Typography variant="caption" fontSize={"1.1rem"} color="gray">
              Aka Karrachi
            </Typography>
            <Typography variant="caption" fontSize={"1rem"}>
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