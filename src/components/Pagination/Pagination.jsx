import * as React from 'react';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4500',
    },
  },
});

export const PaginationMUI = ( {page, pages, onClick} ) => {
  return (
    <Box position="absolute"
    bottom={0}
    left={0}
    right={0}
    display="flex"
    justifyContent="center"
    mb="20px">
      <ThemeProvider theme={theme}>
        <Stack spacing={3}>
          <Pagination
            color="primary" 
            shape="rounded"
            count={pages}
            page={page}
            onChange={onClick}
          />
        </Stack>
      </ThemeProvider>    
    </Box>
  );
}

PaginationMUI.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};