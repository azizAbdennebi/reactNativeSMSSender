import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;

