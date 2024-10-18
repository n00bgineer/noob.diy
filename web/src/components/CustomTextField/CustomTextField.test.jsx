import { render } from '@redwoodjs/testing/web'

import CustomTextField from './CustomTextField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomTextField', () => {
    it('renders successfully', () => {
        expect(() => {
            render(<CustomTextField />)
        }).not.toThrow()
    })
})
