import { Center, Text } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import getTotals from "../utils/getTotals";

const HomeChart = ({ entriesData, outPutsData }) => {
  const entries = getTotals(entriesData, "entries-chart");
  const outputs = getTotals(outPutsData, "outputs-chart");

  const data = [
    {
      name: "Ingresos",
      amount: entries,
      color: "#a5f3fc",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Gastos",
      amount: outputs,
      color: "#22d3ee",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <Center mt={2}>
      <PieChart
        data={data}
        width={Dimensions.get("window").width - 30}
        height={220}
        chartConfig={{
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor={"amount"}
        backgroundColor={"transparent"}
        // paddingLeft={"15"}
        center={[90, 0]}
        hasLegend={false}
        absolute
      />
    </Center>
  );
};

export default HomeChart;
