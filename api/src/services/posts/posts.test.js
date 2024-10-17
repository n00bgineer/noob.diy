import { posts, post, createPost, updatePost, deletePost } from './posts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('posts', () => {
    scenario('returns all posts', async (scenario) => {
        const result = await posts()

        expect(result.length).toEqual(Object.keys(scenario.post).length)
    })

    scenario('returns a single post', async (scenario) => {
        const result = await post({ id: scenario.post.one.id })

        expect(result).toEqual(scenario.post.one)
    })

    scenario('creates a post', async () => {
        const result = await createPost({
            input: {
                content: 'String',
                slug: 'String1666493',
                updatedAt: '2024-10-17T14:37:36.712Z',
            },
        })

        expect(result.content).toEqual('String')
        expect(result.slug).toEqual('String1666493')
        expect(result.updatedAt).toEqual(new Date('2024-10-17T14:37:36.712Z'))
    })

    scenario('updates a post', async (scenario) => {
        const original = await post({ id: scenario.post.one.id })
        const result = await updatePost({
            id: original.id,
            input: { content: 'String2' },
        })

        expect(result.content).toEqual('String2')
    })

    scenario('deletes a post', async (scenario) => {
        const original = await deletePost({
            id: scenario.post.one.id,
        })
        const result = await post({ id: original.id })

        expect(result).toEqual(null)
    })
})
