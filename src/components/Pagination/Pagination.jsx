import * as React from 'react';
import { usePaginationContext } from 'context/pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from 'components/Box/Box';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { down } from 'styled-breakpoints';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4500',
    },
  },
});

export const PaginationMUI = ({onClick}) => {
  const { page, setPage, totalPages } = usePaginationContext();

  const handleChangePage = (e, value) => {
    setPage(value);
  };

  const onlyMobile = useBreakpoint(down('mobile'));
  console.log(onlyMobile, "onlyMobile");
  
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
            size={onlyMobile ? "small" : "medium"}
            count={totalPages}
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </ThemeProvider>
    </Box>
  );
};