import { Avatar, Button, Stack, Typography } from "@mui/material";

const Input = () => {
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '70%',
                margin: '40px auto',
                padding: '20px',
                // This is the most direct way to force a border in React
                borderBottom: '2px solid #333333', 
                minHeight: '60px'
            }}
        >
            <Stack flexDirection="row" alignItems="center" gap={2}>
                <Avatar src="" alt="AJ" />
                <Typography color="gray">Start a thread....</Typography>
            </Stack>

            <Button sx={{ color: "gray", fontWeight: "bold" }}>
                POST
            </Button>
        </div>
    );
};

export default Input;