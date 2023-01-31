import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loggedIn = () => {
    if (user && password) {
      navigation.navigate("Home");

      setUser("");
      setPassword("");
      setUserError("");
      setPasswordError("");
    } else if (!user && password) {
      setUserError("Ingresa un usuario");
    } else if (user && !password) {
      setPasswordError("Ingresa la contraseña");
    } else {
      setUserError("Ingresa un usuario");
      setPasswordError("Ingresa la contraseña");
    }
  };

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Bienvenido
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Para continuar inicia sesion
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Nombre de usuario</FormControl.Label>
              <Input
                type="text"
                placeholder="Nombre de usuario"
                value={user}
                onChangeText={(userName) => setUser(userName)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input
                type="password"
                placeholder="***"
                value={password}
                onChangeText={(pwd) => setPassword(pwd)}
              />
            </FormControl>
            <Button
              mt="2"
              bgColor="primary.700"
              onPress={() => loggedIn()}
              isDisabled={user === "" || password === "" ? true : false}
            >
              Iniciar sesion
            </Button>
          </VStack>
        </Box>
      </Center>
    </Box>
    // <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
    //   <FormControl>
    //     <Stack mx="4" my="4">
    //       <FormControl.Label>Usuario</FormControl.Label>
    //       <Input
    //         type="text"
    //         placeholder="Nombre de usuario"
    //         value={user}
    //         onChangeText={(userName) => setUser(userName)}
    //       />

    //       {!userError ? null : (
    //         <Text color="red.500" fontWeight="bold">
    //           {userError}
    //         </Text>
    //       )}

    //       <FormControl.Label isRequired>Contraseña</FormControl.Label>
    //       <Input
    //         type="password"
    //         placeholder="***"
    //         value={password}
    //         onChangeText={(pwd) => setPassword(pwd)}
    //       />

    //       {!passwordError ? null : (
    //         <Text color="red.500" fontWeight="bold">
    //           {passwordError}
    //         </Text>
    //       )}
    //     </Stack>
    //   </FormControl>
    //   <Button
    //     onPress={() => loggedIn()}
    //     isDisabled={user === "" || password === "" ? true : false}
    //   >
    //     Entrar
    //   </Button>
    // </Box>
  );
};

export default Login;
