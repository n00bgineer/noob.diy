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
        '&> .cta-container': {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: theme.spacing(1),

            '&> .link': {
                padding: theme.spacing(2),
                borderRadius: '50%',
            },

            '&> .link-selected': {
                paddingTop: theme.spacing(1),
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                paddingBottom: theme.spacing(1),
                borderRadius: theme.spacing(4),
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
            },
        },
    },
}))

export default HeaderContainer
