import React from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar, ImageBackground } from 'react-native';
import CarsList from "./components/carsList/index"
import Header from "./components/Header/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <CarsList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
