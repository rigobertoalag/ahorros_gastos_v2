import { Center, Divider, Heading, HStack } from "native-base";
import { Dimensions } from "react-native";
import React from "react";
import HPList from "./HPList";

const HomePageLists = ({ entriesData, outPutsData }) => {
  const entrData = [
    {
      title: "Ahorros",
      data: entriesData,
    },
  ];

  const outsData = [
    {
      title: "Gastos",
      data: outPutsData,
    },
  ];

  return (
    <>
      <Heading ml={4} mb="2">
        Ultimos movimientos
      </Heading>
      <Center>
        <HStack
          w={Dimensions.get("window").width - 30}
          borderRadius={"md"}
          shadow="3"
        >
          {/* BEGIN LISTA DE ULTIMOS INGRESOS  */}
          <HPList listType={"Ingresos"} entrData={entrData} />
          {/* END LISTA DE ULTIMOS INGRESOS  */}

          <Divider orientation="vertical" bg="primary.600" thickness="2" />

          {/* BEGIN LISTA DE ULTIMOS GASTOS  */}
          <HPList listType={"Gastos"} outsData={outsData} />
          {/* END  LISTA DE ULTIMOS GASTOS  */}
        </HStack>
      </Center>
    </>
  );
};

export default HomePageLists;
