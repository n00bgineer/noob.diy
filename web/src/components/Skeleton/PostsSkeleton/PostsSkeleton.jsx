import { Skeleton } from '@mui/material'
import PostsSkeletonContainer from './PostsSkeletonContainer'

const PostsSkeleton = ({ count = 3 }) => {
    return (
        <PostsSkeletonContainer>
            {Array.from({ length: count }, (_, index) => index).map((index) => {
                return (
                    <Skeleton
                        key={index + 1}
                        animation="wave"
                        variant="rectangular"
                        className="skeleton"
                    />
                )
            })}
        </PostsSkeletonContainer>
    )
}

export default PostsSkeleton
