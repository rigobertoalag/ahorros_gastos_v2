import { Box, Heading, Text } from 'native-base'
import React from 'react'
import EntriesForm from './EntriesForm'

const Entries = () => {
  return (
    <Box flex={1} bg="#fff">
      <Box mt={2}>
        <Heading ml={4} size="xl">Ingresar dinero</Heading>
        <EntriesForm />
      </Box>
    </Box>
  )
}

export default Entries