import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_DELETED_POST_MUTATION = gql`
    mutation DeleteDeletedPostMutation($id: String!) {
        deleteDeletedPost(id: $id) {
            id
        }
    }
`

const DeletedPost = ({ deletedPost }) => {
    const [deleteDeletedPost] = useMutation(DELETE_DELETED_POST_MUTATION, {
        onCompleted: () => {
            toast.success('DeletedPost deleted')
            navigate(routes.deletedPosts())
        },
        onError: (error) => {
            toast.error(error.message)
        },
    })

    const onDeleteClick = (id) => {
        if (
            confirm('Are you sure you want to delete deletedPost ' + id + '?')
        ) {
            deleteDeletedPost({ variables: { id } })
        }
    }

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        DeletedPost {deletedPost.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{deletedPost.id}</td>
                        </tr>
                        <tr>
                            <th>Content</th>
                            <td>{deletedPost.content}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(deletedPost.createdAt)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(deletedPost.updatedAt)}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{deletedPost.slug}</td>
                        </tr>
                        <tr>
                            <th>Deleted at</th>
                            <td>{timeTag(deletedPost.deletedAt)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editDeletedPost({ id: deletedPost.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(deletedPost.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    )
}

export default DeletedPost
