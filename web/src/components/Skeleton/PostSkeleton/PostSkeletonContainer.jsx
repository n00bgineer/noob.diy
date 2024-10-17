import { Box, styled } from '@mui/material'

const PostSkeletonContainer = styled(Box)(({ theme }) => ({
    '&.MuiBox-root': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        gap: theme.spacing(2),

        '&> .post-header-skeleton-container': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: theme.spacing(2),

            '&> .avatar-skeleton': {
                transform: 'unset',
                transformOrigin: 'unset',
                height: '60px',
                width: '60px',
            },

            '&> .post-header-account-details-container': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: theme.spacing(1),

                '&> .account-name-skeleton': {
                    fontSize: '1rem',
                    width: '200px',
                    transform: 'unset',
                    transformOrigin: 'unset',
                    borderRadius: theme.spacing(1),
                },

                '&> .account-description-skeleton': {
                    fontSize: '1rem',
                    width: '250px',
                    transform: 'unset',
                    transformOrigin: 'unset',
                    borderRadius: theme.spacing(1),
                },
            },
        },

        '&> .large-paragraph-skeleton': {
            transform: 'unset',
            transformOrigin: 'unset',
            width: '100%',
            height: '150px',
            borderRadius: theme.spacing(1),
        },

        '&> .text-skeleton': {
            transform: 'unset',
            transformOrigin: 'unset',
            width: '100%',
            fontSize: '1rem',
            borderRadius: theme.spacing(1),
        },
    },
}))

export default PostSkeletonContainer
