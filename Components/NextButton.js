import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import react from 'react';
import { Alert,Button, NativeEventEmitter, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import Signupform from '../Screens/Signupform';



export default class NextButton extends React.Component {
    

    constructor(props){
        super(props);
        this.state = { disabled: true, emailText: '' }
    }
    
     
    onChangeText = (text) => {
        console.log(text, text.length);
        // if(text.length >= 7){
        //     this.setState({ disabled: false });
        //     this.setState({ emailText: text });
        // }else{
        //     this.setState({ disabled: true });
        // }
        this.setState({ emailText: text });
    }


    
    render(){  
        
        const { navigation } = this.props;

        return(
            <View style={{ position:'relative', alignItems:"center"}}> 

            <TextInput 
              style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: "80%",marginTop:30}}
              onChangeText={(text)=>this.onChangeText(text)}
              autoCompleteType = 'email'
              placeholder ="Enter your Email "
              maxLength= {30}/>        
            
            <View style ={[this.state.disabled ? styles.button : styles.buttonEnabled]}>
               <TouchableOpacity 
                    onPress={()=> {
                        navigation.navigate('Signupform', {
                            emailText: this.state.emailText,
                        })}
                    }
                > 
                    <Text style ={[this.state.disabled ? styles.DisabledText : styles.EnabledText]}>
                        Next
                    </Text> 
                </TouchableOpacity> 
            </View>
            </View>
        );
    }
    
}




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