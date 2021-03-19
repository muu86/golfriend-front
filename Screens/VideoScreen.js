import React, { Component, PureComponent }  from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { Camera } from 'expo-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import getDate from '../Components/GetDate';
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';




class VideoScreen extends PureComponent {
   
    constructor(props) {
    super(props)
    this.state = {
      isRecording: false,
      processing: false,
      isUploaded:false,
      
    }
  }
  
  render() {

  
    const { isRecording, processing, isUploaded } = this.state;
  

    let button = (
      <TouchableOpacity
        onPress={this.takeVideo.bind(this)}
       
      >
        <FontAwesome name ={'video-camera'} size ={60} />
      </TouchableOpacity>
    );

    
    if (isRecording) {
      button = (
        <TouchableOpacity
          onPress={this.stopRecord.bind(this)}>  
           <FontAwesome name ={'stop-circle'} size ={60} />
        </TouchableOpacity>
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
        <View style={styles.container}>
          <StatusBar>

          </StatusBar>
            <Animatable.View animation='fadeInDownBig'>
            <View style={styles.CameraBox}> 
                <Camera style={{flex:1, justifyContent:"flex-end"}}>
                
 
                  { button }
                </Camera> 
                
            </View>
            </Animatable.View>

                
        
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
    container:{
        flex:1,
        backgroundColor:"#98fb98",
        alignItems:"center",

    },
    CameraBox:{
        width:410,
        height:"90%",
        backgroundColor:"black",
        marginTop:60,
    
        
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        marginTop:200,
      },
      button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
    ControllBox:{
        height:250,
        backgroundColor:"#ffe4c4",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal: 20,
        paddingVertical:70,
        marginTop:20,
        width:412,
        justifyContent:"center",
        flexDirection:"row",
    },
});

export default VideoScreen;

