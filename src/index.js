import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { PaginationProvider } from './context/pagination';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from 'globalStyles/theme';
import { App } from 'components/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter basename="/movies">
        <ThemeProvider theme={theme}>
          <PaginationProvider>
            <App />
          </PaginationProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>  
  </React.StrictMode>
);

