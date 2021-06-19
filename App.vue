<template>
  <app-navigator />
</template>

<script>
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "./screens/Home.vue";

const StackNavigator = createStackNavigator(
  {
    // Home: HomeScreen,
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
};
</script>
