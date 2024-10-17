import {
    deletedPosts,
    deletedPost,
    createDeletedPost,
    updateDeletedPost,
    deleteDeletedPost,
} from './deletedPosts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('deletedPosts', () => {
    scenario('returns all deletedPosts', async (scenario) => {
        const result = await deletedPosts()

        expect(result.length).toEqual(Object.keys(scenario.deletedPost).length)
    })

    scenario('returns a single deletedPost', async (scenario) => {
        const result = await deletedPost({
            id: scenario.deletedPost.one.id,
        })

        expect(result).toEqual(scenario.deletedPost.one)
    })

    scenario('creates a deletedPost', async () => {
        const result = await createDeletedPost({
            input: {
                content: 'String',
                updatedAt: '2024-10-17T14:37:52.438Z',
                slug: 'String4497686',
            },
        })

        expect(result.content).toEqual('String')
        expect(result.updatedAt).toEqual(new Date('2024-10-17T14:37:52.438Z'))
        expect(result.slug).toEqual('String4497686')
    })

    scenario('updates a deletedPost', async (scenario) => {
        const original = await deletedPost({
            id: scenario.deletedPost.one.id,
        })
        const result = await updateDeletedPost({
            id: original.id,
            input: { content: 'String2' },
        })

        expect(result.content).toEqual('String2')
    })

    scenario('deletes a deletedPost', async (scenario) => {
        const original = await deleteDeletedPost({
            id: scenario.deletedPost.one.id,
        })
        const result = await deletedPost({ id: original.id })

        expect(result).toEqual(null)
    })
})
