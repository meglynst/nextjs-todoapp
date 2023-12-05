import { screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Providers } from '../providers'
import { render } from '../testHelpers'
import Home from './page'

describe('Home', () => {
  it('renders heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: 'Todo App' })
    expect(heading).toBeInTheDocument()
  })

  it('renders NewTodo component', () => {
    render(<Home />)
    expect(screen.getByTestId('new-todo')).toBeInTheDocument()
  })

  it('renders TodoList component', () => {
    render(<Home />)
    expect(screen.getByTestId('todo-list')).toBeInTheDocument()
  })
})
