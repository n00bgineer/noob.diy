import { Box, styled } from '@mui/material'

const AppLayoutContainer = styled(Box)(() => ({
    '&.MuiBox-root': {
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',
    },
}))

export default AppLayoutContainer
