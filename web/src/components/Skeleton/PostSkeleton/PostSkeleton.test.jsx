import { render } from '@redwoodjs/testing/web'

import PostSkeleton from './PostSkeleton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostSkeleton', () => {
    it('renders successfully', () => {
        expect(() => {
            render(<PostSkeleton />)
        }).not.toThrow()
    })
})
