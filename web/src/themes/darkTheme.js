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
        secondary: {
            main: '#000000',
            dark: '#000000',
            50: 'rgba(0, 0, 0, 0.05)',
            100: 'rgba(0, 0, 0, 0.1)',
            200: 'rgba(0, 0, 0, 0.2)',
            300: 'rgba(0, 0, 0, 0.3)',
            400: 'rgba(0, 0, 0, 0.4)',
            500: 'rgba(0, 0, 0, 0.5)',
            600: 'rgba(0, 0, 0, 0.6)',
            700: 'rgba(0, 0, 0, 0.7)',
            800: 'rgba(0, 0, 0, 0.8)',
            900: 'rgba(0, 0, 0, 0.9)',
            contrastText: '#E0E0E0',
        },
        grey: {
            main: '#9E9E9E', // Standard grey
            dark: '#616161', // Dark grey
            50: '#FAFAFA', // Lightest grey
            100: '#F5F5F5', // Very light grey
            200: '#EEEEEE', // Light grey
            300: '#E0E0E0', // Medium light grey
            400: '#BDBDBD', // Medium grey
            500: '#9E9E9E', // Standard grey
            600: '#757575', // Medium dark grey
            700: '#616161', // Dark grey
            800: '#424242', // Darker grey
            900: '#212121', // Darkest grey
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
        body3: {
            fontFamily: '"JetBrains Mono", serif',
            fontSize: 12,
            display: 'block',
        },
    },
})

export default DarkTheme
