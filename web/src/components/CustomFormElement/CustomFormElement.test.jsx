import { render } from '@redwoodjs/testing/web'

import CustomFormElement from './CustomFormElement'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomFormElement', () => {
    it('renders successfully', () => {
        expect(() => {
            render(<CustomFormElement />)
        }).not.toThrow()
    })
})
