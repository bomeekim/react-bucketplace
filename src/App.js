import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import Header from './layouts/Header';
import Cart from './views/Cart';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// TODO Theme
const theme = createTheme({
  spacing: 1,
  palette: {
    primary: {
      main: '#35C5F0',
    },
    white: '#fff'
  }
});

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: '#F7F9FA' }}>
          <Header />
          {/*TODO 스크롤 고정 이슈*/}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
              position: 'relative',
              mt: 90,
              mx: 60,
            }}
          >
            <Container
              maxWidth="xl"
              sx={{ pb: 50 }}
            >
              <Cart />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
