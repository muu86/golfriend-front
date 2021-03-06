import React, {Component} from 'react';
import 
{ View,
Text,
StyleSheet,
Animated } 
from 'react-native';
import { render } from 'react-dom';
import Logo from '../Components/Logo';

export default class SplashScreen extends Component {
    
    state = {
        animated:new Animated.Value(0),
    }
    
    componentDidMount(){
        const {animated} = this.state;

        Animated.timing(animated,{
            toValue:10,
            duration:1000,
            useNativeDriver: true,
        }).start()
    }

    render() {
        const { animated } = this.state;

        return(
            <View style ={styles.container}>
                
                <Animated.View
                style={{         
                justifyContent : 'center',
                width:100,
                height:100,
                borderRadius:50,
                justifyContent:"center",
                position:'absolute',
                backgroundColor : '#90ee90',
                transform:[
                    {
                        scale:animated
                    }
                ]
                }}>
                
                </Animated.View>
                <Logo />    
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex :1,
        justifyContent : "center",
        alignItems: "center",
    },

});