import { Camera } from 'expo-camera';
import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const getDate = function(option) { // getDate변수를 설정해서 동여상이 저장될떄 시간별로 쌓일 수 있도록 만들어 줬다.

    var date = new Date();
  
    var yyyy = date.getFullYear();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var hh = date.getHours();
    var mm2 = date.getMinutes();
    var ss = date.getSeconds();
    var ms = date.getMilliseconds();
  
    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;
    if (hh < 10) hh = '0' + hh;
    if (mm2 < 10) mm2 = '0' + mm2;
    if (ss < 10) ss = '0' + ss;
  
    if (option == 'yyyy') {
       return "" + yyyy;
    } else if (option == 'yyyymm') {
       return "" + yyyy + mm;
    } else if (option == 'yyyymmdd') {
       return "" + yyyy + mm + dd;
    } else if (option == 'yyyymmddhh') {
       return "" + yyyy + mm + dd + hh;
    } else if (option == 'yyyymmddhhmm') {
       return "" + yyyy + mm + dd + hh + mm2;
    } else if (option == 'yyyymmddhhmmss') {
       return "" + yyyy + mm + dd + hh + mm2 + ss;
    } else if (option == 'yyyymmddhhmmssms') {
       return "" + yyyy + mm + dd + hh + mm2 + ss + ms;
    } else {
       return "" + yyyy + mm + dd;
    }
  
  };

export default getDate;