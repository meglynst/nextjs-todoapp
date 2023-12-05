'use client'

import React from 'react'
import NewTodo from './NewTodo'
import TodoList from './TodoList'
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  const formBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background={formBackground}
        p={9}
        w={600}
        rounded={6}
        m={7}
      >
        <Heading mb={6} size="md">
          Todo App
        </Heading>
        <NewTodo />
        <TodoList />
      </Flex>
    </Flex>
  )
}
