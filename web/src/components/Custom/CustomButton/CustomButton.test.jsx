import { render } from '@redwoodjs/testing/web'

import CustomButton from './CustomButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomButton', () => {
    it('renders successfully', () => {
        expect(() => {
            render(<CustomButton />)
        }).not.toThrow()
    })
})
