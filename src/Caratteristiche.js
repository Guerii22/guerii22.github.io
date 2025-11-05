import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Masonry } from '@mui/lab'
import { useState } from "react";
import Tilt from 'react-parallax-tilt';
import CaratteristicheList from './Caratteristiche.json'

export function Caratteristiche() {
    return <Box sx={{ backgroundImage: 'url(/caratteristiche.webp)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <Container>
            <br />
            <br />
            <br />
            <Typography sx={{ textShadow: 'var(--mui-palette-background-default) 1px 0 10px' }} variant="h1">Caratteristiche Tecniche</Typography>
            <br />
            <br />
            <br />
            <Masonry columns={1} spacing={6}>

                {CaratteristicheList.map((personaggio, index) => <Caratteristica {...personaggio} index={index} />)}
            </Masonry>
        </Container>
    </Box>
    
}

function Caratteristica(caratteristica) {
    const [isHover, setIsHover] = useState(false)

    return <Tilt tiltReverse><Card onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} elevation={ isHover ? 6 : 0 } sx={{ display: 'flex', boxShadow: isHover ? '0 0 30px #fbff7cb3' : '0 0 0px #fbff7cb3' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {caratteristica.nome}
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontFamily='sans-serif'
                    component="div"
                    sx={{ color: 'text.secondary' }}
                >
                    {caratteristica.descrizione}
                    
                </Typography>
            </CardContent>
        </Box>
        {/* <CardMedia
            component="img"
            sx={{ paddingY: 2, paddingX: 6 }}
            image={caratteristica.sprite}
        /> */}
    </Card></Tilt>
}