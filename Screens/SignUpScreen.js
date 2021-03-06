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
import NextButton from '../Components/NextButton';
import { HeaderBackButton } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';


const SignUpScreen = ({ navigation }) => {
    const navi =  useNavigation();
    return (
      <View style={styles.container}>
          
          <HeaderBackButton
              pressColorAndroid="#FFF"
              title= "back" 
              onPress ={ () => navi.goBack()} />
              
           <View style ={{ }}>
               <Text style={styles.TextType}>
                   회원가입
               </Text>
              <Text style={styles.TextType2}>
                당신의 스윙자세를 진단해보세요.
              </Text>

            <NextButton navigation={navigation} />
            
            <View style ={{with:"100", height:450,justifyContent:'flex-end'}}>
              <Text style ={styles.TextType3}>
                  회원가입시 Golfriend의 서비스 이용 약관과 {'\n'}개인정보 보호정책에 동의하게 됩니다.
              </Text>
            </View>
            
           </View>
      </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FFF'
    },
   TextType:{
       fontSize: 22,
       marginLeft:31,
       marginVertical:30,
       
       
   },
   TextType2:{
       marginHorizontal:20,
       fontSize:16,
       fontWeight:"100",
       marginLeft:31
   },
   TextType3:{
       fontSize:12,
       color:"#6F6F6F",
       marginLeft:-10,
       lineHeight:20,
       textAlign:'center'
       
   }
  });