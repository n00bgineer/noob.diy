import { Box, styled } from '@mui/material'

const FooterContainer = styled(Box)(({ theme }) => ({
    '&.MuiBox-root': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(3),
    },
}))

export default FooterContainer
