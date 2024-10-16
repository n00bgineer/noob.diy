import { Card, styled } from '@mui/material'

const InfoCardContainer = styled(Card)(({ theme }) => ({
    '&.MuiCard-root.card': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderRadius: theme.spacing(3),
        border: `1px solid ${theme.palette.divider}`,

        '&.card-title': {
            marginBottom: theme.spacing(3),
        },
        '&.card-small': {
            height: '100px',
        },
        '&.card-normal': {
            height: '200px',
        },
        '&.card-large': {
            height: '300px',
        },
        '&.card-padding': {
            padding: theme.spacing(3),
        },
        '&.card-center': {
            justifyContent: 'center',
            alignItems: 'center',
        },
        '&.card-w1': {
            flex: 1,
            width: '25%',
        },
        '&.card-w2': {
            flex: 2,
            width: '50%',
        },
        '&.card-w3': {
            flex: 3,
            width: '75%',
        },
        '&.card-wfull': {
            width: '100%',
        },
        '& .card-logo': {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            marginBottom: '0.75rem',
            display: 'block',
        },
        '& .card-title': {
            fontWeight: '500',
            color: theme.palette.primary.main,
            marginBottom: '0.25rem',
            display: 'block',
        },
        '& .card-description': {
            fontWeight: '400',
            color: theme.palette.primary[700],
            marginBottom: '0.75rem',
            display: 'block',
            whiteSpace: 'pre-wrap',
        },
        '& .card-button': {
            borderRadius: theme.spacing(1),
            padding: '4px 8px',
            textTransform: 'unset',
            fontSize: '12px',
            boxShadow: 'unset',
        },
    },
    [theme.breakpoints.down('md')]: {
        '&.MuiCard-root.card': {
            '&.card-w1': {
                flex: 'unset',
                width: '100%',
            },
            '&.card-w2': {
                flex: 'unset',
                width: '100%',
            },
            '&.card-w3': {
                flex: 'unset',
                width: '100%',
            },
        },
    },
}))

export default InfoCardContainer
