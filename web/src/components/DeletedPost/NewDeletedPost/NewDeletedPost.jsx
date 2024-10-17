import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import DeletedPostForm from 'src/components/DeletedPost/DeletedPostForm'

const CREATE_DELETED_POST_MUTATION = gql`
    mutation CreateDeletedPostMutation($input: CreateDeletedPostInput!) {
        createDeletedPost(input: $input) {
            id
        }
    }
`

const NewDeletedPost = () => {
    const [createDeletedPost, { loading, error }] = useMutation(
        CREATE_DELETED_POST_MUTATION,
        {
            onCompleted: () => {
                toast.success('DeletedPost created')
                navigate(routes.deletedPosts())
            },
            onError: (error) => {
                toast.error(error.message)
            },
        }
    )

    const onSave = (input) => {
        createDeletedPost({ variables: { input } })
    }

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New DeletedPost
                </h2>
            </header>
            <div className="rw-segment-main">
                <DeletedPostForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    )
}

export default NewDeletedPost
