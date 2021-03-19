import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import react from 'react';
import { Alert,Button, NativeEventEmitter, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';



const SignUpButton = ({ navigation, emailText }) => {
    const [lastName, setLastName] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const sendForm = async () => {
        const formData = new FormData();

        // formData.append('signUp', {
        //     lastName: lastName,           
        //     firstName: firstName,
        //     password: password,
        //     emailText: emailText,
        // });

        formData.append('lastName', lastName);
        formData.append('firstName', firstName);
        formData.append('password', password);
        formData.append('emailText', emailText);
        console.log(firstName, lastName, password, emailText);
        console.log(formData);

        const result = await fetch("http://121.138.83.4:80/signup", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData
        })
        .then(res => res.text())
        .catch(e => console.log(e));

        console.log(result);
        Alert.alert(result);

        navigation.navigate('LoginPageScreen');
    }

    return(
        <View style={{ position:'relative', alignItems:"center"}}> 

        <TextInput 
            style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: "80%",marginTop:30}}
            onChangeText={(text)=>setLastName(text)}
            autoCompleteType = 'name'
            placeholder ="성을 입력해주세요"
            maxLength= {30}/>

            <TextInput 
            style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: "80%",marginTop:30}}
            onChangeText={(text)=>setFirstName(text)}
            autoCompleteType = 'name'
            placeholder ="이름을 입력해주세요 "
            maxLength= {30}/>

            <TextInput 
            style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: "80%",marginTop:30}}
            onChangeText={(text)=>setPassword(text)}
            autoCompleteType = 'password'
            placeholder ="비밀번호을 입력 해주세요 "
            maxLength= {30}/>          
        
        <View style ={styles.buttonEnabled}>
            <TouchableOpacity 
            onPress={sendForm}>
                <Text style ={styles.EnabledText}>
                    회원 가입
                </Text> 
            </TouchableOpacity> 
        </View>
        </View>
    );
};

export default SignUpButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center",
        width: "85%",
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
    
    },
    buttonEnabled:{
        backgroundColor:'#90ee90',
        alignItems:"center",
        justifyContent:"center",
        width: "85%",
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
    },
    DisabledText:{
        color:"#FFF"
    },
    EnabledText:{
        color:"black"
    }

});