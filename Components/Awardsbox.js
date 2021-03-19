import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class Awardsbox extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style ={styles.Awardsbox}>
                    <TouchableHighlight
                     
                     >
                     

                     </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default Awardsbox;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        flexDirection:"row",
        marginLeft:17

    },

    Awardsbox:{
        height:96,
        width:67,
        borderRadius:5,
        backgroundColor:"#FFF",
        position:'relative',
        marginLeft:21,
        marginTop:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:.84,
        elevation:5,
        marginBottom:41
    }
});