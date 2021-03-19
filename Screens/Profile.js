import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Profile extends Component {
    render() {
        return (
            <View style={Styles.container}> 
                <Text>
                    프로필 설정 하세요.
                </Text>
            </View>
        );
    }
}

export default Profile;



const  Styles = StyleSheet.create({
    container:{
        flex:1,
    },
});