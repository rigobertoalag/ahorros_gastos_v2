import {
  Button,
  Center,
  FormControl,
  Input,
  Stack,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import axios from 'axios';

const EntriesForm = async() => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSendEntri = async(e) => {
    e.preventDefault()
    const data = new FormData(amount, title, description)

    if(amount && title && description){
        console.log('enviamos la info', amount, title, description)
        try{
          const response = await axios.post(`https://apex.oracle.com/pls/apex/ahorros_gastos_api/ag/ahorros/?ah_title=${title}&ah_description=${description}&ah_amount=${amount}`);
          console.log(response.data)
        }catch(e){
          console.error(e);
        }
    }else{
        console.log('error falta algo')
    }
  }

  return (
    <Center>
      <FormControl>
        <Stack mx="4" my="4">
          <FormControl.Label>Dinero a ingresar</FormControl.Label>
          <Input
            type="text"
            placeholder="$0.00"
            keyboardType="numeric"
            value={amount}
            onChangeText={(amount) => setAmount(amount)}
          />

          <FormControl.Label>Concepto de ahorro</FormControl.Label>
          <Input
            type="text"
            placeholder="Ahorro mensual"
            value={title}
            onChangeText={(title) => setTitle(title)}
          />

          <FormControl.Label>Descripcion del ahorro</FormControl.Label>
          <TextArea
            h={20}
            value={description}
            placeholder="Text Area Placeholder"
            onChangeText={(description) => setDescription(description)}
          />
          {/* <Input
            type="text"
            placeholder="Ahorro que hago del mes"
            // value={user}
            // onChangeText={(userName) => setUser(userName)}
          /> */}
        </Stack>
      </FormControl>
      <Button
        onPress={() => onSendEntri()}
      //   isDisabled={user === "" || password === "" ? true : false}
      >
        Enviar
      </Button>
    </Center>
  );
};

export default EntriesForm;
