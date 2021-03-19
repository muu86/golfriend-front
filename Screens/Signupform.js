import React, { Component } from 'react';
import {    
  View, 
  Text, 
  Button, 
  TouchableOpacity, 
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert
 } from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SignUpButton from '../Components/SignupButton';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderBackButton } from '@react-navigation/stack';



const Signupform = ({ navigation, route }) => {
    const navi =  useNavigation();
    const { emailText } = route.params;
    return (
      <View style={styles.container}>

              <HeaderBackButton 
              pressColorAndroid="#FFF"
              title= "back" 
              onPress ={ () => navi.goBack()}
              />
          
           <View style ={{ }}>
               <Text style={styles.TextType}>
                   환영합니다!
               </Text>
              <Text style={styles.TextType2}>
                 스윙자세 진단을 위해 Golfriend@gmail.com 으로 {"\n"}
                 새로운 계정을 만듭니다.
              </Text>

              <SignUpButton navigation={navigation} emailText={emailText} />

           </View>
           <View style ={{with:"100", height:450, justifyContent:"center"}}>
                <Text style ={styles.TextType3}>
                    회원가입시 Golfriend의 서비스 이용 약관과 {'\n'}개인정보 보호정책에 동의하게 됩니다.
                </Text>
            </View>
      </View>
    );
};

export default Signupform;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FFF'
    },
   TextType:{
       fontSize: 30,
       marginHorizontal:20,
       marginVertical:30,
       
       
   },
   TextType2:{
       marginHorizontal:20,
       fontSize:16,
       fontWeight:"100",
   },
   TextType3:{
    fontSize:12,
    color:"#6F6F6F",
    marginLeft:-10,
    lineHeight:20,
    textAlign:'center'
  }
  });