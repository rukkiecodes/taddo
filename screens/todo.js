import React, { useState } from 'react';
import { StyleSheet, Button, StatusBar, Text, View, SafeAreaView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Task from '../components/task';


import back_button_icon from "../assets/arrow_back.png"
import menu_button_icon from "../assets/menu_vertical.png"
import plus_icon from "../assets/icons_plus.png"

export default function todo () {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  // Date picker
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        style={styles.scloll_view}
        keyboardShouldPersistTaps='handled'
      >

        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          {/* <Text style={styles.sectionTitle}>Today's tasks</Text> */}
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

        <View>
          <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Image style={styles.addText} source={plus_icon} />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
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
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  head_text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#434343'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#434343'
  },
  items: {
    marginTop: 30,
  },
  scloll_view: {
    marginBottom: 60
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    width: 250,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  addText: {
    width: 20,
    height: 20
  },
})