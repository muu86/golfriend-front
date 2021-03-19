import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class CustomButton extends Component{
    static defaultProps = {
        title: 'untitled',
        buttonColor: 'black',
        titleColor: 'black',
        onPress: () => null,
      }
    
      constructor(props){
        super(props);
      }
    
      render(){
        return (
          <TouchableOpacity 
            style={[
              styles.button,
              {backgroundColor: this.props.buttonColor}
            ]}
            onPress={this.props.onPress}
          >
            <Text 
              style={[
                styles.title,
                { color: this.props.titleColor }
              ]}
            >
                {this.props.title}
            </Text>
          </TouchableOpacity>
        )
      }
    }

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:16,
    borderRadius:10,
    shadowColor:"#000",
    shadowOffset:{
        width:0,
        height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:.84,
    elevation:5,
  },
  title: {
    fontSize: 14,
  },
});