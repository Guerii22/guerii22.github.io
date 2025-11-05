import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { Masonry } from '@mui/lab'
import { useState } from "react";
import Tilt from 'react-parallax-tilt';
import PersonaggiList from './Personaggi.json'


export function Personaggi() {
    return <Box sx={{ backgroundImage: 'url(/sfondo_levels.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Container>
            <br />
            <br />
            <br />
            <Typography sx={{ textShadow: 'var(--mui-palette-background-default) 1px 0 10px' }} variant="h1">Personaggi</Typography>
            <br />
            <br />
            <br />
            <Masonry columns={2} spacing={6}>

                {PersonaggiList.map((personaggio, index) => <Personaggio {...personaggio} index={index} />)}
            </Masonry>
        </Container>
    </Box>
}

function Personaggio(personaggio) {
    const [isHover, setIsHover] = useState(false)

    return <Tilt tiltReverse><Card onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} elevation={ isHover ? 6 : 0 } sx={{ display: 'flex', boxShadow: isHover ? '0 0 30px #fbff7cb3' : '0 0 0px #fbff7cb3' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {personaggio.nome}
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontFamily='sans-serif'
                    component="div"
                    sx={{ color: 'text.secondary' }}
                >
                    {personaggio.descrizione}
                </Typography>
            </CardContent>
        </Box>
        <CardMedia
            component="img"
            sx={{ paddingY: 2, paddingX: 6, height: 150, width: 150 }}
            image={personaggio.sprite}
        />
    </Card>
    </Tilt>
}