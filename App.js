import React, { Component } from 'react'
import MyTabs from './src/components/TabsComponent'
import { View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'

export default class App extends Component {
  render() {
    return (
           <NavigationContainer>
             <MyTabs />
           </NavigationContainer>
    )
  }
}
