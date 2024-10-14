import { Box, styled } from '@mui/material'

const AppLayoutContainer = styled(Box)(({ theme }) => ({
    '&.MuiBox-root': {
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: theme.spacing(2),
        boxSizing: 'border-box',
    },
}))

export default AppLayoutContainer
