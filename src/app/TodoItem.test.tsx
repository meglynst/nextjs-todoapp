import { afterEach, describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import {
  cleanup,
  fireEvent,
  getByText,
  getByRole,
  act,
  screen,
} from '@testing-library/react'
import TodoItem from './TodoItem'
import { TodoI } from '../types'
import { ChakraProvider } from '@chakra-ui/react'
import { Providers } from '../providers'
import { beforeEach } from 'node:test'
import { render } from '../testHelpers'

const FIXTURE: TodoI = { id: '1', title: 'Test Todo', isDone: false }

const mockDispatch = vi.fn()
vi.mock('../state/hooks', () => ({ useAppDispatch: () => mockDispatch }))

describe('TodoItem', () => {
  it('renders todo title', () => {
    const { getByText } = render(<TodoItem todo={FIXTURE} />)

    expect(getByText(FIXTURE.title)).toBeInTheDocument()
  })

  it('renders delete button', () => {
    const todo = FIXTURE

    const { getByRole } = render(<TodoItem todo={todo} />)

    expect(getByRole('button', { name: 'Delete' })).toBeInTheDocument()
  })

  it('deletes when delete button clicked', () => {
    const todo = { ...FIXTURE, isDone: false }

    const { getByRole } = render(<TodoItem todo={todo} />)
    fireEvent.click(getByRole('button', { name: 'Delete' }))

    expect(mockDispatch).toHaveBeenCalledOnce()
  })

  it('calls updateTodo when checkbox clicked', async () => {
    const todo = { ...FIXTURE, isDone: false }

    const { getByRole } = render(<TodoItem todo={todo} />)
    fireEvent.click(getByRole('checkbox'))

    expect(mockDispatch).toHaveBeenCalledOnce()
  })
})
