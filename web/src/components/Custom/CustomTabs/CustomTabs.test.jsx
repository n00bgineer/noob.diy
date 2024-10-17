import { render } from '@redwoodjs/testing/web'

import CustomTabs from './CustomTabs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomTabs', () => {
    it('renders successfully', () => {
        expect(() => {
            render(<CustomTabs />)
        }).not.toThrow()
    })
})
