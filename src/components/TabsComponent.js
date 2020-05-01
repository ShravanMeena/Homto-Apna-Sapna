import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screens/HomeScreen'
import Update from './../screens/UpdateScreens'
import Notification from './../screens/NotificationScreen'
import Profile from './../screens/ProfileScreen'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Update"
        component={Update}
        options={{
          tabBarLabel: 'Update',
          tabBarIcon: ({ color }) => (
            <Icon name="md-star" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name = "Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <Icon name="md-notifications" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs