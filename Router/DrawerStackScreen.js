import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from '../Screens/ListScreen';
import Profile from '../Screens/Profile';
import TabStackScreen from './TabStackScreen';



const Drawer = createDrawerNavigator();

export default function DrawerStackScreen() {
  return (
    
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="로그아웃" component={Profile} />
      </Drawer.Navigator>
    
  );
}