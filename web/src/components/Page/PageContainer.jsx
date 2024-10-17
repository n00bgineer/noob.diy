import { Box, styled } from '@mui/material'

const PageContainer = styled(Box)(({ theme }) => ({
    '&.MuiBox-root': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
        flexGrow: '1',

        '&> .page-body': {
            flexGrow: '1',
            width: '100%',
            marginTop: '24px',
        },

        '&> .page-body-non-success-cell': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 'unset',

            '&> .title': {
                fontWeight: '600',
            },
            '&> .description': {
                fontWeight: '400',
            },
        },

        '& .page-body-non-success-image': {
            width: '250px',
        },
    },

    [theme.breakpoints.down('md')]: {
        '&.MuiBox-root': {
            '& .page-body-non-success-image': {
                width: '50%',
            },
        },
    },
}))

export default PageContainer
