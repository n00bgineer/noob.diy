import { Box, Typography } from '@mui/material'
import { Link, routes } from '@redwoodjs/router'
import PageHeader from 'src/components/PageHeader/PageHeader'

import Posts from 'src/components/Post/Posts'

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

export const Loading = () => (
    <Box className="page">
        <PageHeader title="Feed" />
        <Box className="page-body page-body-non-success-cell">
            <Typography>Loading</Typography>
        </Box>
    </Box>
)

export const Empty = () => {
    return (
        <Box className="page">
            <PageHeader title="Feed" />
            <Box className="page-body page-body-non-success-cell">
                <div className="rw-text-center">
                    No posts yet.{' '}
                    <Link to={routes.newPost()} className="rw-link">
                        Create one?
                    </Link>
                </div>
            </Box>
        </Box>
    )
}

export const Failure = ({ error }) => (
    <Box className="page">
        <PageHeader title="Feed" />
        <Box className="page-body page-body-non-success-cell">
            <Typography>Something went wrong</Typography>
            <Typography>{error?.message}</Typography>
        </Box>
    </Box>
)

export const Success = ({ posts }) => {
    return <Posts posts={posts} />
}
