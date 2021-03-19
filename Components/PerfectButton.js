import react from 'react';
import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';


export default class PerfectButton extends React.Component{
    render(){
        return(
            <View style={{position:'relative'}} >
                <Animated.View style ={styles.button}>
                    <Text style ={styles.Text}>
                        A
                    </Text>
                </Animated.View>
                <View style ={{width:80, height:54}}>
                    <Text 
                    style={{
                        marginLeft:7, 
                        marginTop:8,
                        textAlign:"center",
                        fontSize:16,
                        color:"#0066FF",
                        fontWeight:'bold'}}>

                        탑 오브더 스윙
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:"#0066FF",
        alignItems:"center",
        justifyContent:"center",
        width: 67,
        height: 67,
        borderRadius: 100,
        shadowOffset:{height:10},
        borderWidth:9,
        borderColor:'#DAE9FF',
        marginLeft:10,
    },
    
    Text:{
        fontSize:30,
        color: "#FFF",
        fontWeight:"bold",
        textAlign:'left',
        marginBottom:2
    }
});