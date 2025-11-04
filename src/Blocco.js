import { Box, Container } from "@mui/material";

export function Blocco({ children }) {
    return <Box sx={{ paddingY: 6, backgroundColor: (theme) => theme.palette.background.default, color: (theme) => theme.palette.getContrastText(theme.palette.background.default) }}><Container>
        {children}
    </Container>
    </Box>
}













