import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DeletedPostForm from 'src/components/DeletedPost/DeletedPostForm'

export const QUERY = gql`
    query EditDeletedPostById($id: String!) {
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

const UPDATE_DELETED_POST_MUTATION = gql`
    mutation UpdateDeletedPostMutation(
        $id: String!
        $input: UpdateDeletedPostInput!
    ) {
        updateDeletedPost(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ deletedPost }) => {
    const [updateDeletedPost, { loading, error }] = useMutation(
        UPDATE_DELETED_POST_MUTATION,
        {
            onCompleted: () => {
                toast.success('DeletedPost updated')
                navigate(routes.deletedPosts())
            },
            onError: (error) => {
                toast.error(error.message)
            },
        }
    )

    const onSave = (input, id) => {
        updateDeletedPost({ variables: { id, input } })
    }

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit DeletedPost {deletedPost?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <DeletedPostForm
                    deletedPost={deletedPost}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    )
}
