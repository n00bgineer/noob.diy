import { render } from '@redwoodjs/testing/web'

import CustomTab from './CustomTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomTab', () => {
    it('renders successfully', () => {
        expect(() => {
            render(<CustomTab />)
        }).not.toThrow()
    })
})
