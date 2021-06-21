import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin_screen from "./screens/signin"
import Signup_screen from "./screens/signup"


const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin_screen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Signin_screen"
          component={Signin_screen}
        />
        <Stack.Screen
          name="Signup_screen"
          component={Signup_screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}