import { render } from '@redwoodjs/testing/web'

import CustomForm from './CustomForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomForm', () => {
    it('renders successfully', () => {
        expect(() => {
            render(<CustomForm />)
        }).not.toThrow()
    })
})
