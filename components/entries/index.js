import { Box, Heading } from 'native-base'
import React from 'react'
import EntriesForm from './EntriesForm'

const Entries = ({ navigation }) => {
  return (
    <Box flex={1} bg="#fff">
      <Box mt={2}>
        <Heading ml={4} size="xl">Ingresar dinero</Heading>
        <EntriesForm navigation={navigation} />
      </Box>
    </Box>
  )
}

export default Entries