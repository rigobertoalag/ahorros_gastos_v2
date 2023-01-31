import { Center, Heading, HStack, Pressable } from "native-base";
import React from "react";

const HomePageTopBtn = ({ navigation }) => {
  return (
    <Center mt="4">
      <HStack space={3}>
        <Pressable maxW="96" onPressOut={() => navigation.navigate("Ahorros")}>
          {({ isPressed }) => {
            return (
              <Center
                bg={isPressed ? "primary.200" : "primary.100"}
                w="150"
                h="150"
                rounded="md"
                shadow="3"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Heading size="lg">Ingresos</Heading>
              </Center>
            );
          }}
        </Pressable>
        <Pressable maxW="96" onPressOut={() => navigation.navigate("Gastos")}>
          {({ isPressed }) => {
            return (
              <Center
                bg={isPressed ? "primary.400" : "primary.300"}
                w="150"
                h="150"
                rounded="md"
                shadow="3"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Heading size="lg">Gastos</Heading>
              </Center>
            );
          }}
        </Pressable>
      </HStack>
    </Center>
  );
};

export default HomePageTopBtn;
