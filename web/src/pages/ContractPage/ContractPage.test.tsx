import { render } from '@redwoodjs/testing/web'

import ContractPage from './ContractPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ContractPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContractPage />)
    }).not.toThrow()
  })
})
