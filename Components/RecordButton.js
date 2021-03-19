import { Camera } from 'expo-camera';
import react, { useState } from 'react';
import React from 'react';
import { render } from 'react-dom';
import { View, StyleSheet, Text, Animated, Alert } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import getDate from './GetDate';
import Modalpage from './ModalPage';


export default class RecordButton extends React.Component {

    
    constructor(props){
        super(props)
        this.state = {
            isRecording: false,
            processing: false,
            isUploaded:false,
           
        }
    }

        render(){

            const { isRecording, processing, isUploaded } = this.state;
  

            let button =(
                <View style={styles.buttonWidth}>
                    <TouchableOpacity
                    onPress = {this.takeVideo.bind(this)}
                    >
                        <Animated.View style ={styles.button}>
                                    
                        </Animated.View>    
                        
                    </TouchableOpacity>
                </View>
            );


            if (isRecording){
                button =(
                    <View style={styles.buttonWidth}>
                    <TouchableOpacity
                    onPress = {this.stopRecord.bind(this)}
                    >
                        <Animated.View style ={styles.button2}>
                                    
                        </Animated.View>    
                        
                    </TouchableOpacity>
                </View>
                );  
            } 
            if (processing) {
                button = (
                  <View>
                   
                    <ActivityIndicator animating size={60} color ={'black'}/>
                  </View>
                );
              }

        return(
            
            
            <View style={{flex:0.5, marginTop:70}} >
                 { button }
            </View>
        
        );
    }

    takeVideo = async () => {
        const options ={
            maxDuration:10,
        }
      this.setState({isRecording:true,processing:false});  
      if (this.camera) {
        try {
          const promise = this.camera.recordAsync(options);
  
          if (promise) {
            this.setState({isRecording: false, processing:true});
            const data = await promise;
  
            console.log(data.uri);
            // data 를 api 로 전송
            const formData = new FormData();
            formData.append('data', {
              name: 'video_upload',
              type: 'video/mp4',
              uri: data.uri,
            });
  
            const result = await fetch('http://121.138.83.4:80/uploads' + getDate('yyyymmddhhmmssms'), {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              body: formData,
            }).catch((error) => console.log(error));
  
            this.setState({isRecording: false, processing:false});
            this.setState({isUploaded: true});
            console.warn('takeVideo', data);
          }
        } catch (e) {
          console.error(e);
        }
      }
    };
    
  
    stopRecord = async () => {
      if (this.state.isRecording == true) {
        this.camera.stopRecording();
      }
    };
  

}


const styles = StyleSheet.create({
    button:{
        backgroundColor:"#FF0000",
        alignItems:"center",
        justifyContent:"center",
        width: 80,
        height: 80,
        borderRadius: 50,
        shadowColor:"#4169e1",
        shadowOffset:{ height:10 },
        shadowOpacity: 0.3,
        borderColor:"#FFF",
        shadowRadius:10,
    },
    buttonWidth:{
        alignItems:"center",
        justifyContent:"center",
        width: 90,
        height: 90,
        borderRadius: 50,
        top:-55,
        borderColor:"#FFF",
        shadowRadius:10,
        borderWidth:2.5,
        position:'absolute',
      
    },

    button2:{
        backgroundColor:"#FF0000",
        alignItems:"center",
        justifyContent:"center",
        width: 40,
        height: 40,
        borderRadius: 8,
        shadowColor:"#4169e1",
        shadowOffset:{ height:10 },
        shadowOpacity: 0.3,
        borderColor:"#FFF",
        shadowRadius:10,
    }
});