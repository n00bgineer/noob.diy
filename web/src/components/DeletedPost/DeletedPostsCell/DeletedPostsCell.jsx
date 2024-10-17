import DeletedPosts from 'src/components/DeletedPost/DeletedPosts'
import PostsSkeleton from 'src/components/Skeleton/PostsSkeleton/PostsSkeleton'
import EmptyImage from 'src/assets/Empty1.png'
import FailureImage from 'src/assets/Failure1.png'
import { Box, Typography } from '@mui/material'

export const QUERY = gql`
    query FindDeletedPosts {
        deletedPosts {
            id
            content
            createdAt
            updatedAt
            slug
            deletedAt
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
                Zero deleted posts
            </Typography>
            <Typography variant="body2" className="description">
                Deleted posts will be retained for 30 days
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

export const Success = ({ deletedPosts }) => {
    return <DeletedPosts deletedPosts={deletedPosts} />
}
