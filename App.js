import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStackScreen from './Router/RootStackScreen';
import StartScreen from './Screens/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Screens/SplashScreen';
import TabStackScreen from './Router/TabStackScreen';

export default class App extends Component{
 
  state ={
    isLoading : true
  };
  // 시간을 넣어서 로딩페이지 잡아줄 예정
  componentDidMount = async() => {
    //1,000 1초 
    setTimeout(() => {this.setState({isLoading: false})},2000);
  }

  render() {
   if(this.state.isLoading){    
      return <SplashScreen/>;
    }
    return(
      <NavigationContainer> 
          <RootStackScreen />
          {/* <TabStackScreen /> */}
      </NavigationContainer>
    );
      
      // return (

      //   <NavigationContainer>
      //     <TabStackScreen />
      //   </NavigationContainer>

      // );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title : {
    color : 'black',
    fontSize : 45,
    fontWeight:'bold',
  },
});