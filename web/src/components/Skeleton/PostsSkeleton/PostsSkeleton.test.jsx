import { render } from '@redwoodjs/testing/web'

import PostsSkeleton from './PostsSkeleton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostsSkeleton', () => {
    it('renders successfully', () => {
        expect(() => {
            render(<PostsSkeleton />)
        }).not.toThrow()
    })
})
