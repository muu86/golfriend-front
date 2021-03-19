import React, { useState, useEffect, PureComponent, useRef } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    StatusBar, 
    Button,
    Alert,
} from 'react-native';
import { Camera } from 'expo-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LocalImage from '../Components/ImagePicker';
import Animated from 'react-native-reanimated';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { Audio } from 'expo-av';



export default function VideoRecord () {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraReady , setCameraReady] = useState(false);
  
  const [audioPermission, setHasAudioPermission ] = useState(null);

  const camera = React.useRef();


 const Recording = async ()=> {
    if(cameraReady){
      let Video = await camera.current.recordAsync();
      console.log(Video);
    } 
  };

  const StopRecording = async ()=>{
    if(cameraReady){
      let stop = await camera.current.stopRecording();
      console.log(stop)
    }
  };

  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  useEffect(()=>{
    (async()=>{
      const { status } = await Audio.requestPermissionsAsync();
      setHasAudioPermission(status === 'granted');
    })();
  }, []);


    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  

    if(audioPermission === null){
      return <View />;
    } if 
    (audioPermission === false){
      return <Text>No access to Audio</Text>;
    }

    let button =(
      <View style={styles.buttonWidth}>
          <TouchableOpacity
          onPress = { Recording }  >         
             
              <Animated.View style ={styles.button}>
                          
              </Animated.View>    
              
          </TouchableOpacity>
      </View>
  );

    return(    
    <View style={styles.container}>
    <StatusBar hidden = {true }/>       
      <View style={{flexDirection:'row', alignContent:'space-between'}}>
          <View style ={styles.headerButton} >
                <TouchableOpacity>
                    <Text style={styles.buttonText}>
                        정면 뷰
                    </Text>
                </TouchableOpacity>
          </View>

          <View style ={styles.headerButton} >
                <TouchableOpacity>
                    <Text style={styles.buttonText}>
                        아이언
                    </Text>
                </TouchableOpacity>
          </View>
      </View> 
   
      <Camera 
      style={styles.camera} 
      type= { type }
      ref={camera}
      onCameraReady={() => setCameraReady(true)}
      >
        <View style={styles.buttonBox}>
        <LocalImage />
            
            
           {/* <View style={styles.buttonWidth}>
                      <TouchableOpacity
                      onPress = { Recording }>
                      
                          <Animated.View style ={styles.button2}>
                                      
                          </Animated.View>    
                          
                      </TouchableOpacity>
           </View>
           <Button title ='stop' onPress={StopRecording} /> */}

           { button }
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );}}>
            <FontAwesome name = 'repeat' size={45} style={{color:"#FFF"}} />
          </TouchableOpacity>
        </View>
        
        
      </Camera>
    </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor:"#000"
    },
    camera: {
      width:"96%",
      height:"92%",
      marginBottom:9,
      justifyContent:'flex-end',
     
    },
    buttonBox:{
        flexDirection:'row',
        color:"#FFF",
        width:"100%",
        height:150,
        justifyContent:'center'

    },
    button1: {
      flex:0.5,
      alignItems: 'center',
      marginTop:58,
      marginRight:-25
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
    headerButton:{
        width:67,
        height:40,
        borderWidth:0.7,
        backgroundColor:"#FFFFFF",
        marginTop:7,
        marginBottom:7,
        marginLeft:12,
        borderRadius:25,
        justifyContent:'center',
        borderColor:"#73E681",
       
        
    },
    buttonText:{
        textAlign:'center',
        color:"#73E681"
    },
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
  