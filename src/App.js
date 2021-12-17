import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Header from './layouts/Header';
import Cart from './views/Cart';
import './App.css';

// TODO Theme
const theme = createTheme({
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="xl" sx={{ mt: 10, mb: 4 }}>
            <Cart />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
