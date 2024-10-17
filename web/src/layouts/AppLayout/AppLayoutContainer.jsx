import { Box, styled } from '@mui/material'

const AppLayoutContainer = styled(Box)(({ theme }) => ({
    '&.MuiBox-root': {
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        overflow: 'auto',
    },
}))

export default AppLayoutContainer
