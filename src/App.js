import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Home from './Home';
import { Personaggi } from './personaggi/Personaggi';
import { AppBar, Box, Button, Stack } from '@mui/material';

function App() {
  const location = useLocation()

  return <Box>
    <AppBar elevation={0} position='static' sx={{ backgroundColor: '#0000002b' }}>
      <Box padding={2}>
        <Stack direction='row' gap={6}>
          <Button sx={{ fontFamily: 'sans-serif' }} variant={ location.pathname === '/'? 'contained' : 'text' } href='/'>Home</Button>
          <Button sx={{ fontFamily: 'sans-serif' }} variant={ location.pathname === '/personaggi'? 'contained' : 'text' } href='/personaggi'>Personaggi</Button>
        </Stack>
      </Box>
    </AppBar>

    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/personaggi' Component={Personaggi} />
    </Routes>

  </Box>
}

export default App;
