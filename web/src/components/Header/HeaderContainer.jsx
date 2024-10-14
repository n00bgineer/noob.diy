import { Box, styled } from '@mui/material'

const HeaderContainer = styled(Box)(({ theme }) => ({
    '&.MuiBox-root': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '&> .appLogo': {
            width: theme.spacing(8),
        },
    },
}))

export default HeaderContainer
