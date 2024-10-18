import { render } from '@redwoodjs/testing/web'

import CustomMdxEditor from './CustomMdxEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomMdxEditor', () => {
    it('renders successfully', () => {
        expect(() => {
            render(<CustomMdxEditor />)
        }).not.toThrow()
    })
})
