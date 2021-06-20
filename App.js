import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image } from 'react-native';

const background_image = require("./assets/ball1.png");
const logo = require("./assets/logo.png");

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image_container}>
        <ImageBackground source={background_image} style={styles.background_image}>
          <Image
            source={logo}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  background_image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
  image_container: {
    width: '100%',
    height: '65%'
  },
});
