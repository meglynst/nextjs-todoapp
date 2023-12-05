'use client'

import { FC } from 'react'

import { Checkbox, Button, Flex, Text } from '@chakra-ui/react'

import { remove, update } from '../features/todo'
import { useAppDispatch } from '../state/hooks'

import { TodoI } from '../types'

const TodoItem: FC<{
  todo: TodoI
}> = ({ todo }) => {
  const dispatch = useAppDispatch()

  const updateTodo = (title: string = todo.title) => {
    dispatch(
      update({
        todo: {
          isDone: !todo.isDone,
          title,
        },
        id: todo.id,
      })
    )
  }

  return (
    <Flex
      justifyContent="space-between"
      gap={4}
      padding={1}
      marginTop={2}
      data-testid="todo-item"
    >
      <Checkbox onChange={() => updateTodo()} checked={todo.isDone} gap={2}>
        <Text
          noOfLines={1}
          maxWidth={380}
          onDoubleClick={() => {
            const newTitle = prompt('New title:', todo.title)
            if (newTitle) {
              updateTodo(newTitle)
            }
          }}
        >
          {todo.title}
        </Text>
      </Checkbox>
      <Button
        colorScheme="red"
        aria-label="Delete"
        onClick={() =>
          dispatch(
            remove({
              id: todo.id,
            })
          )
        }
      >
        Delete
      </Button>
    </Flex>
  )
}

export default TodoItem
