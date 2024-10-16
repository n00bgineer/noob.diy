import { Box, styled } from '@mui/material'

const HomePageContainer = styled(Box)(({ theme }) => ({
    '&.MuiBox-root': {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'flex-start',
        gap: theme.spacing(3),

        '& .name': {
            fontWeight: '900',
        },

        // CARD STYLES
        '& .card-horizontal-container': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: theme.spacing(6),
            width: '100%',
            flexWrap: 'wrap',
            marginBottom: theme.spacing(1),
        },

        '& .full-image': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },

        '& .map-location': {
            borderRadius: theme.spacing(1),
            padding: '4px 8px',
            textTransform: 'unset',
            fontSize: '12px',
            boxShadow: 'unset',
            background: 'rgba(255, 255, 255, 0.6)',
            color: 'rgba(0,0,0)',
            bottom: '16px',
            left: '16px',
            position: 'absolute',
            fontWeight: 'bold',
        },
    },
}))

export default HomePageContainer
