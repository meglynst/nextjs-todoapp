"use client";

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Input, Button, Text, Flex } from '@chakra-ui/react';

import { useAppDispatch } from '../state/hooks';
import { add } from '../features/todo';

const NewTodo = () => {

  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ title: "" }}
      onSubmit={(values) => {
        dispatch(add({
          title: values.title,
        }));
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .required()
      })}
    >
      {({
        values,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleReset,
        errors,
        touched
      }) => (
        <Form>
          <Input
            name="title"
            id="title"
            placeholder="Enter todo title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            background="white"
            variant="outline"
            isInvalid={errors.title && touched.title ? true : false}
            mb={errors.title && touched.title ? 1 : 3}
          />

          {errors.title && touched.title && (
            <Text color="red" fontSize={14} marginBottom={3}>This field is required</Text>
          )}

          <Flex gap={3}>
            <Button
              colorScheme="teal"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
              value="Reset"
            >
              Reset
            </Button>
            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
          </Flex>

        </Form>
      )}
    </Formik>
  )
}

export default NewTodo