import axios from 'axios'
import { Box, Heading, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import HomeChart from './HomeChart'
import HomePageTopBtn from './HomePageTopBtn'
import HomePageTotals from './HomePageTotals'
import { useIsFocused } from "@react-navigation/native";
import HomePageLists from './HomePageLists'

const HomePage = ({ navigation }) => {
    const [entriesData, setEntriesData] = useState([]);
    const [outPutsData, setOutPutsData] = useState([]);
    const [isLoadingEntries, setIsLoadingEntries] = useState(true)
    const [isLoadingOuts, setIsLoadingOuts] = useState(true)

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            axios
                .get("https://apex.oracle.com/pls/apex/ahorros_gastos_api/ag/ahorros/")
                .then((response) => setEntriesData(response.data.items))
                .then(setIsLoadingEntries(false))
                .catch((error) => console.error(error));

            axios
                .get("https://apex.oracle.com/pls/apex/ahorros_gastos_api/ag/gastos/")
                .then((response) => setOutPutsData(response.data.items))
                // .then(setIsLoadingOuts(false))
                .catch((error) => console.error(error));
        }
        setIsLoadingOuts(false)
    }, [isFocused]);

    return (
        <Box flex={1} bg="#fff" pt={12}>
            {
                isLoadingOuts ? <Text>Cargando...</Text> : (
                    <>
                        <Box ml={4} mt={2}>
                            <Heading size="xl">Bienvenido</Heading>
                            <HomePageTopBtn navigation={navigation} />
                            <HomePageTotals navigation={navigation} entriesData={entriesData} outPutsData={outPutsData} />
                        </Box>
                        <HomeChart entriesData={entriesData} outPutsData={outPutsData} />
                        <HomePageLists entriesData={entriesData} outPutsData={outPutsData} />
                    </>
                )
            }

        </Box>
    )
}

export default HomePage