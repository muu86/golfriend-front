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
  Alert,
  SafeAreaView
 } from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SignUpButton from '../Components/SignupButton';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderBackButton } from '@react-navigation/stack';

const LoginPageScreen = ({ navigation }) => {
    
    const navi =  useNavigation();

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const sendForm = async () => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const result = await fetch('http://121.138.83.4:80/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        .then(res => res.text())
        .catch(e => console.log(e));

        console.log(result);

        if (result === "bad") {
            Alert.alert('회원 정보가 일치하지 않습니다.');
            return;
        }
        navigation.navigate('TabStackScreen');
    }

    return (
      <View style={styles.container}>
            <SafeAreaView style ={{flexDirection:"row", justifyContent:"space-between" }}>
                <Text style={styles.Text}>Golfriend</Text>
                <HeaderBackButton 
                    pressColorAndroid="#FFF"
                    title= "back" 
                    onPress ={ () => navi.goBack()}
                    style={{marginTop:40}}
                    />
            </SafeAreaView>         
           
           <View style ={{ }}>
               <Text style={styles.TextType}>
                   로그인
                </Text>

            <TextInput 
              style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: "80%",marginTop:30}}
              onChangeText={input =>setEmail(input)}
              autoCompleteType = 'name'
              placeholder ="하하 입력해주세요"
              maxLength= {30}/>

              <TextInput 
              style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: "80%",marginTop:30}}
              onChangeText={input => setPassword(input)}
              autoCompleteType = 'password'
              placeholder ="비밀번호를 입력해주세요 "
              maxLength= {30}/>
           </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={sendForm}
            >
                <Text style ={styles.DisabledText}>
                    로그인
                </Text> 
            </TouchableOpacity> 


           <View style ={{with:"100", height:450, justifyContent:"center"}}>
                <Text style ={styles.TextType3}>
                    반갑습니다. 오늘도 Golfreind와 함께하세요.
                </Text>
            </View>
      </View>
    );
};

export default LoginPageScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FFF'
    },
   TextType:{
       fontSize: 30,
       marginHorizontal:31,
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
  },
  DisabledText:{
    color:"#FFF"
},
button:{
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
    width: "80%",
    height: 50,
    marginTop:50,
    borderRadius:12,
    shadowColor:"#000",
    shadowOffset:{
       
        width:0,
        height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:.84,
    elevation:5,
    marginHorizontal:40
 },
 Text :{
    fontSize:25,
    fontWeight:'bold',
    marginHorizontal:31,
    marginTop:30,
    textAlign:"left"
}, 
  });