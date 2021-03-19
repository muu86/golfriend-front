import { NativeAppEventEmitter } from "react-native";
import React from 'react';
import  { View, StyleSheet, Text } from "react-native";


const AiScreen = () =>{

    return(
        <View styles={styles.container}>
            <Text style = {styles.Text}>Ai screen</Text>
        </View>
    );
};
export default AiScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "black",
        alignItems:"center",
        justifyContent: "center",
        
    },
    Text :{
        fontSize:20,
        color: 'red',
        fontWeight: 'bold',
        textAlign:"center",
        
    }
});