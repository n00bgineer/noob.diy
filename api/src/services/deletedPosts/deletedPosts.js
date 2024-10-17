import { db } from 'src/lib/db'

export const deletedPosts = () => {
    return db.deletedPost.findMany()
}

export const deletedPost = ({ id }) => {
    return db.deletedPost.findUnique({
        where: { id },
    })
}

export const createDeletedPost = ({ input }) => {
    return db.deletedPost.create({
        data: input,
    })
}

export const updateDeletedPost = ({ id, input }) => {
    return db.deletedPost.update({
        data: input,
        where: { id },
    })
}

export const deleteDeletedPost = ({ id }) => {
    return db.deletedPost.delete({
        where: { id },
    })
}
