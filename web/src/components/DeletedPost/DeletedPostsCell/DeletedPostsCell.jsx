import { Link, routes } from '@redwoodjs/router'

import DeletedPosts from 'src/components/DeletedPost/DeletedPosts'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
    return (
        <div className="rw-text-center">
            No deletedPosts yet.{' '}
            <Link to={routes.newDeletedPost()} className="rw-link">
                Create one?
            </Link>
        </div>
    )
}

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ deletedPosts }) => {
    return <DeletedPosts deletedPosts={deletedPosts} />
}
