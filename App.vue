<template>
  <app-navigator></app-navigator>
</template>

<script>
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import HomeScreen from "./screens/Home.vue";

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
}
</script>
