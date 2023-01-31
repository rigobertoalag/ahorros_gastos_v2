import axios from "axios";
import {
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  TextArea,
} from "native-base";
import React, { useState } from "react";

const OutPutsForm = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSendOutPut = async () => {
    if (amount && title && description) {
      try {
        const response = await axios.post(
          `https://apex.oracle.com/pls/apex/ahorros_gastos_api/ag/gastos/?gs_amount=${amount}&gs_title=${title}&gs_description=${description}`
        );
        if (response.status === 200) {
          navigation.navigate("Home");
        }else{
          console.log('Algo salio mal')
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      console.log("error falta algo");
    }
  };

  return (
    <Center>
      <FormControl>
        <Stack mx="4" my="4">
          <FormControl.Label>Ingresa el gasto</FormControl.Label>
          <Input
            type="text"
            placeholder="$0.00"
            keyboardType="numeric"
            value={amount}
            onChangeText={(amount) => setAmount(amount)}
          />

          <FormControl.Label>Concepto del gasto</FormControl.Label>
          <Input
            type="text"
            placeholder="Gasto de comida"
            value={title}
            onChangeText={(title) => setTitle(title)}
          />

          <FormControl.Label>Descripcion del gasto</FormControl.Label>
          <TextArea
            h={20}
            value={description}
            placeholder="Comida del dia"
            onChangeText={(description) => setDescription(description)}
          />
        </Stack>
      </FormControl>
      <Button
        onPress={() => onSendOutPut()}
        isDisabled={
          amount === "" || title === "" || description === "" ? true : false
        }
      >
        Enviar
      </Button>
    </Center>
  );
};

export default OutPutsForm;
