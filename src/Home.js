import './App.css';
import { Hero } from './Hero';
import { Footer } from './Footer';
import { Box, Button, Card, Container, Paper, Stack, Typography } from '@mui/material';

import { ReactLenis, useLenis } from 'lenis/react'
import { useRef } from 'react';

function Home() {
  useLenis(() => {})

  const scopriRef = useRef(null)


  return (
    <div>
      <ReactLenis root />
      <Box>
        <Hero scopriRef={scopriRef} />
        <Box sx={{ paddingY: 12, backgroundColor: (theme) => theme.palette.background.default }}>
          <Container>
            <Stack direction='row' alignItems='center' gap={12}>
              <Box ref={scopriRef}>
                <Typography display='flex' alignItems='end' variant='h3'>Livello&nbsp;<Typography color='primary' variant='h2' fontFamily='Times New Romans'>I</Typography>&nbsp;- Un Cavaliere al Motel </Typography>
                <br />
                <Typography fontFamily='sans-serif'>
                  Don Chisciotte, ormai completamente immerso nei suoi sogni da cavaliere, arriva con il suo scudiero Sancho Panza davanti a quello che, secondo lui, è un luogo pieno di pericoli: un bordello. Per il cavaliere, che vede solo la realtà delle sue fantasie, questo posto non è altro che un covo di cattivi e buoni da essere salvati. Don Chisciotte lo immagina come un nascondiglio di ingiustizie, dove donne innocenti sono trattate male e devono essere protette.
                  Non appena entra, il cavaliere pensa di dover difendere delle donne in pericolo, trasformando quello che è un semplice bordello in una scena di battaglia. La sua mente è talmente distorta che non vede la realtà, e per lui, le donne che si trovano lì sono principesse prigioniere, vittime di uomini cattivi. Senza pensarci due volte, Don Chisciotte si prepara a combattere contro chiunque gli sembri un nemico per difendere l'onore e la dignità di quelle che lui vede come innocenti.
                  Sancho Panza, che capisce benissimo la realtà, cerca di far ragionare il suo padrone, ma Don Chisciotte non ne vuole sapere.

                </Typography>
              </Box>
              <img alt='' width='30%' src='/sfondo_levels.png' />
            </Stack>

          </Container>
        </Box>
        <Paper sx={{ paddingY: 12, borderRadius: 0 }}>
          <Container>
            <Stack direction='row' gap={12} alignItems='center'>
              <Box>
                <Typography display='flex' alignItems='end' justifyContent='end' variant='h3'>Livello&nbsp;<Typography color='primary' variant='h2' fontFamily='Times New Romans'>II</Typography>&nbsp;- Missione Pecorina</Typography>
                <br />
                <Typography textAlign='right' fontFamily='sans-serif'>
                  Don Chisciotte e Sancho si imbattono in un gruppo di pecore che stanno tranquillamente pascolando, Don Chisciotte vede solo nemici. Lui vede quelle pecore come soldati di un esercito pronto a invadere il suo regno immaginario, e lui, come sempre, deve combattere il male. Don Chisciotte si lancia contro le pecore, pronto a sconfiggere l'armata nemica e il male.Sancho, divertito e preoccupato, cerca di fermarlo, ma il cavaliere è troppo preso dalle sue allucinazioni. Per lui, ogni battaglia è una questione di onore, e non importa che si tratti di un branco di pecore inoffensive.
                  Quando le pecore, spaventate, si disperdono nel campo, Don Chisciotte si sente come un eroe che ha appena vinto una grande battaglia, anche se, in realtà, non c'era nessun nemico da sconfiggere. Sancho non può fare a meno di ridere della situazione, ma cerca di non farlo vedere, mentre cerca di riportare il suo padrone alla realtà.
                </Typography>
              </Box>
              <img alt='' src='https://i.redd.it/p5l6eqp08t541.png' width={400} />
            </Stack>
          </Container>
        </Paper>
        <Box sx={{ backgroundImage: 'url(https://img.itch.zone/aW1nLzE4NTk3MTg5LmdpZg==/original/cR8nUi.gif)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
          <Box sx={{ paddingY: 12, background: 'linear-gradient(-90deg, var(--mui-palette-background-default) 80%, rgba(255, 255, 255, 0) 100%)' }}>

            <Container >
              <Typography display='flex' alignItems='end' variant='h3'>Livello&nbsp;<Typography color='primary' variant='h2' fontFamily='Times New Romans'>III</Typography>&nbsp;- La Vendetta del Mulino</Typography>
              <br />
              <Typography fontFamily='sans-serif'>
                Don Chisciotte e il suo fido scudiero si imbattono in uno dei momenti più celebri e drammatici del loro viaggio: i mulini a vento. Quello che per qualsiasi persona sarebbe stato un semplice campo con delle strutture utili per macinare il grano, per Don Chisciotte sono enormi mostri di acciaio e pietra, nemici malvagi pronti a distruggere il regno che lui crede di dover proteggere. Senza esitazione, Don Chisciotte decide di affrontarli. Con la sua spada sguainata e il cuore gonfio di coraggio, si lancia all'attacco, convinto che quei mulini siano enormi giganti da sconfiggere, come nelle più belle leggende di cavalleria.
                Sancho, che conosce la realtà, cerca di fermarlo, spiegandogli che non sono mostri, ma semplici mulini a vento, ma Don Chisciotte è troppo preso dalla sua visione eroica per ascoltarlo. E così, il cavaliere si getta contro il primo "gigante" con tutta la forza che ha, finendo però travolto e ridotto in polvere dalla girante del mulino.
              </Typography>
            </Container>
          </Box>
        </Box>
        <Paper sx={{ paddingY: 12, borderRadius: 0 }}>
          <Container>
            <Stack direction='row' gap={12} alignItems='center' justifyContent='space-around'>
                <Button sx={{ fontFamily: 'sans-serif' }} size='large' variant='outlined'>Comandi</Button>
                <Typography>Scegli come vuoi proseguire</Typography>
                <Button sx={{ fontFamily: 'sans-serif' }} size='large' variant='outlined' href='/personaggi'>Personaggi</Button>
            </Stack>
          </Container>
        </Paper>

        <Footer />
      </Box>
    </div>
  );
}

export default Home;
