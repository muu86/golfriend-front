import * as React from 'react';


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  { View, StyleSheet, Text, Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


import ListScreen from '../Screens/ListScreen';
import AiScreen from '../Screens/AiScreen';
import { createStackNavigator } from '@react-navigation/stack';
import VideoScreen from '../Screens/VideoScreen';
import CameraButton from '../Components/CameraButton';
import { StackActions } from '@react-navigation/native';
import VideoRecord from '../Screens/VideoRecordScreen';



const TabStack = createBottomTabNavigator();
const TabStackScreen = ({navigation}) => {

  return(
      <TabStack.Navigator 
         

          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === '최근분석') {
              iconName = focused ? 'ios-trending-up' : 'ios-trending-up-outline';
              
            } else if (route.name === '카메라'){
              iconName = focused ? 'camera-outline' : 'camera';
            } else if (route.name === '기록'){
              iconName = focused ? 'ios-timer-outline' : 'ios-timer-sharp';
            } 
            return <Icon name={iconName} size={size}  color={color}/>;
          },
        })}

          tabBarOptions={{ // 활성화 되면 검정색 비 활성화 되면 검정색
          activeTintColor: '#90ee90',
          inactiveTintColor: 'gray',
 
        }} 
         >
        <TabStack.Screen name = "최근분석" component ={ ListScreen } />
        <TabStack.Screen name = " " component ={VideoRecord}
        
        options={{tabBarIcon:({color, size, focused}) =>(
          <CameraButton />
        ), tabBarVisible:false }}/>
       
        <TabStack.Screen name = "기록" component ={ AiScreen }  />
      </TabStack.Navigator>
  
 );
}



export default TabStackScreen;


const styles =  StyleSheet.create({
  contaier:{
    flex:1,
    alignItems:'center'
  }
})