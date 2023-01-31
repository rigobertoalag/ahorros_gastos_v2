import moment from "moment";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  SectionList,
  Text,
} from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { currencyFormat } from "../utils/getTotals";

const HPList = ({ listType, entrData, outsData }) => {
  return (
    <Box bgColor={listType === 'Ingresos' ? "primary.100" : "primary.200"} w={"1/2"}>
      <Center>
        <Heading fontSize="md" pb="2">
          {listType}
        </Heading>
      </Center>

      <SectionList
        h={Dimensions.get("window").height - 630}
        sections={listType === "Ingresos" ? [...entrData] : [...outsData]}
        renderItem={({ item }) => (
          <HStack>
            {listType === "Ingresos" ? (
              <Text color={"green.500"} mx="1">
                +
              </Text>
            ) : (
              <Text color={"red.500"} mx="1">
                -
              </Text>
            )}

            <HStack space="1" w="4/5">
              <Text w="2/3">
                {listType === "Ingresos"
                  ? currencyFormat(item.ahr_amount)
                  : currencyFormat(item.gst_amount)}
              </Text>
              <Divider
                bg={listType === 'Ingresos' ? "emerald.500" : "red.500"}
                thickness="2"
                // mx="2"
                ml="-1"
                orientation="vertical"
              />

              <Text>
                {listType === "Ingresos"
                  ? moment(item.ahr_created_at, "YYYY/MM/DD HH:mm").format(
                      "DD/MM/YY"
                    )
                  : moment(item.gst_created_at, "YYYY/MM/DD HH:mm").format(
                      "DD/MM/YY"
                    )}
              </Text>
            </HStack>
          </HStack>
        )}
        keyExtractor={(item) =>
          listType === "Ingresos" ? item.ahr_id : item.gst_id
        }
      />
    </Box>
  );
};

export default HPList;
