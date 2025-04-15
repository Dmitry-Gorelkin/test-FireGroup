import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { GlobalStyle } from './style/GlobalStyle.js';
import { theme } from './style/theme.js';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
