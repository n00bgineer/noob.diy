// IMPORTING PACKAGES/MODULES
import { createTheme } from '@mui/material/styles'

// DARK THEME
const DarkTheme = createTheme({
    shape: {
        borderRadius: '8px',
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#E0E0E0', // Light grey for primary color
            dark: '#BDBDBD', // Slightly darker grey for variations
            50: 'rgba(224, 224, 224, 0.05)',
            100: 'rgba(224, 224, 224, 0.1)',
            200: 'rgba(224, 224, 224, 0.2)',
            300: 'rgba(224, 224, 224, 0.3)',
            400: 'rgba(224, 224, 224, 0.4)',
            500: 'rgba(224, 224, 224, 0.5)',
            600: 'rgba(224, 224, 224, 0.6)',
            700: 'rgba(224, 224, 224, 0.7)',
            800: 'rgba(224, 224, 224, 0.8)',
            900: 'rgba(224, 224, 224, 0.9)',
            contrastText: '#000',
        },
        grey: {
            main: '#EDE7E3',
            dark: '#aba59f',
            50: '#fbf8f7',
            100: '#f4eee9',
            200: '#ebe7e4',
            300: '#dcc0b8',
            400: '#d1a9a0',
            500: '#c5938a',
            600: '#b87c73',
            700: '#ac665c',
            800: '#a05045',
            900: '#93392e',
        },
        info: {
            main: 'rgba(2,136,209,1)',
            dark: '#01579b',
            50: 'rgba(2,136,209,0.05)',
            100: 'rgba(2,136,209,0.1)',
            200: 'rgba(2,136,209,0.2)',
            300: 'rgba(2,136,209,0.3)',
            400: 'rgba(2,136,209,0.4)',
            500: 'rgba(2,136,209,0.5)',
            600: 'rgba(2,136,209,0.6)',
            700: 'rgba(2,136,209,0.7)',
            800: 'rgba(2,136,209,0.8)',
            900: 'rgba(2,136,209,0.9)',
        },
        warning: {
            main: 'rgba(237,108,2,1)',
            dark: '#e65100',
            50: 'rgba(237,108,2,0.05)',
            100: 'rgba(237,108,2,0.1)',
            200: 'rgba(237,108,2,0.2)',
            300: 'rgba(237,108,2,0.3)',
            400: 'rgba(237,108,2,0.4)',
            500: 'rgba(237,108,2,0.5)',
            600: 'rgba(237,108,2,0.6)',
            700: 'rgba(237,108,2,0.7)',
            800: 'rgba(237,108,2,0.8)',
            900: 'rgba(237,108,2,0.9)',
        },
        error: {
            main: 'rgba(211,47,47,1)',
            dark: '#c62828',
            50: 'rgba(211,47,47,0.05)',
            100: 'rgba(211,47,47,0.1)',
            200: 'rgba(211,47,47,0.2)',
            300: 'rgba(211,47,47,0.3)',
            400: 'rgba(211,47,47,0.4)',
            500: 'rgba(211,47,47,0.5)',
            600: 'rgba(211,47,47,0.6)',
            700: 'rgba(211,47,47,0.7)',
            800: 'rgba(211,47,47,0.8)',
            900: 'rgba(211,47,47,0.9)',
        },
        background: {
            paper: '#424242',
            default: '#303030',
        },
    },
    typography: {
        fontFamily: '"JetBrains Mono", serif',
        fontSize: 16,
        h1: {
            fontFamily: '"JetBrains Mono", serif',
        },
        h2: {
            fontFamily: '"JetBrains Mono", serif',
        },
        h3: {
            fontFamily: '"JetBrains Mono", serif',
        },
        h4: {
            fontFamily: '"JetBrains Mono", serif',
        },
        h5: {
            fontFamily: '"JetBrains Mono", serif',
        },
        h6: {
            fontFamily: '"JetBrains Mono", serif',
        },
        body1: {
            fontFamily: '"JetBrains Mono", serif',
            fontSize: 16,
        },
        body2: {
            fontFamily: '"JetBrains Mono", serif',
            fontSize: 14,
        },
    },
})

export default DarkTheme
