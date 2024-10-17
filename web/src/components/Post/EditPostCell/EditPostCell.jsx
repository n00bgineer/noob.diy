import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PostForm from 'src/components/Post/PostForm'

export const QUERY = gql`
    query EditPostById($id: String!) {
        post: post(id: $id) {
            id
            content
            slug
            createdAt
            updatedAt
            published
        }
    }
`

const UPDATE_POST_MUTATION = gql`
    mutation UpdatePostMutation($id: String!, $input: UpdatePostInput!) {
        updatePost(id: $id, input: $input) {
            id
            content
            slug
            createdAt
            updatedAt
            published
        }
    }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ post }) => {
    const [updatePost, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
        onCompleted: () => {
            toast.success('Post updated')
            navigate(routes.feed())
        },
        onError: (error) => {
            toast.error(error.message)
        },
    })

    const onSave = (input, id) => {
        updatePost({ variables: { id, input } })
    }

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    Edit Post {post?.id}
                </h2>
            </header>
            <div className="rw-segment-main">
                <PostForm
                    post={post}
                    onSave={onSave}
                    error={error}
                    loading={loading}
                />
            </div>
        </div>
    )
}
