import { Box, Heading, HStack, Spinner, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import axios from "axios";

import getTotals from "../utils/getTotals";
import Loader from "../utils/Loader";

const HomePageTotals = ({ entriesData, outPutsData }) => {
  return (
    <VStack space={2} mt={8}>
      {entriesData && outPutsData ? (
        <>
          <Box>
            {entriesData ? (
              <HStack alignItems="center" space={2}>
                <Box rounded={"full"} bgColor="#a5f3fc" w={4} h={4}></Box>
                <Heading>
                  Ingresos: {getTotals(entriesData, "entries")}
                </Heading>
              </HStack>
            ) : (
              <Text>Cargando...</Text>
            )}
          </Box>
          <Box>
            {!outPutsData ? (
              <Text>Cargando...</Text>
            ) : (
              <HStack alignItems="center" space={2}>
                <Box rounded={"full"} bgColor="#22d3ee" w={4} h={4}></Box>
                <Heading>Retiros: {getTotals(outPutsData, "outputs")}</Heading>
              </HStack>
            )}
          </Box>
        </>
      ) : (
        <Loader />
      )}
    </VStack>
  );
};

export default HomePageTotals;
