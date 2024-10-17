import { Box, styled } from '@mui/material'

const PostsSkeletonContainer = styled(Box)(({ theme }) => ({
    '&.MuiBox-root': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        gap: theme.spacing(3),

        '&> .skeleton': {
            transform: 'unset',
            transformOrigin: 'unset',
            width: '100%',
            height: '200px',
            borderRadius: theme.spacing(1),
        },
    },
}))

export default PostsSkeletonContainer
