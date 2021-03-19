import react from 'react';
import React from 'react';
import { View, StyleSheet, Text, Animated, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';


export default class QuestionButton extends React.Component{
    render(){

         return(
            <View style={{position:'absolute', alignItems:"center"}} >
                <Animated.View style ={styles.button}>
                    <TouchableOpacity onPress ={()=>  Alert.alert('잘찍어봐')}>
                        <Animated.View>
                            <Icon name ='help-outline' size ={25} color = "#FFF" />
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:"#2E4CD1",
        alignItems:"center",
        justifyContent:"center",
        width: 24,
        height: 24,
        borderRadius:40,
        marginLeft:350,
        marginTop:52,
    }
});