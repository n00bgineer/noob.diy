// IMPORTING PACKAGES/MODULES
import { createTheme } from '@mui/material/styles'

// LIGHT THEME
const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FFA07A',
            dark: 'rgb(255, 99, 71)',
            50: 'rgba(255, 99, 71, 0.05)',
            100: 'rgba(255, 99, 71, 0.1)',
            200: 'rgba(255, 99, 71, 0.2)',
            300: 'rgba(255, 99, 71, 0.3)',
            400: 'rgba(255, 99, 71, 0.4)',
            500: 'rgba(255, 99, 71, 0.5)',
            600: 'rgba(255, 99, 71, 0.6)',
            700: 'rgba(255, 99, 71, 0.7)',
            800: 'rgba(255, 99, 71, 0.8)',
            900: 'rgba(255, 99, 71, 0.9)',
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
            paper: '#fff',
            default: '#FFFACD',
        },
    },
    typography: {
        fontFamily: 'JetBrains Mono',
        h1: {
            fontFamily: 'JetBrains Mono',
        },
        h2: {
            fontFamily: 'JetBrains Mono',
        },
        h3: {
            fontFamily: 'JetBrains Mono',
        },
        h4: {
            fontFamily: 'JetBrains Mono',
        },
        h5: {
            fontFamily: 'JetBrains Mono',
        },
        h6: {
            fontFamily: 'JetBrains Mono',
        },
        body1: {
            fontFamily: 'JetBrains Mono',
            fontSize: 16,
        },
        body2: {
            fontFamily: 'JetBrains Mono',
            fontSize: 14,
        },
        fontSize: 16,
    },
})

export default LightTheme
