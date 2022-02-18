import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const Audio = ({ navigation }) => {
    return (
<View>
    <TextInput style={styles.contanier}
        label="Email"
      />
     <Button mode="outlined" onPress={() => navigation.navigate('Dashboard')}>
         Neldu
     </Button>
</View>

    )
}
const styles=StyleSheet.create({
    contanier:{ flex:1,
     marginTop:100,
     marginBottom:40,
     marginLeft:100,
     marginRight:100
    }
 })

export default Audio
