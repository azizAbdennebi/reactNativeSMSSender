import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { emailValidator } from '../core/utils';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import Button from '../components/Button';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('LoginScreen')} />

      {/*<Logo />*/}

      <Header>Restaurer le mot de passe</Header>

      <TextInput
        label="Adresse e-mail"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="eAdresse e-mail"
        keyboardType="Adresse e-mail"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
      Envoyer les instructions de réinitialisation
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.label}>← Retour connexion</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
