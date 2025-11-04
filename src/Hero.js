import { Box, Button, Stack, Typography } from '@mui/material'

export function Hero({ scopriRef }) {
    return <Box>
        <Box sx={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url(/sfondo_main.png)', height: '100%', width: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
        <Stack paddingY='18%' direction='row' alignItems='center' gap={6} justifyContent='space-around' sx={{ background: 'linear-gradient(0deg, var(--mui-palette-background-default) 10%, rgba(255, 255, 255, 0) 50%)' }}>
            <Stack>
                <Typography sx={{ textShadow: 'var(--mui-palette-background-default) 1px 0 10px' }} variant='h1'>Don Chisciotte</Typography>
                <Typography variant='h2'>Il Cavaliere e il Sogno</Typography>
            </Stack>
                <Stack gap={6}>
                    <Button onClick={() => scopriRef.current.scrollIntoView()} size='large' variant='contained' sx={{ fontFamily: 'sans-serif', boxShadow: '0px 0px 20px #00000084' }}>Scopri di più</Button>
                    <Button size='large' variant='contained' sx={{ fontFamily: 'sans-serif', boxShadow: '0px 0px 20px #00000084' }}>Scarica</Button>
                </Stack>
        </Stack>
    </Box>
}