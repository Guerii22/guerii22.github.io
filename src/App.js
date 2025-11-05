import Home from './Home';
import { Personaggi } from './Personaggi';
import { AppBar, Box, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { Comandi } from './Comandi';
import { Caratteristiche } from './Caratteristiche'

function App() {
  const [location, setLocation] = useState('/')

  return <Box>
    <AppBar elevation={0} position='static' sx={{ backgroundColor: '#0000002b' }}>
      <Box padding={2}>
        <Stack direction='row' gap={6}>
          <Button sx={{ fontFamily: 'sans-serif' }} variant={location === '/' ? 'contained' : 'text'} onClick={() => setLocation('/')}>Home</Button>
          <Button sx={{ fontFamily: 'sans-serif' }} variant={location === '/personaggi' ? 'contained' : 'text'} onClick={() => setLocation('/personaggi')}>Personaggi</Button>
          <Button sx={{ fontFamily: 'sans-serif' }} variant={location === '/caratteristiche' ? 'contained' : 'text'} onClick={() => setLocation('/caratteristiche')}>Caratteristiche Tecniche</Button>
          <Button sx={{ fontFamily: 'sans-serif' }} variant={location === '/comandi' ? 'contained' : 'text'} onClick={() => setLocation('/comandi')}>Comandi</Button>
        </Stack>
      </Box>
    </AppBar>

    {renderLocation(location, setLocation)}

  </Box>
}

function renderLocation(location, setLocation) {
  switch (location) {
    case '/':
      return <Home setLocation={setLocation} />
    case '/personaggi':
      return <Personaggi />
    case '/comandi':
      return <Comandi />
    case '/caratteristiche':
      return <Caratteristiche />
    default:
      return <Home setLocation={setLocation} />
  }
}

export default App;
