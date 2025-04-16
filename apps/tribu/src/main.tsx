import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './data/store/app_store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import colors from './utils/styles/colors.module.scss';
import App from './app/app';
import { LoadingBarContainer } from 'react-top-loading-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Outfit',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: '#E0C2FF',
      light: colors.white,
      dark: colors.gray,
      contrastText: '#47008F',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LoadingBarContainer>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </Provider>
        </LoadingBarContainer>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
