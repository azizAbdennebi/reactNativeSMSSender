import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
   
    <Header>Bienvenue</Header>
    <Logo />
    <Paragraph>
      Accèder à l'emplacement de vos objets et meme de vos proches avec un click.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Se connecter
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      S'enregistrer
    </Button>
  </Background>
);

export default memo(HomeScreen);
