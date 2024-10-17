import { Box, Typography } from '@mui/material'
import Posts from 'src/components/Post/Posts'
import PostsSkeleton from 'src/components/Skeleton/PostsSkeleton/PostsSkeleton'
import EmptyImage from 'src/assets/Empty.png'
import FailureImage from 'src/assets/Failure1.png'

export const QUERY = gql`
    query FindPosts {
        posts {
            id
            content
            slug
            createdAt
            updatedAt
            published
        }
    }
`

export const Loading = () => {
    return (
        <Box className="page-body">
            <PostsSkeleton />
        </Box>
    )
}

export const Empty = () => {
    return (
        <Box className="page-body page-body-non-success-cell">
            <img
                src={EmptyImage}
                alt="Empty image"
                className="page-body-non-success-image"
            />
            <Typography variant="h5" className="title">
                Zero posts
            </Typography>
            <Typography variant="body2" className="description">
                Please check again later
            </Typography>
        </Box>
    )
}

export const Failure = () => (
    <Box className="page-body page-body-non-success-cell">
        <img
            src={FailureImage}
            alt="Empty image"
            className="page-body-non-success-image"
        />
        <Typography variant="h5" className="title">
            Something went wrong
        </Typography>
        <Typography variant="body2" className="description">
            Please refresh or check again later
        </Typography>
    </Box>
)

export const Success = ({ posts }) => <Posts posts={posts} />
