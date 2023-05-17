import React from 'react';
import ReactDOM from 'react-dom/client';
import { PaginationProvider } from './context/pagination';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter basename="/movies">
        <PaginationProvider>
          <App />
        </PaginationProvider>
      </BrowserRouter>
    </StyledEngineProvider>  
  </React.StrictMode>
);

