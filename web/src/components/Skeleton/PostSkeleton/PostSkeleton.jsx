import { Box, Skeleton } from '@mui/material'
import PostSkeletonContainer from './PostSkeletonContainer'

const PostSkeleton = () => {
    return (
        <PostSkeletonContainer>
            <Box className="post-header-skeleton-container">
                <Skeleton
                    animation="wave"
                    variant="circular"
                    className="avatar-skeleton"
                />
                <Box className="post-header-account-details-container">
                    <Skeleton
                        animation="wave"
                        variant="text"
                        className="account-name-skeleton"
                    />
                    <Skeleton
                        animation="wave"
                        variant="text"
                        className="account-description-skeleton"
                    />
                </Box>
            </Box>
            <Skeleton
                animation="wave"
                variant="rectangular"
                className="large-paragraph-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="text"
                className="text-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="text"
                className="text-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="text"
                className="text-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="rectangular"
                className="large-paragraph-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="text"
                className="text-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="text"
                className="text-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="text"
                className="text-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="rectangular"
                className="large-paragraph-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="text"
                className="text-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="text"
                className="text-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="text"
                className="text-skeleton"
            />
            <Skeleton
                animation="wave"
                variant="rectangular"
                className="large-paragraph-skeleton"
            />
        </PostSkeletonContainer>
    )
}

export default PostSkeleton
