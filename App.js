import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import MainScreen from './screen/main';

export default class Main extends React.Component {
  render(){
    return(
      <View>
        <MainScreen/>
      </View>
    )
  }
}