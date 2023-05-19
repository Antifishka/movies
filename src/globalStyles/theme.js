import { createTheme } from 'styled-breakpoints'; 

export const themeStyles = {
    colors: {
        mainText: '#373737',
        secondaryText: '#FFFFFF',
        accent: '#ff4500',
    },
    space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
    fontSizes: {
        xs: '12px',
        s: '14px',
        m: '16px',
        l: '18px',
    }, 
    fontWeights: {
        normal: 400,
        medium: 500,
        semiBold: 600,
    },
    lineHeights: {
        text: 1.2,
    },
    sizes: {
        maxWidth: '960px',
    },
    borders: {
        normal: '1px solid #373737',
    },
    radii: {
        normal: '4px',
        input: '8px',
    },
    shadows: {
        card: '0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%), 1px 4px 6px rgb(0 0 0 / 16%)',
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