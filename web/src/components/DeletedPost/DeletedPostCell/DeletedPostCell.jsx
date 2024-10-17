import DeletedPost from 'src/components/DeletedPost/DeletedPost'

export const QUERY = gql`
    query FindDeletedPostById($id: String!) {
        deletedPost: deletedPost(id: $id) {
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

export const Empty = () => <div>DeletedPost not found</div>

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ deletedPost }) => {
    return <DeletedPost deletedPost={deletedPost} />
}
