import { Box, Heading } from 'native-base'
import React from 'react'
import OutPutsForm from './OutPutsForm'

const OutPuts = ({ navigation }) => {
  return (
    <Box flex={1} bg="#fff">
      <Box mt={2}>
        <Heading ml={4} size="xl">Ingresar gasto</Heading>
        <OutPutsForm navigation={navigation} />
      </Box>
    </Box>
  )
}

export default OutPuts