import React, { memo, useState } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import phoneFunctions from "../core/phoneFunctions";

const AddPhoneNumber = ({ navigation }) => {
  const [number, setPhoneNumber] = useState("");
  const onSubmit = () => {
    phoneFunctions.setPhoneNumber(number);
    navigation.navigate("Dashboard");
  };
  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("Dashboard")} />
      <Logo />
      <Header>Numero de telephone du GPS</Header>
      <TextInput
        label="Number"
        value={number}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Button mode="contained" onPress={onSubmit}>
        {" "}
        Valider{" "}
      </Button>
    </Background>
  );
};

export default memo(AddPhoneNumber);
/*
const styles = StyleSheet.create({
  background: {
    backgroundColor:'#ECDCCD',

    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
/*      <TextInput
        label="phoneNumber"
        returnKeyType="next"
        value={phoneNumber.value}
        onChangeText={text => setphoneNumber({ value: text, error: '' })}
        name="phoneNumber"
        autoCapitalize="none"
        autoCompleteType="phoneNumber"
        textContentType="numero"
        keyboardType="numeric"
      />

      

      

      <Button mode="contained" onPress={_onSubmitPressed}>
      soumettre
      </Button>
      <Button mode="outlined" onPress={navigation.navigate('Dashboard')}>
      Annuler
      </Button>
/*/
