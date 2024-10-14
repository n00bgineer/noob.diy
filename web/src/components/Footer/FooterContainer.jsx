import { Box, styled } from '@mui/material'

const FooterContainer = styled(Box)(() => ({
    '&.MuiBox-root': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export default FooterContainer
