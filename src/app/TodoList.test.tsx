import { screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import TodoList from './TodoList'
import { render } from '../testHelpers'
import { TodoI } from '../types'

const mockDispatch = vi.fn()
const mockAppSelector = vi.fn()
vi.mock('../state/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => [FIXTURE],
}))

const FIXTURE: TodoI = { id: '1', title: 'Test Todo', isDone: false }

describe('TodoList', () => {
  it('renders list of TodoItems', () => {
    render(<TodoList />)
    expect(screen.getAllByTestId('todo-item')).toHaveLength(1)
  })

  it('renders Delete All button when todos exist', () => {
    // TODO: fix this test
    render(<TodoList />)
    expect(screen.getByText(/Delete All/i)).toBeInTheDocument()
  })

  it('renders empty message if no todos', () => {
    // TODO: fix this test
    render(<TodoList />)
    expect(screen.getByText(/no todos/i)).toBeInTheDocument()
  })
})
