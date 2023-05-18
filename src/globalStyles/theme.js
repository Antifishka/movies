import { createTheme } from 'styled-breakpoints'; 

export const themeStyles = {
    colors: {
        accent: '#ff4500',
    },
    space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
    fontSizes: {
        s: '14px',
        m: '16px',
    }, 
    transition: {
        main: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    breakpoints: ['320px', '768px', '960px'],
}

const themeBreakpoints = createTheme({
    mobile: '320px',
    tablet: '768px',
    pc: '960px',
});

export const theme = { ...themeStyles, ...themeBreakpoints };