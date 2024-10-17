import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/DeletedPost/DeletedPostsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_DELETED_POST_MUTATION = gql`
    mutation DeleteDeletedPostMutation($id: String!) {
        deleteDeletedPost(id: $id) {
            id
        }
    }
`

const DeletedPostsList = ({ deletedPosts }) => {
    const [deleteDeletedPost] = useMutation(DELETE_DELETED_POST_MUTATION, {
        onCompleted: () => {
            toast.success('DeletedPost deleted')
        },
        onError: (error) => {
            toast.error(error.message)
        },
        // This refetches the query on the list page. Read more about other ways to
        // update the cache over here:
        // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
        refetchQueries: [{ query: QUERY }],
        awaitRefetchQueries: true,
    })

    const onDeleteClick = (id) => {
        if (
            confirm('Are you sure you want to delete deletedPost ' + id + '?')
        ) {
            deleteDeletedPost({ variables: { id } })
        }
    }

    return (
        <div className="rw-segment rw-table-wrapper-responsive">
            <table className="rw-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Content</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>Slug</th>
                        <th>Deleted at</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {deletedPosts.map((deletedPost) => (
                        <tr key={deletedPost.id}>
                            <td>{truncate(deletedPost.id)}</td>
                            <td>{truncate(deletedPost.content)}</td>
                            <td>{timeTag(deletedPost.createdAt)}</td>
                            <td>{timeTag(deletedPost.updatedAt)}</td>
                            <td>{truncate(deletedPost.slug)}</td>
                            <td>{timeTag(deletedPost.deletedAt)}</td>
                            <td>
                                <nav className="rw-table-actions">
                                    <Link
                                        to={routes.deletedPost({
                                            id: deletedPost.id,
                                        })}
                                        title={
                                            'Show deletedPost ' +
                                            deletedPost.id +
                                            ' detail'
                                        }
                                        className="rw-button rw-button-small"
                                    >
                                        Show
                                    </Link>
                                    <Link
                                        to={routes.editDeletedPost({
                                            id: deletedPost.id,
                                        })}
                                        title={
                                            'Edit deletedPost ' + deletedPost.id
                                        }
                                        className="rw-button rw-button-small rw-button-blue"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        title={
                                            'Delete deletedPost ' +
                                            deletedPost.id
                                        }
                                        className="rw-button rw-button-small rw-button-red"
                                        onClick={() =>
                                            onDeleteClick(deletedPost.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </nav>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DeletedPostsList
