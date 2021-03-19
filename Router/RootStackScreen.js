import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../Screens/StartScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import SigninScreen from '../Screens/SigninScreen';
import SplashScreen from '../Screens/SplashScreen';
import TabStackScreen from './TabStackScreen';
import DrawerStackScreen from './DrawerStackScreen';
import EmailButton from '../Components/emailButton';
import Signupform from '../Screens/Signupform';
import NextButton from '../Components/NextButton';
import VideoRecord from '../Screens/VideoRecordScreen';
import VideoScreen from '../Screens/VideoScreen';
import LoginPageScreen from '../Screens/LoginPageScreen';




const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode = 'None'>
        {/* <RootStack.Screen name ='SplashScreen' component ={SplashScreen} /> */}
       
        <RootStack.Screen name ='StartScreen' component ={StartScreen} />
        <RootStack.Screen name ='SigninScreen' component ={SigninScreen}/>
        <RootStack.Screen name ='SignUpScreen' component ={SignUpScreen}/>
        <RootStack.Screen name ='TabStackScreen' component={TabStackScreen}/>
        <RootStack.Screen name ='Drawn' component={DrawerStackScreen}/>
        <RootStack.Screen name ='EmailButton' component={EmailButton}/>
        <RootStack.Screen name ='Signupform' component={Signupform}/>
        <RootStack.Screen name ='NextButton' component={NextButton}/>
        <RootStack.Screen name = 'VideoRecord' component ={VideoRecord}/>
        <RootStack.Screen name = 'LoginPageScreen' component ={LoginPageScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;

