import { Hero } from "./Hero";
import { Footer } from "./Footer";
import {
  Box,
  Button,
  Card,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Tilt from "react-parallax-tilt";

import { ReactLenis, useLenis } from "lenis/react";
import { useRef } from "react";

function Home({ setLocation }) {
  useLenis(() => {});

  const scopriRef = useRef(null);

  return (
    <div>
      <ReactLenis root />
      <Box>
        <Hero scopriRef={scopriRef} />
        <Box
          ref={scopriRef}
          sx={{
            paddingY: 12,
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <Container>
            <Tilt tiltReverse>
              <Card elevation={6} variant="outlined" sx={{ padding: 6 }}>
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <Typography display="flex" color="info" variant="h2">
                    Introduzione
                  </Typography>
                  <br />
                  <Typography textAlign="center" fontFamily="sans-serif">
                    Il gioco si basa interamente e si sviluppa in parallelo al
                    capolavoro di Miguel de Cervantes, scritto nel
                    ‘600,conosciuto come uno dei romanzi più famosi della storia
                    della letteratura: Don Chisciotte della Mancia.Il racconto
                    narra la vicenda di Don Chisciotte, un uomo che per colpa
                    della passione per i racconti cavallereschi, perde il
                    contatto con il mondo reale e decide di vivere secondo gli
                    antichi valori della cavalleria (giustizia, onore e difesa
                    dei deboli) in un mondo che ormai non crede più in questi
                    principi.Accanto a lui c’è Sancho Panza, il suo scudiero,
                    che rappresenta la voce della ragione.Attraverso la sua
                    pazzia, le sue speranze e le sue sconfitte, l’autore mette
                    in risalto il parallelismo tra sogno e realtà, facendoci
                    capire che i sogni, anche se ti fanno sembrare pazzo agli
                    occhi degli altri, sono il motivo per cui vale la pena
                    lottare.
                    <br /> <br />
                    Il gioco riprende le avventure, secondo noi, più
                    significative vissute da Don Chisciotte, dividendole in tre
                    livelli che raccontano i momenti più famosi del romanzo: La
                    serata al bordello con Dulcinea,Lo scontro con le pecore,La
                    lotta contro i mulini a vento.
                  </Typography>
                </Stack>
              </Card>
            </Tilt>
          </Container>
          <br />
          <br />
          <Container>
            <Stack direction="row" alignItems="center" gap={12}>
              <Box>
                <Typography display="flex" alignItems="end" variant="h3">
                  Livello&nbsp;
                  <Typography
                    color="primary"
                    variant="h2"
                    fontFamily="Times New Romans"
                  >
                    I
                  </Typography>
                  &nbsp;- Un Cavaliere al Bordello{" "}
                </Typography>
                <br />
                <Typography fontFamily="sans-serif">
                  Dove si trova nella storia: È il primo livello <br />
                  Come si vince: Si sconfiggono tutti i nemici <br />
                  Come si perde: Se la barra della salute va a zero <br />
                  <br />
                  Nel romanzo, Don Chisciotte è immerso nei suoi sogni
                  cavallereschi, si trova insieme a Sancho Panza davanti a
                  quello che secondo lui è un posto pieno di pericoli, un
                  bordello. Don Chisciotte lo immagina come un castello, e le
                  donne che vi lavorano per nobili dame (erano prostitute tra le
                  quali incontra la sua amata Dulcinea). All’entrata di questo
                  bordello Don Chisciotte , saluta con grande rispetto le due
                  prostitute all’ingresso, durante la notte, chiede all’oste di
                  nominarlo cavaliere e senza pensarci due volte, Don Chisciotte
                  si prepara a combattere contro chiunque gli sembri un nemico,
                  per difendere l'onore e la dignità di quelle che lui vede come
                  innocenti. Sancho Panza, che capisce benissimo come stanno le
                  cose, cerca di far ragionare il suo padrone, ma Don Chisciotte
                  non ne vuole sapere.
                  <br />
                  <br />
                  Nel gioco: Si entra nella locanda e si devono sconfiggere
                  tutti i nemici attivi e passivi grazie anche all'aiuto del
                  nostro scudiero sancho panza e se lo faremo senza morire
                  otterremo in ricompensa l’amata dulcinea che ci aiuterà a
                  vincere le prossime battaglie
                </Typography>
              </Box>
              <img alt="" width="30%" src="/sfondo_levels.png" />
            </Stack>
          </Container>
        </Box>
        <Paper sx={{ paddingY: 12, borderRadius: 0 }}>
          <Container>
            <Stack direction="row" gap={12} alignItems="center">
              <Box>
                <Typography
                  display="flex"
                  alignItems="end"
                  justifyContent="end"
                  variant="h3"
                >
                  Livello&nbsp;
                  <Typography
                    color="primary"
                    variant="h2"
                    fontFamily="Times New Romans"
                  >
                    II
                  </Typography>
                  &nbsp;- Missione Pecorina
                </Typography>
                <br />
                <Typography textAlign="right" fontFamily="sans-serif">
                  Dove si trova nella storia: Secondo livello <br />
                  Come si vince: Si fanno scappare tutte le pecore/nemici <br />
                  Come si perde: Se la barra della salute va a zero <br />
                  <br />
                  Nel romanzo, la vicenda delle pecore e dei pastori è uno degli
                  episodi più famosi del romanzo. Don Chisciotte e Sancho Panza
                  stanno viaggiando quando vedono una grande nuvola di polvere.
                  Il cavaliere, convinto che si tratti di eserciti che stanno
                  per combattere, immagina la vicenda come in un racconto
                  cavalleresco. In realtà, quella polvere è sollevata da greggi
                  di pecore con i loro pastori. Don Chisciotte però abbassa la
                  lancia e va all’attacco, credendo di combattere in una grande
                  guerra. I pastori, vedendolo colpire i loro animali, cercano
                  di fermarlo e gli tirano pietre, ferendolo e facendolo cadere
                  da cavallo. Quando Sancho gli fa notare che ha solo attaccato
                  delle pecore, Don Chisciotte non ci crede.
                  <br />
                  <br />
                  Nel gioco: ci ritroveremo in un'ampia area aperta con nemici
                  passivi(ovvero le pecore) che ostruiranno in nostro passaggio
                  e nemici attivi(i pastori),che ci attaccheranno, l'obiettivo
                  sarà riuscire a eliminare il gregge e i rispettivi pastori nel
                  minor tempo possibile
                </Typography>
              </Box>
              <img
                alt=""
                src="https://i.redd.it/p5l6eqp08t541.png"
                width={400}
              />
            </Stack>
          </Container>
        </Paper>
        <Box
          sx={{
            backgroundImage:
              "url(https://img.itch.zone/aW1nLzE4NTk3MTg5LmdpZg==/original/cR8nUi.gif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <Box
            sx={{
              paddingY: 12,
              background:
                "linear-gradient(-90deg, var(--mui-palette-background-default) 80%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <Container>
              <Typography display="flex" alignItems="end" variant="h3">
                Livello&nbsp;
                <Typography
                  color="primary"
                  variant="h2"
                  fontFamily="Times New Romans"
                >
                  III
                </Typography>
                &nbsp;- La Vendetta del Mulino
              </Typography>
              <br />
              <Typography fontFamily="sans-serif">
                Dove si trova nella storia: Livello finale <br />
                Come si vince: Si sconfigge il mulino a vento (boss finale){" "}
                <br />
                Come si perde: Se la barra della salute va a zero <br />
                <br />
                <br />
                Nel romanzo, Don Chisciotte e il suo fedele scudiero stanno
                attraversando una pianura della regione della Mancia in Spagna,
                quando la lontananza appaiono dei mulini a vento che Don
                Chisciotte, però, li scambia per giganti con lunghe braccia e
                decide di sfidarli per dimostrare il suo coraggio e compiere
                un’impresa da vero cavaliere. Sancho cerca di fargli capire che
                non si tratta di giganti, ma di mulini mossi dal vento, ma il
                cavaliere non gli crede e si butta all’attacco con la lancia.
                Quando colpisce la pala di un mulino, questa gira con forza,
                spezza la sua arma e lo scaraventa a terra insieme a Ronzinante.
                <br />
                <br />
                Nel gioco: Il nostro eroe affronterà un possente mulino a vento
                con un’ampia barra della vita e se riuscirà a sconfiggerlo
                riuscirà a terminare il gioco e gli spetteranno moltissime
                ricompense
              </Typography>
            </Container>
          </Box>
        </Box>
        <Paper sx={{ paddingY: 12, borderRadius: 0 }}>
          <Container>
            <Stack
              direction="row"
              gap={12}
              alignItems="center"
              justifyContent="space-around"
            >
              <Button
                sx={{ fontFamily: "sans-serif" }}
                size="large"
                variant="outlined"
                onClick={() => setLocation("/comandi")}
              >
                Comandi
              </Button>
              <Typography>Scegli come vuoi proseguire</Typography>
              <Button
                sx={{ fontFamily: "sans-serif" }}
                size="large"
                variant="outlined"
                onClick={() => setLocation("/personaggi")}
              >
                Personaggi
              </Button>
            </Stack>
          </Container>
        </Paper>

        <Footer />
      </Box>
    </div>
  );
}

export default Home;
