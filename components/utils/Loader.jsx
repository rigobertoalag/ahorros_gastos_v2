import { Heading, HStack, Spinner } from "native-base";
import React from "react";

const Loader = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Cargando datos" />
      <Heading color="primary.500" fontSize="md">
        Cargando...
      </Heading>
    </HStack>
  );
};

export default Loader;
