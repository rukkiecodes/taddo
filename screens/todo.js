import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, SafeAreaView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

import back_button_icon from "../assets/arrow_back.png"
import menu_button_icon from "../assets/menu_vertical.png"
import plus_icon from "../assets/icons_plus.png"

export default function todo () {
  return (
    <SafeAreaView style={styles.safe_area_view}>
      <StatusBar
        animated={true}
        backgroundColor="#f4f4f4"
        barStyle={'dark-content'}
      />
      <View style={styles.nav_view}>
        <TouchableOpacity style={styles.nav_touch}>
          <Image source={back_button_icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav_touch}>
          <Image source={menu_button_icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.head_text_view}>
        <Text style={styles.head_text}>Todays tasks</Text>
      </View>
      <View style={styles.scrollView_view}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. terry
          </Text>
        </ScrollView>
      </View>

      <View style={styles.inputs_action}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
        />

        <TouchableOpacity style={styles.add_task}>
          <Image source={plus_icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  nav_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '8%'
  },
  nav_touch: {
    width: 20,
    height: 20
  },
  head_text_view: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '15%',
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  head_text: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  scrollView_view: {
    paddingHorizontal: 20,
    // height: '80%'
    // maxHeight: 500
    maxHeight: '69%'
  },
  scrollView: {
  },
  text: {
    fontSize: 14,
  },
  inputs_action: {
    height: '8%',
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    height: '90%',
    width: '75%',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 20
  },
  add_task: {
    backgroundColor: '#fff',
    height: '90%',
    width: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})