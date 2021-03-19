
import { Button, NativeAppEventEmitter, StatusBar, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";
import React, { Component } from 'react';
import  { View, 
    StyleSheet, 
    Text,  
    TouchableHighlight
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "react-native/Libraries/NewAppScreen";
import { HeaderBackButton } from "@react-navigation/stack";
import QuestionButton from "../Components/QuestionButton";
import Awardsbox from "../Components/Awardsbox";
import PerfectButton from "../Components/PerfectButton";
import ImproveButton from "../Components/ImproveButton";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/core";





export default class ListScreen extends Component {

    

    render() {
        
        const { navigation } = this.props;
        const {width, height} =  Dimensions.get( 'window' );
        console.log(width,height)
        
        return (
            <View style={styles.maincontainer}> 
            <StatusBar backgroundColor ={"#FFF"} barStyle={"dark-content"}></StatusBar>
            <SafeAreaView style ={{flexDirection:"row", justifyContent:"space-between" }}>
                <Text style={styles.Text}>Golfriend</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Drawn')}>
                        <FontAwesome style={{marginRight:31, marginTop:43}}name ={ 'user' } size ={20} color ={'#000'} />
                </TouchableOpacity>
            </SafeAreaView>         
            
           <ScrollView style={styles.container}>
              
               


            <Text style ={styles.Text}>
                    Awards
            </Text>

            <ScrollView // Awards View
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalSCroll}>
                <Awardsbox />
                <Awardsbox />
                <Awardsbox />
                <Awardsbox />
                <Awardsbox />
                <Awardsbox />

            </ScrollView>
            <Text style ={ styles.PerfectText}>
                    당신의 Pro Shot
            </Text>

            <ScrollView //  당신의 perfect View
            horizontal
            showsHorizontalScrollIndicator ={false}
            style={styles.horizontalSCroll2}>
                <PerfectButton />
                <PerfectButton />
                <PerfectButton />
                <PerfectButton />
                <PerfectButton />
                <PerfectButton />
                <PerfectButton />

            </ScrollView>
            <Text style ={ styles.Text}>
                    개선사항
            </Text>
            
           <ImproveButton />
           <ImproveButton />
           <ImproveButton />

                
                
            </ScrollView>
        </View>
        );
    }
}




const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"column",

    },
    container:{
        flex:1,
        backgroundColor:'#FFF',
 
        
    },
    headerView:{
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        width:"100%",
        height:100,
        backgroundColor:"#0F152C",

    },
    Text :{
        fontSize:25,
        fontWeight:'bold',
        marginHorizontal:31,
        marginTop:30,
        textAlign:"left"
    }, 
    PerfectText :{
        fontSize:22,
        fontWeight:'bold',
        marginHorizontal:32,
       
    }, 
    headerText:{
        color:'#FFF',
        textAlign:"left",
        fontSize:14,
        fontWeight:"bold",
        marginTop:52,
        marginHorizontal:31
      
    },

     headline: {
        alignSelf: "center",
        fontSize: 18,
        marginTop: 10,
        marginBottom: 30
      },
      videoTile: {
        alignSelf: "center",
        fontSize: 16,
        marginTop: 15
      },
      backgroundVideo: {
        width:"90%",
        height:450,
        paddingTop:80,
        
      },
      horizontalSCroll1:{
          height:220,
          width:"100%",
          marginLeft:32,
          marginVertical:22,
          backgroundColor:'black',
      },
      horizontalSCroll2:{
        height:175,
        width:"100%",
        marginHorizontal:20,
        marginTop:30,
    }



});