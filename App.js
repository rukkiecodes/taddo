import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from "firebase";

import Signin_screen from "./screens/signin"
import Signup_screen from "./screens/signup"
import Todo_screen from "./screens/todo"


const Stack = createStackNavigator()

export default function App () {
  var fire_config = {
    apiKey: "AIzaSyBh5xvcvFTbkvb_mHYauCC1sjx1ZgREWDU",
    authDomain: "taskbash.firebaseapp.com",
    projectId: "taskbash",
    storageBucket: "taskbash.appspot.com",
    messagingSenderId: "21742881721",
    appId: "1:21742881721:web:7849f0ee4a4d2e43a44468",
    measurementId: "G-1B2E967P6L"
  };

  // Initialize Firebase
  // firebase_app.initializeApp(fire_config)
  // firebase.initializeApp(fire_config)
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
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
        <Stack.Screen
          name="Todo_screen"
          component={Todo_screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}