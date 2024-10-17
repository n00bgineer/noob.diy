import DeletedPosts from 'src/components/DeletedPost/DeletedPosts'
import PostsSkeleton from 'src/components/Skeleton/PostsSkeleton/PostsSkeleton'
import EmptyImage from 'src/assets/logo.png'
import FailureImage from 'src/assets/Failure.png'
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
                No deleted posts found
            </Typography>
            <Typography variant="body2" className="description">
                Your deleted posts will be retained for 30 days
                <br />
                (unless you deleted them first)
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
