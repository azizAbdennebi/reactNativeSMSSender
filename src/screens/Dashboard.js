import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import phoneFunctions from "../core/phoneFunctions";
import * as SMS from "expo-sms";
import { withNavigationFocus } from "react-navigation";

function Dashboard({ navigation, isFocused }) {
  const [num, setNum] = useState("");
  const phoneGetter = async () => {
    let num = await phoneFunctions.getPhoneNumber();
    return num;
  };
  useEffect(() => {
    (async () => {
      let number = await phoneGetter();
      setNum(number);
    })();

    return () => {};
  }, [isFocused]);

  if (num == "") {
    navigation.navigate("AddPhoneNumber");
  }

  const sendCode = async (code) => {
    console.log(code);

    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync([num], `${code}`);
      console.log(result);
    } else {
      // misfortune... there's no SMS available on this device
    }
  };

  return (
    <Background>
      <Header>Les fonctionalites</Header>
      <Button mode="outlined" onPress={() => sendCode(777)}>
        Localiser
      </Button>
      <Button mode="outlined" onPress={() => sendCode(666)}>
        Rappel de commande vocale
      </Button>
      <Button mode="outlined" onPress={() => sendCode(555)}>
        Enregistrements séparés
      </Button>

      <Button mode="outlined" onPress={() => sendCode(666)}>
        Rappel de commande vocale
      </Button>

      <Button mode="outlined" onPress={() => sendCode(102)}>
        Requête sur le chemin d’emplacement
      </Button>

      <Button mode="outlined" onPress={() => sendCode(444)}>
        Arrêtez tout les taches
      </Button>

      <Button mode="outlined" onPress={() => sendCode(888)}>
        Etat de l'hôte
      </Button>

      <Button mode="outlined" onPress={() => sendCode(999)}>
        Redémarrez l'hôte
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate("AddPhoneNumber")}
      >
        Changer de numero
      </Button>

      <Button mode="outlined" onPress={() => navigation.navigate("HomeScreen")}>
        Se deconnecter
      </Button>
    </Background>
  );
}
// const Dashboard = ({ navigation }) => {
//   let num = await phoneFunctions.getPhoneNumber();
//   let num = "";
//   console.log("num ===", num);
//   if (num == "") {
//     console.log("phone number nnot found");

//     return (
//       <View>
//         <Text>TEST</Text>
//       </View>
//     );
//   }

//   const sendCode = async (code) => {
//     console.log(code);

//     const isAvailable = await SMS.isAvailableAsync();
//     if (isAvailable) {
//       const { result } = await SMS.sendSMSAsync([num], `${code}`);
//       console.log(result);
//     } else {
//       // misfortune... there's no SMS available on this device
//     }
//     /* SendSMS.send({
//       body: `${code}`,
//       recipients: ['+21695812739'],
//       successTypes: ['sent', 'queued'],
//       allowAndroidSendWithoutReadPermission: true
//   }, (completed, cancelled, error) => {

//       console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

//   }); */
//   };

//   return (
//     <Background>
//       <Header>Les fonctionalites</Header>
//       <Button mode="outlined" onPress={() => sendCode(777)}>
//         Localiser
//       </Button>
//       <Button mode="outlined" onPress={() => sendCode(666)}>
//         Rappel de commande vocale
//       </Button>
//       <Button mode="outlined" onPress={() => sendCode(555)}>
//         Enregistrements séparés
//       </Button>

//       <Button mode="outlined" onPress={() => sendCode(666)}>
//         Rappel de commande vocale
//       </Button>

//       <Button mode="outlined" onPress={() => sendCode(102)}>
//         Requête sur le chemin d’emplacement
//       </Button>

//       <Button mode="outlined" onPress={() => sendCode(444)}>
//         Arrêtez tout les taches
//       </Button>

//       <Button mode="outlined" onPress={() => sendCode(888)}>
//         Etat de l'hôte
//       </Button>

//       <Button mode="outlined" onPress={() => sendCode(999)}>
//         Redémarrez l'hôte
//       </Button>

//       <Button
//         mode="outlined"
//         onPress={() => navigation.navigate("AddPhoneNumber")}
//       >
//         Changer de numero
//       </Button>

//       <Button mode="outlined" onPress={() => navigation.navigate("HomeScreen")}>
//         Se deconnecter
//       </Button>
//     </Background>
//   );
// };
/*
const numberget= proc=>{
  return(
    <Background>
          

          <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
          </Background>
  );
}
*/

export default withNavigationFocus(Dashboard);
